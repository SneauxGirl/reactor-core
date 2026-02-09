import './App.css';
import { BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import Services from './pages/Services';

function App() {
  // Components - generally in their own files
  function Home() {
    return <h2>Home Page</h2>
  }

  function About() {
    return <h2>About</h2>
  }

  function Contact() {
    return <h2>Contact</h2>
  }

  //Navigates between different locations (components)
  return (
    <Router>
      <div className='container'>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Define the Routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </Router>
  )
}

export default App;
