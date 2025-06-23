import React, { useState } from 'react';

function Signin() {
  const [Name, setName] = useState('');
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);
  const validateName = (name) => name.trim().length >= 3;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!validateName(Name)) {
      setError('Name must be at least 3 characters.');
      return;
    }
    if (!validatePhone(Phone)) {
      setError('Enter a valid 10-digit phone number.');
      return;
    }

    const loginfo = { Name, Phone, Email };
    console.log("Form submitted:", loginfo);

    try {
      setLoading(true);
      const response = await fetch('http://yourapiendpoint.com/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginfo),
      });

      if (response.ok) {
        alert('Signin successful');
        setName('');
        setPhone('');
        setEmail('');
      } else {
        setError('Signin failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit} className="signin-form">
        <h2>Sign In</h2>
        <input
          type="text"
          placeholder="Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          value={Phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}

export default Signin;
