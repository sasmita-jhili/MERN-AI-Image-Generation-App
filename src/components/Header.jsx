import React from "react";
import { logo } from "../assets";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sm:px-8 px-4 py-2 bg-white shadow-md w-full">
      <div className="flex items-center justify-between">
        <Link to="/home">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <Link
          to="/create-post"
          className="bg-[#6469ff] text-white rounded px-6 py-2"
        >
          Create
        </Link>
      </div>
    </header>
  );
};

export default Header;
