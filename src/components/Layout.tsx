import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import styles from './Layout.module.css';
const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <main className={styles.main}>
        <SideBar />
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export default Layout;
