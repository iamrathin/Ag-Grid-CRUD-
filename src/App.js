import "./App.css";
import React from "react";
import Crud from "../src/components/crud";
import User from "../src/components/user";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App" id="app-wrapper">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Crud />}></Route>
          <Route exact path="/user" element={<User />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
