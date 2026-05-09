"use client";

import { useActionState } from "react";
import { createTaskServerAction } from "@/app/actions/taskActions";

type FormErrors = {
  title?: string;
  description?: string;
  category?: string;
  priority?: string;
};

type FormState = {
  errors: FormErrors;
  success: boolean;
};

const initialState: FormState = { errors: {}, success: false };

export default function CreateTaskForm() {
  const [state, formAction, isPending] = useActionState(
    createTaskServerAction,
    initialState
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Create Task
        </h1>

        {state.success && (
          <div className="mb-4 rounded-lg bg-green-100 px-4 py-3 text-green-700 text-sm font-medium">
            ✅ Task created successfully!
          </div>
        )}

        <form className="space-y-5" action={formAction}>

          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter task title"
              className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white
                ${state.errors.title ? "border-red-500" : "border-gray-300 dark:border-gray-600"}`}
            />
            {state.errors.title && (
              <p className="mt-1 text-sm text-red-500">{state.errors.title}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              placeholder="Enter task description"
              className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white
                ${state.errors.description ? "border-red-500" : "border-gray-300 dark:border-gray-600"}`}
            />
            {state.errors.description && (
              <p className="mt-1 text-sm text-red-500">{state.errors.description}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Enter category"
              className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white
                ${state.errors.category ? "border-red-500" : "border-gray-300 dark:border-gray-600"}`}
            />
            {state.errors.category && (
              <p className="mt-1 text-sm text-red-500">{state.errors.category}</p>
            )}
          </div>

          {/* Priority */}
          <div>
            <label htmlFor="priority" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              defaultValue=""
              className={`w-full rounded-lg border px-4 py-2 bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500
                ${state.errors.priority ? "border-red-500" : "border-gray-300 dark:border-gray-600"}`}
            >
              <option value="" disabled>Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            {state.errors.priority && (
              <p className="mt-1 text-sm text-red-500">{state.errors.priority}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-lg bg-blue-600 py-2 text-white font-medium hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isPending ? "Creating..." : "Create Task"}
          </button>

        </form>
      </div>
    </div>
  );
}