import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/navBar/navBar';
import ProductCard from './components/Products/ProductCard';
import Cards from './components/Cards/Cards';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Cards />
        <ProductCard />
      </div>
    );
  }
}

export default App;



