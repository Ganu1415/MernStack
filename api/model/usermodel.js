import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  companyName: {
    type: String,
  },
});

export default mongoose.model("User", userSchema);
