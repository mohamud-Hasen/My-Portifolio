import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBav from './components/NavBav';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';
import './index.css';

function App() {
  return (
    <div className="App">
      <NavBav />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
