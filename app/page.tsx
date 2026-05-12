import { getTasks } from "./actions/taskActions";
import TaskContainer from "./components/TaskContainer";

export default async function Home() {

  const tasks = await getTasks();

  return <div>
    <h1 className="text-4xl font-bold text-center mt-20 text-gray-800 dark:text-white">
      Welcome to Task Manager
    </h1>
    <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
      Create, manage, and track your tasks with ease.
    </p>

    <div className="flex justify-center mt-10">
      <a
        href="/create"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
      >
        {tasks.length > 0 ? "Create New Task" : "Get Started"}
      </a>
    </div>
    <div className="mt-10">
      {tasks.length > 0 && <TaskContainer tasks={tasks} />}
    </div>
  </div>
}
