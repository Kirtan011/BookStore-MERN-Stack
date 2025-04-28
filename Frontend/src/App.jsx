import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "#70d9ff",
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/cartographer.png")',
        /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
      }}
      className="relative min-h-screen overflow-x-hidden"
    >
      {/* Background opacity overlay */}
      <div className="absolute inset-0 bg-white opacity-40 pointer-events-none z-0"></div>

      {/* Content area */}
      <div className="relative z-10">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books/create' element={<CreateBook />} />
          <Route path='/books/details/:id' element={<ShowBook />} />
          <Route path='/books/edit/:id' element={<EditBook />} />
          <Route path='/books/delete/:id' element={<DeleteBook />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
