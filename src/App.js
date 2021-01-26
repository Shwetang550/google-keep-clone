import React,{ useState } from 'react';
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

  return (
    <>
      <Header />
      <CreateNote passNote={handleNoteAddition} />
      {
        addItem.map((item, index) => {
          return <Note key={index} title={item.title} content={item.content} />
        })
      }
      <Footer />
    </>
  );
}
 
export default App;