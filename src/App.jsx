import './App.css'
import { useState } from 'react';


function App() {
  // State to hold form values
  const [formData, setFormdata] = useState({
    name: '',
    email: '',
  });

  // Handler for input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
      setFormdata({
        ...formData,
        [name]: value,
      });
    }

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Above: prevents native page reload
    // Below - send form to server or whatever
    console.log('Form submitted:', formData);
  };

  return (
    <div className='container'>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            />
          </label>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App;
