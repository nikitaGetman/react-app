import React from 'react';

import styles from './MyInput.module.scss';

const MyInput = (props) => {
  return <input {...props} className={styles.MyInput} />;
};

export default MyInput;
