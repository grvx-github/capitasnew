import Header from "./Header/header";
import Hero from './Hero/hero';
import About from './About/about';
import Services from "./Services/services";
import Portfolio from "./Portfolio/Portfolio";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      < Hero/>
      <About/>
      <Services/>
      <Portfolio/>
    </div>
  );
}

export default App;
