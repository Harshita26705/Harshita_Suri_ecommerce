import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import QuoteForm from './sections/QuoteForm';
import Contact from './sections/Contact';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <section id="about"><About /></section>
        <section id="services"><Home /></section>
        <section id="quote"><QuoteForm /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
