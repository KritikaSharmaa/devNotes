import { Search, Filter } from "lucide-react";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchBar({search, setSearch}: SearchBarProps) {

  return (
    <div className="flex justify-center gap-3 mb-6 px-10 py-4">

      {/* Search Input */}
      <div className="relative w-2/5">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-white py-2 pl-10 pr-4 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {/* Filter Icon Button */}
      {/* <button
        type="button"
        className="flex items-center justify-center rounded-xl border border-gray-300 bg-white p-2.5 shadow-sm hover:bg-gray-100 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      >
        <Filter size={20} className="text-gray-600" />
      </button> */}
    </div>
  );
}