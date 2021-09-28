import React, { useState } from 'react';

import CreateTodoForm from '../components/CreateTodoForm';
import TodoList from '../components/TodoList';

const defaultTodos = [
  { id: 1, title: 'Погулять с собакой', isDone: false },
  { id: 2, title: 'Вынести мусор', isDone: false },
  { id: 3, title: 'Прочитать книгу', isDone: true },
];

const Dashboard = () => {
  const [todos, setTodos] = useState([...defaultTodos]);

  const addTodo = (todo) => {
    const newTodo = { ...todo, id: Date.now(), isDone: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard__title">Туду-лист</h1>

      <CreateTodoForm onCreate={addTodo} />

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Dashboard;
