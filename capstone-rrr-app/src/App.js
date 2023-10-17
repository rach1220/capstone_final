import React from "react";
import './assets/css/App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/nav";
import Home from "./pages/home";
import About from "./pages/about";
import Gallery from "./pages/gallery"
import Services from "./pages/services"
import Footer from "./components/footer";
import Login from "./components/login";
import Dashboard from "./pages/dashboard";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <React.Fragment>
        <NavBar/>
      </React.Fragment>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/admin" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
