import React from 'react';

import ListHeader from '../ListHeader';
import NestedList from '../NestedList';

import styles from './TaskList.module.scss';

const TaskList = ({ tasks, onChange }) => {
  const handleAddTask = () => {
    console.log('add task');
  };

  return (
    <div className={styles.container}>
      <ListHeader title="Твои МЕГАТАСКИ" onAdd={handleAddTask} />

      <NestedList items={tasks} />
    </div>
  );
};

export default TaskList;
