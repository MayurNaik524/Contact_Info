import { useState } from 'react';
import './App.css';
import Display from './disp';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {

    // Construct JSON object
    const formData = {
      name: name,
      email: email
    };

    // Send JSON object to backend
    try {
      const response = await fetch('http://localhost:3000/contacts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Data submitted successfully');
        // Clear form inputs after successful submission
        setName('');
        setEmail('');
      } else {
        console.error('Failed to submit data');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <>
    <h1>Contact Info</h1>
      <form onSubmit={handleSubmit}>
        <input
          id='name'
          type="text"
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br />
        <input
          id="email"
          type="text"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <input id="sub-btn" type="submit" value="Submit" />
      </form>
      <Display />
    </>
  );
}

export default App;
