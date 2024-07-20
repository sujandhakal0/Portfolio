import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderName: {
    type: String,
    minLength: [3, "Name must be of at least 3 characters"],
  },
  subject: {
    type: String,
    minLength: [3, "Subject must be of at least 3 characters"],
  },
  message: {
    type: String,
    minLength: [3, "Message must be of at least 3 characters"],
  },
  ReceivedAt: {
    type: Date,
    default: Date.now( ),
  },
});

export const Message = mongoose.model("Message", messageSchema);