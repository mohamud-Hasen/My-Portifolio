import About from './components/About';
import Home from './components/Home';
import NavBav from './components/NavBav';
import SocialLinks from './components/SocialLinks';
import './index.css';

function App() {
  return (
    <div className="App">
      <NavBav />
      <Home />
      <About />
      <SocialLinks />
    </div>
  );
}

export default App;
