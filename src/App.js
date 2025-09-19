import React from "react";
import './main.css' ;
import Home from "./pages/Home";
import { BrowserRouter,Route,Routes } from "react-router-dom";

const App = ()=> {
 return (
    <div>
     
    <BrowserRouter>
    <Routes>
      <Route index element = {<Home/>} />
      <Route path ="/home" element = {<Home/>} />
    </Routes>
    </BrowserRouter>
    </div>
  
 )
};
export default App;