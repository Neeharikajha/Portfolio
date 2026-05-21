import React from "react";

const Navbar = () => {
  return (
    <nav className="p-4 flex gap-4 bg-yellow-300 shadow-md">
      <a href="/" className="font-bold">
        Page 1
      </a>
      <a href="/page2" className="font-bold">
        Page 2
      </a>
    </nav>
  );
};

export default Navbar;
