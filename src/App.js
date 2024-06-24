 
import './App.css'; 
import './style.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Resume from './components/Resume';  
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Blog from './components/Blog';
import "bootstrap/dist/css/bootstrap.min.css"; 



function App() {
  return (
    <Router> 
      <div className="App"> 
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />}/>
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
