import { SettingOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';

import Logo from '../Logo';
import UserProfile from '../UserProfile';

import styles from './TheHeader.module.scss';

const TheHeader = () => {
  const router = useHistory();

  const redirectToSettings = (e) => {
    e.preventDefault();
    router.push('/settings');
  };

  return (
    <div className={styles.container}>
      <Logo />

      <UserProfile className={styles.profile} />

      <Button
        icon={<SettingOutlined />}
        href="/settings"
        onClick={redirectToSettings}
        type="link"
        className={styles.button}
      />
    </div>
  );
};

export default TheHeader;
