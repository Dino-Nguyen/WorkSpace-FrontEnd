import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classes from './Dashboard.module.scss';
import NavBar from '../../components/NavBar/NavBar';
import Sidebar from '../../components/SideBar/SideBar';
import DashboardChart from '../../components/DashboardChart/DashboardChart';
import DashboardTaskCompleted from '../../components/DashboardTaskCompleted/DashboardTaskCompleted'
import DashboardPendingTask from '../../components/DashboardPendingTask/DashboardPendingTask';
import DashboardScheudle from '../../components/DashboardScheudle/DashboardScheudle';
import clsx from 'clsx';

export default function Dashboard({ sideBarVisibility, onSideBarShow }) {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/sign-in');
    }
  }, [isAuthenticated, navigate]);

  const dashboardContainerClassName = clsx(classes['dashboard-container'], {
    [classes['show-side-bar']]: sideBarVisibility,
  });

  return (
    <div>
      <NavBar
        sideBarVisibility={sideBarVisibility}
        onSideBarShow={onSideBarShow}
      />
      <Sidebar
        sideBarVisibility={sideBarVisibility}
        onSideBarShow={onSideBarShow}
      />
      <section className={dashboardContainerClassName}>
      <div className={classes['dashboard-frame']}>
      <div>
          <DashboardTaskCompleted/>
          <DashboardChart />
          <DashboardPendingTask/>
        </div>
        <div >
           <DashboardScheudle/>
        </div>
        </div>
      </section>
    </div>

  );
}
