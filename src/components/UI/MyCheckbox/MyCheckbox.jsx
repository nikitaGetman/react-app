import React from 'react';

import styles from './MyCheckbox.module.scss';

const MyCheckbox = ({ value, onChange }) => {
  const handleCheckboxChange = (e) => {
    onChange(e.target.checked);
  };

  return <input type="checkbox" checked={value} onChange={handleCheckboxChange} />;
};

export default MyCheckbox;
