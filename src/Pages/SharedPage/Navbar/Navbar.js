/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar sticky top-0 z-40">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-2xl italic font-extrabold ">
            Dot AI
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Service</a>
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
                  <a>Image Annotation</a>
                </li>
                <li>
                  <a>Video Annotation</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <Link to="/signin">
              <button
                type="button"
                className="text-sm font-bold text-white bg-sky-700 py-2 px-4 ml-2 hover:bg-sky-500"
              >
                Sign In
              </button>
            </Link>
            <button
              type="button"
              className="text-sm font-bold text-white bg-cyan-700 py-2 px-3 ml-2 hover:bg-cyan-500"
            >
              Request Demo
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
