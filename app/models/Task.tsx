import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: String,

  description: String,

  category:  String,

  priority: String, // e.g., "Low", "Medium", "High"

  status: { type: String, default: "pending" }, // e.g., "pending", "in progress", "completed"

  createdAt: { type: Date, default: Date.now }
});

export const Task =
  mongoose.models.Task || mongoose.model("Task", taskSchema);