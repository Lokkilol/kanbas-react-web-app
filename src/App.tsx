import React from 'react';
import logo from './logo.svg';
import './App.css';
import Labs from './Labs';
import HelloWorld from './hello';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Kanbas from './Kanbas';
import './bootstrap.min.css'

    


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    {/* <h1> Hello World </h1> */}
    {/* <h2> Links to other pages </h2>
    <ol>
      <li> <a href="/#/Labs"> Labs </a> </li> 
      <li> <a href="/#/Kanbas"> Kanbas </a></li>
      <li> <a href="/#/hello"> Hello World!</a></li>
    </ol> */}
      <HashRouter>
          <Routes>
            {/* <Route path="/"         element={<Navigate to="/Labs"/>}/> */}
            <Route path="/Labs/*"   element={<Labs/>}/>
            <Route path="/Kanbas/*" element={<Kanbas/>}/>
            <Route path="/hello"    element={<HelloWorld/>}/>
          </Routes>
      </HashRouter>  
    </>
  );
}

export default App;
