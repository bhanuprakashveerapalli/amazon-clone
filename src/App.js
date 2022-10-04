import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Home />
        <div className="app">
          <Routes>
            <Route path="/checkout" element={<Checkout/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
