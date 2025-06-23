import React, { useState } from 'react';

function Login() {
  const [Name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginfo = { Name:Name, gender:gender, Phone:Phone, Email:Email, Password:Password };

    try {
      const response = await fetch("http://localhost:4001/submit", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginfo)
      });

      const msg = await response.text();
      alert(msg);
    } catch (err) {
      alert("Failed to send data: " + err.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
          <input type="text" placeholder="Name" value={Name}onChange={(e)=>setName(e.target.value)}
          style={styles.input}
          required
          />
        <div className='gender'>Gender</div>
<label>
  Female:
  <input
    type="radio"
    name="gender"
    value="Female"
    checked={gender === "Female"}
    onChange={(e) => setGender(e.target.value)}
  />
</label>
<label>
  Male:
  <input
    type="radio"
    name="gender"
    value="Male"
    checked={gender === "Male"}
    onChange={(e) => setGender(e.target.value)}
  />
</label>

<input
  type="tel"
  placeholder="Phone number"
  value={Phone}
  onChange={(e) => setPhone(e.target.value)}
  style={styles.input}
  required
/>

        <input
          type="email"
          placeholder="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '300px',
    margin: '100px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '50px',
    boxShadow: '0 0 10px rgba(201, 211, 110, 0.1)',
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    fontSize: '15px'
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '40px'
  },
  gender: {
    textAlign:'left'
  }
};

export default Login;
