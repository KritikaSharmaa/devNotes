// app/types/task.ts
export type Task = {
  _id: string;
  title: string;
  description: string;
  category: string;
  priority: "low" | "medium" | "high";
  completed: boolean;
  createdAt: Date;
};