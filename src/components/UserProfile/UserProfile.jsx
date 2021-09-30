import React from 'react';

import styles from './UserProfile.module.scss';

const UserProfile = (props) => {
  return (
    <div className={styles.container} {...props}>
      <span className={styles.user}>@nikita_getman</span>
    </div>
  );
};

export default UserProfile;
