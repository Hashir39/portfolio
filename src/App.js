import './styles/App.css';
import Home from './components/Home';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';



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
