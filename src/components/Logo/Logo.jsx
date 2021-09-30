import { AliwangwangOutlined } from '@ant-design/icons';
import React from 'react';

import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <AliwangwangOutlined className={styles.logo} />
      <span className={styles.name}>GetmanAssistant</span>
    </div>
  );
};

export default Logo;
