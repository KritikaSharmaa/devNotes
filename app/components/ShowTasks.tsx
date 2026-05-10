import {Task} from "@/app/types/task";

export default function ShowTasks({filteredTasks}: {filteredTasks: Task[]}) {
    return <div className="grid grid-cols-3 gap-4 p-10">
      {filteredTasks.map((task) => (
        <div
          key={task._id}
          className="bg-white rounded-xl shadow p-5"
        >
          <h2 className="text-xl font-semibold">
            {task.title}
          </h2>

          <p className="text-gray-600 mt-2">
            {task.description}
          </p>

          <div className="flex gap-3 mt-4">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              {task.category}
            </span>

            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm capitalize">
              {task.priority}
            </span>
          </div>
        </div>
      ))}

    </div>
}