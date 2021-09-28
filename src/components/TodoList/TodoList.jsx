import React from 'react';

import Todo from '../Todo';

import styles from './TodoList.module.scss';

const TodoList = ({ todos, setTodos }) => {
  const checkTodo = (todo, doneValue) => {
    setTodos([...todos].map((t) => (t === todo ? { ...t, isDone: doneValue } : t)));
  };
  const deleteTodo = (todo) => {
    setTodos([...todos].filter((t) => t !== todo));
  };

  return (
    <ul className={styles.TodoList}>
      <h2>Таски</h2>
      {!todos.length && <h3>Таски не найдены</h3>}
      {todos.map((todo, index) => (
        <Todo
          key={todo.id}
          {...todo}
          index={index + 1}
          onCheck={(value) => checkTodo(todo, value)}
          onDelete={() => deleteTodo(todo)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
