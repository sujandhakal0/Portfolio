import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { User } from "../models/userSchema.js";
import { v2 as cloudinary } from "cloudinary";

export const register = catchAsyncErrors(async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return next(new ErrorHandler("Avatar and Resume Required!", 400));
  }
  const { avater, resume } = req.files;

  const cloudinaryResponseAvater = await cloudinary.uploader.upload(
    avater.tempFilePath,
    { folder: "AVATAR" }
  );

  if (!cloudinaryResponseAvater || cloudinaryResponseAvater.error) {
    console.error(
      "Cloudinary Error:",
      cloudinaryResponseAvater.error || "Unknown cloudinary Error"
    );
  }
  const cloudinaryResponseResume = await cloudinary.uploader.upload(
    resume.tempFilePath,
    { folder: "RESUME" }
  );

  if (!cloudinaryResponseResume || cloudinaryResponseResume.error) {
    console.error(
      "Cloudinary Error:",
      cloudinaryResponseResume.error || "Unknown cloudinary Error"
    );
  }

  const {
    fullName,

    email,

    phone,

    aboutMe,

    password,

    portfolioUrl,
    githubURL,
    linkedInURL,
    instaURL,
    xURL,
  } = req.body;

  const user = await User.create({
    fullName,

    email,

    phone,

    aboutMe,

    password,

    portfolioUrl,
    githubURL,
    linkedInURL,
    instaURL,
    xURL,
    avater:{
        public_id: cloudinaryResponseAvater.public_id,
        url: cloudinaryResponseAvater.secure_url
    },
    resume:{
        public_id: cloudinaryResponseResume.public_id,
        url: cloudinaryResponseResume.secure_url
    },
  });
  res.status(200).json({
    success: true,
    message: "Resister successful",
    date,
  });
});
