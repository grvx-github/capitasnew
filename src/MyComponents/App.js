import Header from "./Header/header";
import Hero from './Hero/hero';
import About from './About/about';
import Services from "./Services/services";
import Portfolio from "./Portfolio/Portfolio";
import Testimonials from "./Testimonials/testimonials";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      < Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
    </div>
  );
}

export default App;
