
  // Develped by - Shwetang
  // GitHub profile - https://github.com/Shwetang550 

import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CreateNote from './Components/CreateNote';
import Note from './Components/Note';

const App = () => {
  let [addItem, setAddItem] = useState([]);

  const handleNoteAddition = (note) => {
    setAddItem((prev) => {
      return [...prev, note];
    });
  };

  const handleDelete = (id) => {
    let currentItems = addItem.filter((val, index) => index !== id);
    setAddItem(currentItems);
  }

  return (
    <>
      <Header />
      <CreateNote passNote={handleNoteAddition} />
      {
        addItem.map((item, index) => {
          return <Note key={index} id={index} title={item.title} content={item.content} onDelete={handleDelete} />
        })
      }
      <Footer />
    </>
  );
}
 
export default App;