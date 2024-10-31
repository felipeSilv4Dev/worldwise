import React from 'react';
import styles from './AppLayout.module.css';
import AppNav from '../components/AppNav';

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <AppNav />
    </div>
  );
};

export default AppLayout;
