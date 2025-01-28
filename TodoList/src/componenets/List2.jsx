import { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a task"
        className="border p-2 w-full mb-4"
      />
      <button
        onClick={addTask}
        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full mb-4"
      >
        Add Task
      </button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center mb-2">
            <button
              onClick={() => toggleTaskCompletion(task.id)}
              className="w-4 h-4 bg-gray-300 rounded-full mr-2"
            ></button>
            <span className={`${task.completed ? 'line-through' : ''}`}>
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
