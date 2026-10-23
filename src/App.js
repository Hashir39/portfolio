import './styles/App.css';
import Home from './components/Home';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Home />
      <div className="section-divider" aria-hidden="true" />
      <Project />
      <div className="section-divider" aria-hidden="true" />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
