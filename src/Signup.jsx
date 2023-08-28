import React, { useState } from 'react';
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [contactnumber, setContactNumber] = useState('');
  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signing up with:', email, password);
  };
  return (
    <div className='container'>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>

      <input
          type="firstname"
          placeholder="firstname"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="lastname"
          placeholder="lastname"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="contactnumber"
          placeholder="contactnumber"
          value={contactnumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
export default Signup;