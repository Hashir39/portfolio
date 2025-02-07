import './App.css';
import Home from './component/Homee';
import Project from './component/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';



function App() {
  return (
    <> 
      <Home />
      <Project />
      <hr className='hrr' />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
