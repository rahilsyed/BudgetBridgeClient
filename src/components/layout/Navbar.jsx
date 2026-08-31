import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './Navbar.css';

const Navbar = ({ onAuthClick }) => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <span className="navbar-logo">BB</span>
          <span className="navbar-name">BudgetBridge</span>
        </div>

        {isAuthenticated ? (
          <div className="navbar-actions">
            <span className="navbar-greeting">Hi, {user?.firstName}</span>
            <button className="btn btn-outline" onClick={() => navigate('/dashboard')}>
              Dashboard
            </button>
            <button className="btn btn-text" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navbar-actions">
            <button className="btn btn-primary" onClick={onAuthClick}>
              Login / Signup
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
