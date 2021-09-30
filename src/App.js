import { Layout } from 'antd';
import React from 'react';

import { Router } from './router';

const { Content } = Layout;

const App = () => {
  return (
    <Layout className="app">
      <Content className="app__content">
        <Router />
      </Content>
    </Layout>
  );
};

export default App;
