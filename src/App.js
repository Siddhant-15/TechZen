import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import People from './components/People/People';
import Contact from './components/Contact/Contact';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="mt-16">
        <Home />
        <About />
        <Services />
        {/* <People /> */}
        <Contact />
        <Footer />
      </main>
      <ScrollToTop />
    </div>
  );
}

export default App;
