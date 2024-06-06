// src/components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <li className="flex justify-between items-center p-2 bg-gray-900 rounded mb-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <span className={`ml-2 ${task.completed ? 'line-through text-gray-500' : 'text-white'}`}>
          {task.text}
        </span>
      </div>
      <button onClick={() => onDelete(task.id)} className="text-gray-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </li>
  );
};

export default TaskItem;
