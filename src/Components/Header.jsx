import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import axios from "axios";
import AuthContext from "./Auth/LoginContainer";
import { signOut } from "firebase/auth";
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header({ active }) {
  const user = useContext(AuthContext);
  const [avatar, setAvatar] = useState("");
  const [seen,setSeen] = useState(false)
  const navigate = useNavigate();

  console.log(user)

  const handleLogout = () => {               
    signOut(auth).then(() => {
    // Sign-out successful.
        navigate("/auth/login");
        console.log("Signed out successfully")
        toast.success("Success!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
    }).catch((error) => {
      toast.error("Error while Doing !", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
}

  return (
    <>
    <header>
      <nav class="bg-slate-900 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/">
            <img className="w-16" src="/WAUREM.png" />
          </Link>
          <div
            class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <Link
                to="/about"
                class={`block py-2 pr-4 pl-3 ${
                  active === "about" ? "text-gray-100" : "text-gray-400"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                aria-current="page"
              >
                About
              </Link>
              <Link
                to="/blogs"
                class={`block py-2 pr-4 pl-3 ${
                  active === "blogs" ? "text-gray-100" : "text-gray-400"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
              >
                Blogs
              </Link>
              <Link
                to="/mission"
                class={`block py-2 pr-4 pl-3 ${
                  active === "mission" ? "text-gray-100" : "text-gray-400"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
              >
                Mission
              </Link>
              <Link
                to="/goals"
                class={`block py-2 pr-4 pl-3 ${
                  active === "goals" ? "text-gray-100" : "text-gray-400"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
              >
                Future Goals
              </Link>
            </ul>
          </div>
          {user !== null ? (
            <div className=" lg:order-2 relative">
              <div className=" w-12 h-12 cursor-pointer rounded-full bg-slate-50"
              onClick={() => setSeen(seen => !seen)}>
                <img
                  src="https://api.dicebear.com/7.x/adventurer/svg?seed=Abby"
                  alt="avatar"
                />
              </div>
              <div class={` ${seen === true ? 'block':'hidden'} absolute -left-28 top-16 w-48 h-max bg-slate-400`}>
                <ul className="flex flex-col">
                <li className=" text-center p-3 border cursor-pointer hover:bg-gray-600">Profile</li>
                <li className=" text-center p-3 border cursor-pointer hover:bg-gray-600">About</li>
                <li className=" text-center p-3 border cursor-pointer hover:bg-gray-600">Help</li>
                  <li className=" text-center p-3 border cursor-pointer hover:bg-gray-600"
                  onClick={handleLogout}>Logout</li>
                </ul>
              </div>
            </div>
          ) : (
            <div class="flex items-center lg:order-2">
              <Link
                to="/auth/login"
                class="text-blue-700 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </Link>
              <Link
                to="/auth/signup"
                class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                Get started
              </Link>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  class="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
    <ToastContainer />
    </>
  );
}

export default Header;
