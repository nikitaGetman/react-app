import { Checkbox } from 'antd';
import React, { useState } from 'react';

import NestedList from '../NestedList';

import styles from './Task.module.scss';

const Task = ({ className, ...props }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.checkbox}>
          {props.children && <Checkbox checked={expanded} onChange={() => setExpanded(!expanded)} />}
        </div>
        <div className={styles.body}>
          {props.id} - {props.text}
        </div>
      </div>

      {props.children && expanded && (
        <div className={styles.sublist}>
          <NestedList items={props.children} />
        </div>
      )}
    </div>
  );
};

export default Task;
