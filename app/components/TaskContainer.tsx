"use client";
import SearchBar from "./SearchBar";
import ShowTasks from "./ShowTasks";
import { Task } from "@/app/types/task";
import { useState } from "react";

export default function TaskContainer( { tasks }: { tasks: Task[] }) {
    const [search, setSearch] = useState("");

    const filteredTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.description.toLowerCase().includes(search.toLowerCase())
    );

    return <>
        <SearchBar search={search} setSearch={setSearch} />
        <ShowTasks filteredTasks={filteredTasks}/>
    </>
}