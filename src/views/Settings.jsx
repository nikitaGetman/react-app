import { Button } from 'antd';
import React from 'react';

const Settings = () => {
  const logout = () => {
    console.log('logout');
  };

  return (
    <div>
      <Button onClick={logout} type="primary">
        Выйти
      </Button>
    </div>
  );
};

export default Settings;
