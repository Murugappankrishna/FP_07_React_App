import React from "react";

function Navbar() {
  return (
    <div class="navbar">
      <div class="logo">
        <p>Smart Coding Buddy</p>
      </div>
      <nav class="navbar-container">
        <ul class="navbar-list">
          <li class="navbar-items">About</li>
          <li class="navbar-items">
            <a href="#footer">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
