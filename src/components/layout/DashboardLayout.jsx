import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Sidebar from './Sidebar';
import './DashboardLayout.css';

const DashboardLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-layout-main">
        <header className="dashboard-topbar">
          <div>
            <h2>Welcome back, {user?.firstName}</h2>
            <p className="dashboard-subtitle">Here&apos;s a snapshot of your finances.</p>
          </div>
          <button className="btn btn-outline" onClick={handleLogout}>
            Logout
          </button>
        </header>

        <main className="dashboard-content-area">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
