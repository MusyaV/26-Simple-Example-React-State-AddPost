import React from "react";
import './App.css';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Nav/Home/Home";
import News from "./components/Nav/News/News";
import About from "./components/About/About";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='container'>
        <header className="header"></header>
        <Nav />
        <main className="main">
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News 
            oneData={props.state.oneData} 
            newPostText={props.state.newPostText}
            addPostState={props.addPostState}
            updateNewPostText={props.updateNewPostText}
            />} />
          </Routes>
        </main>
        <footer className="footer"></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
