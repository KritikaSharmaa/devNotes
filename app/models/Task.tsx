import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: String,

  description: String,

  category:  String,

  priority: String, // e.g., "Low", "Medium", "High"
});

export const Task =
  mongoose.models.Task || mongoose.model("Task", taskSchema);