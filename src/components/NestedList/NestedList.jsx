import { List } from 'antd';
import React from 'react';

import Task from '../Task';

import styles from './NestedList.module.scss';

const NestedList = ({ items }) => {
  return (
    <List
      className={styles.list}
      dataSource={items}
      renderItem={(item) => (
        <List.Item className={styles.item}>
          <Task {...item} />
        </List.Item>
      )}
    />
  );
};

export default NestedList;
