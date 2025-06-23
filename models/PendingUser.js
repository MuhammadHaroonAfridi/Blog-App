import mongoose from "mongoose";

const PendingUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      default: "https://ui-avatars.com/api/?name=Muhammad+Haroon&background=random",
    },
    otp: {
      type: Number,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } // This adds createdAt and updatedAt automatically
);

// ✅ Correct TTL Index on createdAt
PendingUserSchema.index({ createdAt: 1 }, { expireAfterSeconds: 60 });

const PendingUserModel = mongoose.model("PendingUser", PendingUserSchema);

export default PendingUserModel;
