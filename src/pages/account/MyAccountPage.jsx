import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { getUserInfo } from '../../api/authApi';
import './MyAccountPage.css';

const formatDate = (value) => {
  if (!value) return '—';
  return new Date(value).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const MyAccountPage = () => {
  const { user: sessionUser } = useAuth();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getUserInfo()
      .then((res) => {
        if (isMounted) setProfile(res.data);
      })
      .catch((err) => {
        if (isMounted) setError(err.response?.data?.message || 'Could not load your details.');
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const details = profile || sessionUser;
  const initials = `${details?.firstName?.[0] ?? ''}${details?.lastName?.[0] ?? ''}`.toUpperCase();

  return (
    <div className="account-page">
      <h2>My Account</h2>
      <p className="account-subtitle">Your personal details on file.</p>

      {isLoading && <p className="account-status">Loading your details...</p>}
      {error && <p className="form-error">{error}</p>}
    {console.log(details,'details')
    }
      {details && (
        <div className="account-card">
          <div className="account-avatar">
            {details.imgUrl ? (
              <img src={details.imgUrl} alt={`${details.firstName} ${details.lastName}`} />
            ) : (
              <span>{initials}</span>
            )}
          </div>

          <div className="account-fields">
            <div className="account-field">
              <span className="account-field-label">Full Name</span>
              <span className="account-field-value">
                {details.firstName} {details.lastName}
              </span>
            </div>
            <div className="account-field">
              <span className="account-field-label">Email</span>
              <span className="account-field-value">{details.email}</span>
            </div>
            <div className="account-field">
              <span className="account-field-label">Phone</span>
              <span className="account-field-value">{details.phone || '—'}</span>
            </div>
            <div className="account-field">
              <span className="account-field-label">Member Since</span>
              <span className="account-field-value">{formatDate(details.createdAt)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAccountPage;
