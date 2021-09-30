import { PlusCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

import styles from './ListHeader.module.scss';

const ListHeader = ({ title, onAdd }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{title}</h4>

      <Button icon={<PlusCircleOutlined />} type="text" onClick={onAdd}></Button>
    </div>
  );
};

export default ListHeader;
