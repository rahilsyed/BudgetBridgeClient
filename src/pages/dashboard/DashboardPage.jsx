import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './DashboardPage.css';

const SUMMARY_CARDS = [
  { label: 'Total Balance', value: '—' },
  { label: 'Total Income', value: '—' },
  { label: 'Total Expenses', value: '—' },
  { label: 'Bank Accounts', value: '—' },
];

const DashboardPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="dashboard-page">
      <header className="dashboard-topbar">
        <div>
          <h2>Welcome back, {user?.firstName}</h2>
          <p className="dashboard-subtitle">Here&apos;s a snapshot of your finances.</p>
        </div>
        <button className="btn btn-outline" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <main className="dashboard-content">
        <div className="dashboard-cards">
          {SUMMARY_CARDS.map((card) => (
            <div className="dashboard-card" key={card.label}>
              <p className="dashboard-card-label">{card.label}</p>
              <p className="dashboard-card-value">{card.value}</p>
            </div>
          ))}
        </div>

        <div className="dashboard-placeholder">
          <p>More insights and activity will show up here soon.</p>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
