import './DashboardHome.css';

const SUMMARY_CARDS = [
  { label: 'Total Balance', value: '—' },
  { label: 'Total Income', value: '—' },
  { label: 'Total Expenses', value: '—' },
  { label: 'Bank Accounts', value: '—' },
];

const DashboardHome = () => (
  <>
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
  </>
);

export default DashboardHome;
