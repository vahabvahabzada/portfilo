import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

export default class App extends React.Component {
  state={
    thereIs:"navbarNavHidden"
  }
  menuClick=()=>{
    this.setState(this.state.thereIs==="navbarNavHidden"?{thereIs:"navbarNav"}:{thereIs:"navbarNavHidden"});
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav className="navbar">
            <Link to="/" className="navbar-brand">
              VGroup
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={this.menuClick}
            >
            </button>
            <div className="collapse navbar-collapse" id={this.state.thereIs}>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/projects" className="nav-link">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Routes>
          <Route path="/about"
            element={<About/>} />

          <Route path="/projects"
            element={<Projects/>}
          />
          <Route path="/contact"
           element={<Contact/>}
          />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
