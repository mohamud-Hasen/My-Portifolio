import About from './components/About';
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
      <SocialLinks />
    </div>
  );
}

export default App;
