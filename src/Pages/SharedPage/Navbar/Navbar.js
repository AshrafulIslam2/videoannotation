/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar sticky top-0 z-40">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-2xl italic font-extrabold "
          >
            Dot AI
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li tabIndex={0}>
              <a>
                Products
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link to="/imageAnnotaion">Image Annotation</Link>
                </li>
                <li>
                  <Link to="/imageAnnotaion">Video Annotation</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <Link to="/signin">
              <button
                type="button"
                className="text-sm font-bold text-white bg-sky-700 py-2 px-4 ml-2 hover:bg-sky-500"
              >
                Sign In
              </button>
            </Link>
            <Link>
              {" "}
              <button
                type="button"
                className="text-sm font-bold text-white bg-cyan-700 py-2 px-3 ml-2 hover:bg-cyan-500"
              >
                Request Demo
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
