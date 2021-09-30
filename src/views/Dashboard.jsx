import React, { useState } from 'react';

import RoutineList from '../components/RoutineList';
import TaskList from '../components/TaskList';

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Задача 1',
      isDone: false,
      children: [
        { id: 11, text: 'Подзадача 1', isDone: false },
        {
          id: 12,
          text: 'Подзадача 2',
          isDone: false,
          children: [
            { id: 121, text: 'Подзадача 1', isDone: false },
            { id: 122, text: 'Подзадача 1', isDone: false },
          ],
        },
        { id: 13, text: 'Подзадача 3', isDone: false },
      ],
    },
    { id: 2, text: 'Задача 2', isDone: false },
  ]);

  return (
    <div>
      <TaskList tasks={tasks} onChange={setTasks} />

      <RoutineList />
    </div>
  );
};

export default Dashboard;
