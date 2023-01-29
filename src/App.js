import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Overview from "./components/Overview";
import Upload from './components/Upload';
import Receipts from "./components/Receipts";
import React, { useEffect } from "react";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Parent from "./components/Parent";

function App() {
  const [{ user }, dispatch] = useStateValue();

 

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("[USER] ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
      <div className="App">      
        <Router>
          <Routes>
            <Route path="/next" element={<Parent />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
