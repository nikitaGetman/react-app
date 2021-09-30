import { Layout } from 'antd';
import React from 'react';

import TheHeader from '../../TheHeader';

import styles from './MainLayout.module.scss';

const { Header, Content } = Layout;

const MainLayout = (props) => {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <TheHeader />
      </Header>
      <Content>{props.children}</Content>
    </Layout>
  );
};

export default MainLayout;
