import React from 'react';

import MyButton from '../UI/MyButton';
import MyCheckbox from '../UI/MyCheckbox';

import styles from './Todo.module.scss';

const Todo = ({ title, index, isDone, onCheck, onDelete }) => {
  return (
    <li className={isDone ? [styles.Todo, styles.TodoDone].join(' ') : [styles.Todo]} onClick={() => onCheck(!isDone)}>
      <MyCheckbox value={isDone} onChange={onCheck} />
      <span>
        {index}. {title}
      </span>
      <MyButton
        onClick={(e) => {
          onDelete();
          e.stopPropagation();
        }}
      >
        Удалить
      </MyButton>
    </li>
  );
};

export default Todo;
