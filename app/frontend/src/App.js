// frontend/src/App.js
import React, { Component } from "react";
import Root from "./Root";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Default from "./components/error/Default";

class App extends Component {
  render() {
    return (
      <div>
        <Root>
          <Routes>
            <Route exact path="/" element={<Signup/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="*" element={<Default/>} />
          </Routes>
        </Root>
      </div>
    );
  }
}

export default App;