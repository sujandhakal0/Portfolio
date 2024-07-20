import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Name Required!"],
  },
  email: {
    type: String,
    required: [true, "Email Required!"],
  },
  phone: {
    type: String,
    required: [true, "Phone Numnberv Required!"],
  },
  aboutMe: {
    type: String,
    required: [true, "About Me Field Required!"],
  },
  password: {
    type: String,
    required: [true, "Password Required!"],
    minLength: [8, "Password must be of at least 8 characters"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  resume: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  portfolioUrl: {
    type: String,
    required: [true, "portfolio URL Requried"],
  },
  githubURL: String,
  linkedInURL: String,
  instaURL: String,
  xURL: String,

  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

// For Hashing Password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password ")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// for comparing hashed password with password
userSchema.methods.comparePasswords = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// generating json web token
userSchema.methods.generateJsonWebToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

export const User = mongoose.model("User", userSchema);
