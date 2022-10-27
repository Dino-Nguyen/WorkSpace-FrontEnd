import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classes from './Dashboard.module.scss';
import DashboardChart from '../../components/DashboardChart/DashboardChart';
import clsx from 'clsx';

export default function Dashboard({ sideBarVisibility }) {
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
    <div className={dashboardContainerClassName}>
      <DashboardChart />
    </div>
  );
}
