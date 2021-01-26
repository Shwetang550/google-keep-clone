import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CreateNote from './Components/CreateNote';

ReactDOM.render(
  <React.Fragment>
    <Header />
    <CreateNote />
    <Footer />
  </React.Fragment>,
  document.getElementById('root')
);

