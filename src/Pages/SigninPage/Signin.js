/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Signin.css";

const Signin = () => {
  return (
    <div className="signin">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800 relative left-96">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <div className="h-20 rounded-box place-items-center">
          <input
            type="button"
            name="gogle"
            id="google"
            placeholder="leroy@jenkins.com"
            className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 hover:bg-sky-400 hover:text-white font-bold"
            value="Sign in With Google "
          />
        </div>
        <div className="divider">OR</div>
        <form
          novalidate=""
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label for="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label for="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label for="password" className="text-sm">
                  Confirm Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="button"
                className="w-full px-8 py-3 font-semibold rounded-md bg-emerald-600 text-gray-50"
              >
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-600">
              Already have an account yet?
              <a
                rel="noopener noreferrer"
                href="#"
                className="hover:underline text-emerald-600"
              >
                Login
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
