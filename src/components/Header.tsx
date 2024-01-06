import React from "react";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-screen border-b-2 text-lg bg-white border-black flex flex-row justify-between items-center">
      <div className="md:px-10 md:py-5 px-7 py-3 cursor-default">ANIMEBOX</div>

      <button className="md:px-10 md:py-5 px-7 py-3">Login</button>
    </header>
  );
}

export default Header;
