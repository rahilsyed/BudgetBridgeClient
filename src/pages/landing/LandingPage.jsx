import { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import AuthModal from '../../components/auth/AuthModal';
import './LandingPage.css';

const FEATURES = [
  {
    title: 'Track Expenses',
    description: 'Log every expense in seconds and see where your money actually goes.',
  },
  {
    title: 'Manage Income',
    description: 'Keep every income source in one place and watch your earnings grow.',
  },
  {
    title: 'Bank Accounts',
    description: 'Connect and organize all your accounts for a single source of truth.',
  },
  {
    title: 'Clear Insights',
    description: 'Get a simple, honest picture of your finances whenever you need it.',
  },
];

const LandingPage = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState('login');

  const openAuth = (tab) => {
    setAuthTab(tab);
    setIsAuthOpen(true);
  };

  return (
    <div className="landing-page">
      <Navbar onAuthClick={() => openAuth('login')} />

      <main>
        <section className="hero">
          <h1>Bridge the gap between spending and saving.</h1>
          <p className="hero-subtitle">
            BudgetBridge helps you track expenses, manage income, and stay on top of your
            bank accounts &mdash; all from one clean dashboard.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => openAuth('signup')}>
              Get Started Free
            </button>
            <button className="btn btn-outline" onClick={() => openAuth('login')}>
              I already have an account
            </button>
          </div>
        </section>

        <section className="features">
          {FEATURES.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="landing-footer">
        <p>&copy; {new Date().getFullYear()} BudgetBridge. All rights reserved.</p>
      </footer>

      <AuthModal
        key={isAuthOpen}
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialTab={authTab}
      />
    </div>
  );
};

export default LandingPage;
