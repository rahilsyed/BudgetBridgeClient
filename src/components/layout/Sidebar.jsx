import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const DashboardIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="9" rx="1.5" />
    <rect x="14" y="3" width="7" height="5" rx="1.5" />
    <rect x="14" y="12" width="7" height="9" rx="1.5" />
    <rect x="3" y="16" width="7" height="5" rx="1.5" />
  </svg>
);

const AccountIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" />
  </svg>
);

const NAV_ITEMS = [
  { to: '/dashboard', label: 'Dashboard', end: true, Icon: DashboardIcon },
  { to: '/dashboard/account', label: 'My Account', end: false, Icon: AccountIcon },
];

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-brand">
      <span className="sidebar-logo">BB</span>
      <span className="sidebar-name">BudgetBridge</span>
    </div>

    <nav className="sidebar-nav">
      {NAV_ITEMS.map(({ to, label, end, Icon }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
        >
          <Icon />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  </aside>
);

export default Sidebar;
