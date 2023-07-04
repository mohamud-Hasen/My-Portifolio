import Home from './components/Home';
import NavBav from './components/NavBav';
import SocialLinks from './components/SocialLinks';
import './index.css';

function App() {
  return (
    <div className="App">
      <NavBav />
      <Home />
      <SocialLinks />
    </div>
  );
}

export default App;
