import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  mnum: {
    type: Number,
  },
});

export default mongoose.model("User", userSchema);
