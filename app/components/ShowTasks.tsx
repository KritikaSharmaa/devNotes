import { Task } from "@/app/types/task";
import { EllipsisVertical } from 'lucide-react';
import { SquarePen, RefreshCcw, Flag, Trash2 } from 'lucide-react';

export default function ShowTasks({ filteredTasks }: { filteredTasks: Task[] }) {
  return <div className="grid grid-cols-3 gap-4 p-10">
    {filteredTasks.map((task) => (
      <div
        key={task._id}
        className="bg-white rounded-xl shadow p-5"
      >
        <div className="w-full flex justify-between">
          <h2 className="text-xl font-semibold">
            {task.title}
          </h2>

          {/* <EllipsisVertical size={16} /> */}
          <div className="dropdown dropdown-end">
            <EllipsisVertical size={16} tabIndex={0} role="button" className="outline-none cursor-pointer"/>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li><a className="hover:bg-blue-600 hover:text-white"><SquarePen size={16}/>Edit task</a></li>
              <li><a className="hover:bg-blue-600 hover:text-white"><RefreshCcw size={16}/>Change status</a></li>
              <li><a className="hover:bg-blue-600 hover:text-white"><Flag size={16}/>Change priority</a></li>
              <li><a className="hover:bg-blue-600 hover:text-white"><Trash2 size={16}/>Delete task</a></li>
            </ul>
          </div>
        </div> 
 
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

          <span className="bg-yellow-100 text-yellow-700  px-3 py-1 rounded-full text-sm capitalize">
            {task.status}
          </span>
        </div>
      </div>
    ))}

  </div>
}


