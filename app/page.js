'use client'
import { useState, useEffect } from 'react';
import TaskList from './components/TaskList/TaskList';

export default function Home() {
  const [tasks, setTasks] = useState([{ id: 1, text: "Todo Test", completed: false }]);
  const [task, setTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  useEffect(() => {
    filterTasks();
  }, [tasks, filter]);

  const handleAddTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, { id: new Date().getTime(), text: task, completed: false }]);
    setTask('');
  };

  const handleToggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const clearTasks = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filterTasks = () => {
    switch (filter) {
      case 'active':
        setFilteredTasks(tasks.filter(task => !task.completed));
        break;
      case 'completed':
        setFilteredTasks(tasks.filter(task => task.completed));
        break;
      default:
        setFilteredTasks(tasks);
        break;
    }
  };

  const handleFilter = (filterValue) => {
    setFilter(filterValue);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold">TODO</h1>
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="text"
          className="bg-gray-800 text-white border-none rounded p-4 flex-grow"
          placeholder="What to do?"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white p-4 rounded ml-4"
        >
          Add Task
        </button>
      </div>
      <div className="bg-gray-800 rounded p-4 mb-5">
        <TaskList tasks={filteredTasks} onToggle={handleToggleTask} onDelete={deleteTask} />
        <div className="mt-4 flex justify-between items-center text-sm text-gray-400">
          <span>{tasks.filter(task => !task.completed).length} items left</span>
          <div>
            <button onClick={() => handleFilter('all')} className={`mr-2 ${filter === 'all' ? 'text-white' : ''}`}>All</button>
            <button onClick={() => handleFilter('active')} className={`mr-2 ${filter === 'active' ? 'text-white' : ''}`}>Active</button>
            <button onClick={() => handleFilter('completed')} className={`${filter === 'completed' ? 'text-white' : ''}`}>Completed</button>
          </div>
          <button
            onClick={clearTasks}
            className="text-gray-400 hover:text-white"
          >
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
}
