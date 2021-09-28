import React, { useState } from 'react';

import MyButton from '../UI/MyButton';
import MyInput from '../UI/MyInput';

import styles from './CreateTodoForm.module.scss';

const CreateTodoForm = ({ onCreate }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ title });
    setTitle('');
  };

  return (
    <div>
      <h2>Добавление новой таски</h2>
      <form className={styles.CreateTodoForm}>
        <MyInput placeholder="Введите текст задачи..." value={title} onChange={(e) => setTitle(e.target.value)} />
        <MyButton onClick={handleSubmit}>Сохранить</MyButton>
      </form>
    </div>
  );
};

export default CreateTodoForm;
