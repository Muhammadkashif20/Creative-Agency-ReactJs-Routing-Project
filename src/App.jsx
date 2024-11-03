import React from 'react';
import Header from './components/Header';
import Footer from './Components/Footer';
import Services from './Components/Services';

const App = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <Services/>
      <Footer />    
    </div>
  );
};

export default App;
