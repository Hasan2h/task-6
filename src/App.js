import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Faqs from './Pages/Faqs/Faqs';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Faqs' element={<Faqs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;