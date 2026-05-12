"use server";

import { connectDB } from "@/app/lib/mongodb";
import { Task } from "@/app/models/Task";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type FormState = {
  errors: {
    title?: string;
    description?: string;
    category?: string;
    priority?: string;
    status?: string;
  };
  success: boolean;
};

export async function createTaskServerAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const category = formData.get("category") as string;
  const priority = formData.get("priority") as string;
  const status = formData.get("status") as string;

  // --- Validation ---
  const errors: FormState["errors"] = {};

  if (!title || title.trim().length < 3) {
    errors.title = "Title must be at least 3 characters.";
  }

  const charCount = description?.trim().length ?? 0;

  if (!description || charCount < 10) {
    errors.description = `Description must be at least 10 characters. (currently ${charCount})`;
  }

  if (!category || category.trim().length === 0) {
    errors.category = "Category is required.";
  }

  if (!priority) {
    errors.priority = "Please select a priority.";
  }

  if (!status) {
    errors.status = "Please select a status.";
  }

  // Return errors without hitting DB
  if (Object.keys(errors).length > 0) {
    return { errors, success: false };
  }

  // --- Save to DB ---
  await connectDB();
  await Task.create({ title, description, category, priority });

  revalidatePath("/"); // this will tell next.js homepage data changed, fetch fresh data again

  redirect("/");

  return { errors: {}, success: true };
}


export async function getTasks() {
  await connectDB();

  const tasks = await Task.find().sort({
    createdAt: -1,
  });

  return JSON.parse(JSON.stringify(tasks));
}

// app/actions/taskActions.ts

export async function updateTaskServerAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const _id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const category = formData.get("category") as string;
  const priority = formData.get("priority") as string;
  const status = formData.get("status") as string;

  const errors: FormState["errors"] = {};

  if (!title || title.trim().length < 3) {
    errors.title = "Title must be at least 3 characters.";
  }

  const charCount = description?.trim().length ?? 0;

  if (!description || charCount < 10) {
    errors.description = `Description must be at least 10 characters.`;
  }

  if (!category) {
    errors.category = "Category is required";
  }

  if (!priority) {
    errors.priority = "Priority is required";
  }

  if (!status) {
    errors.status = "status is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors, success: false };
  }

  await connectDB();

  await Task.findByIdAndUpdate(_id, {
    title,
    description,
    category,
    priority,
    status
  });

  revalidatePath("/");

  return {
    errors: {},
    success: true,
  };
}

export async function deleteTaskServerAction(id: string) {
  await connectDB();

  try {
    await Task.findByIdAndDelete(id);
  } catch (error) {
    return {
      errors: { general: "Failed to delete task. Please try again." },
      success: false,
    };
  }

  revalidatePath("/");

  return {
    errors: {},
    success: true,
  };
}