import Header from "./Header/header";
import Hero from './Hero/hero';
import About from './About/about';
import Services from "./Services/services";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      < Hero/>
      <About/>
      <Services/>
    </div>
  );
}

export default App;
