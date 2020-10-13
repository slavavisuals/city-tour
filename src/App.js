import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList"

function App() {
  return (
    <>
      <Navbar />
      <TourList />
    </>
  );
}

export default App;
