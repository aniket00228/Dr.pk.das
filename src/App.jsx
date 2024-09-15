import React, { useEffect, useState } from 'react'
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import About from './Pages/About';
import HomePage from './Pages/HomePage';
import AllBooks from './Pages/AllBooks';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import Footer from './Components/Footer';
import Loader from './Components/Loader';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <Loader/>;
  }
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/About' element={<About/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/All-Books' element={<AllBooks/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App