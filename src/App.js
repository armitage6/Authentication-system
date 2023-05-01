import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Navbar from "./components/navbar";
import Profile from "./views/Profile";
import Users from "./views/users";
import injectContext from './store/context';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<Users />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
