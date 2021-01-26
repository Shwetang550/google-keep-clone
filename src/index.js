import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CreateNote from './Components/CreateNote';
import Note from './Components/Note';

ReactDOM.render(
  <React.Fragment>
    <Header />
    <CreateNote />
    <Note />
    <Footer />
  </React.Fragment>,
  document.getElementById('root')
);

