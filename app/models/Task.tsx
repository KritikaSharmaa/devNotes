import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: String,

  description: String,

  category:  String,

  priority: String, // e.g., "Low", "Medium", "High"

  completed: { type: Boolean, default: false },

  createdAt: { type: Date, default: Date.now }
});

export const Task =
  mongoose.models.Task || mongoose.model("Task", taskSchema);