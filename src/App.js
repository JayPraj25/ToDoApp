
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:5000/tasks');
    setTasks(response.data);
  };

  const addTask = async () => {
    await axios.post('http://localhost:5000/tasks', { task });
    fetchTasks();
    setTask('');
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    fetchTasks();
  };

  const updateTask = async (id, updatedTask) => {
    await axios.put(`http://localhost:5000/tasks/${id}`, { task: updatedTask });
    fetchTasks();
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.task}
            <button onClick={() => updateTask(task._id, 'Updated Task Text')}>Edit</button>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
