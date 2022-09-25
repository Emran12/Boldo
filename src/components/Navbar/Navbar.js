import React from "react";
import logo from "../../images/Logo.png";

const Navbar = () => {
  return (
    <div class="navbar px-20  bg-[#0A2640]">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost text-white lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 text-white bg-[#0A2640]"
          >
            <li>
              <a>Product</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Login</a>
            </li>
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl text-white">
          <img src={logo}></img>
        </a>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal p-0 text-white">
          <li>
            <a>Product</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
