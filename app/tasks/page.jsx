"use client";

import { useState } from "react";

export default function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const addTask = () => {
        if(task.trim()) {
            setTasks([...tasks, task]);
            setTask("");
        }
    }

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    }

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Список задач</h1>

            <div className="max-w-md mx-auto mt-10">
                <div className="flex mb-4">
                    <input 
                        type="text" 
                        className="flex-grow border p-2 rounded-l text-gray-800"
                        value={task}
                        onChange={e => setTask(e.target.value)}
                        placeholder="Введите название задачи..."
                    />
                    <button className="bg-blue-500 text-white p-2 rounded-r" onClick={addTask}>
                        Сохранить
                    </button>
                </div>
                <ul className="list-disc pl-5">
                    {tasks.map((task, index) => (
                        <li className="flex justify-between items-center mb-2" key={index}>
                            <span>{task}</span>
                            <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => removeTask(index)}>
                                Удалить
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
