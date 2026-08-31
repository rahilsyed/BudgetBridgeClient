import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

const initialForm = { firstName: '', lastName: '', email: '', phone: '' };

const SignupForm = ({ onSwitchToLogin }) => {
  const { register } = useAuth();
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');
  const [successEmail, setSuccessEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    try {
      await register(form);
      setSuccessEmail(form.email);
      setForm(initialForm);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (successEmail) {
    return (
      <div className="auth-form">
        <div className="form-success">
          Account created! We&apos;ve emailed a password to <strong>{successEmail}</strong>.
          Use it to log in.
        </div>
        <button className="btn btn-primary" onClick={onSwitchToLogin}>
          Go to Log In
        </button>
      </div>
    );
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      {error && <div className="form-error">{error}</div>}

      <div className="auth-form-row">
        <div className="form-field">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={form.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="9876543210"
          required
        />
      </div>

      <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creating account...' : 'Sign Up'}
      </button>

      <p className="auth-form-footnote">
        A password will be generated and emailed to you.
      </p>
    </form>
  );
};

export default SignupForm;
