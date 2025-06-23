import React, { useState } from 'react';

function Contact() {
  const [Name, setName] = useState('');
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginfo = { Name, Phone, Email };

    try {
      const response = await fetch("http://localhost:4001/submit", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginfo)
      });

      if (!response.ok) {
        throw new Error("Server error: " + response.statusText);
      }

      const msg = await response.text();
      alert(msg);

      // Clear input fields after successful submission
      setName('');
      setPhone('');
      setEmail('');
    } catch (err) {
      alert("Failed to send data: " + err.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />

        <label style={styles.label}>Phone</label>
        <input
          type="tel"
          placeholder="Enter phone number"
          value={Phone}
          pattern="[0-9]{10}"
          title="Enter a 10-digit phone number"
          onChange={(e) => setPhone(e.target.value)}
          style={styles.input}
          required
        />

        <label style={styles.label}>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '320px',
    margin: '100px auto',
    padding: '25px',
    border: '1px solid #ccc',
    borderRadius: '20px',
    boxShadow: '0 0 10px rgba(201, 211, 110, 0.2)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    textAlign: 'left',
    margin: '5px 0 2px 4px',
    fontWeight: 'bold'
  },
  input: {
    margin: '8px 0',
    padding: '10px',
    fontSize: '15px',
    borderRadius: '8px',
    border: '1px solid #aaa'
  },
  button: {
    marginTop: '15px',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '40px',
    fontSize: '16px',
    cursor: 'pointer'
  },
};

export default Contact;
