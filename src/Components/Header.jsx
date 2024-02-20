import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import axios from "axios";
import AuthContext from "./Auth/LoginContainer";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header({ active }) {
  const user = useContext(AuthContext);
  const [avatar, setAvatar] = useState("");
  const [seen, setSeen] = useState(false);
  const navigate = useNavigate();

  console.log(user);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/auth/login");
        console.log("Signed out successfully");
        // toast.success("Success!", {
        //   position: toast.POSITION.BOTTOM_RIGHT,
        // });
      })
      .catch((error) => {
        // toast.error("Error while Doing !", {
        //   position: toast.POSITION.BOTTOM_RIGHT,
        // });
      });
  };

  return (
    <>
      <header>
        <nav class="bg-slate-900 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/">
              <img className="w-16" src="/WAUREM.png" />
            </Link>
            <div
              class=" hidden absolute p-3 top-16 left-0 bg-gray-900 z-30 lg:static justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-4 lg:mt-0">
                <Link
                  to="/"
                  class={`block py-2 pr-4 pl-3 ${
                    active === "home" ? "text-gray-100" : "text-gray-400"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:px-3 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  class={`block py-2 pr-4 pl-3 ${
                    active === "about" ? "text-gray-100" : "text-gray-400"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:px-3 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                  aria-current="page"
                >
                  About
                </Link>
                <Link
                  to="/blogs"
                  class={`block py-2 pr-4 pl-3 ${
                    active === "blogs" ? "text-gray-100" : "text-gray-400"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:px-3 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  Blogs
                </Link>
                {user ? (
                  <>
                    <Link
                      to="/create"
                      class={` block py-2 pr-4 pl-3 ${
                        active === "create" ? "text-gray-100" : "text-gray-100"
                      } border-b bg-green-500 shadow-lg shadow-green-600 rounded-md border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:border lg:hover:border-green-600 lg:border-0 lg:hover:text-primary-700 lg:px-3 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                    >
                      <svg
                        className=" float-left bg-green-700 rounded-full "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="currentColor"
                      >
                        <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                      </svg>
                      Create
                    </Link>
                    <Link
                      to="/tips"
                      class={` flex py-2 pr-4 pl-3 ${
                        active === "create" ? "text-gray-100" : "text-gray-100"
                      } border-b bg-orange-500 shadow-lg shadow-orange-600 rounded-md border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:border lg:hover:border-orange-600 lg:border-0 lg:hover:text-primary-700 lg:px-3 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="currentColor"
                      >
                        <path d="M7.94101 18C7.64391 16.7274 6.30412 15.6857 5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.6944 15.687 16.3558 16.7276 16.059 18H7.94101ZM16 20V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V20H16ZM13 10.0048V6L8.5 12.0048H11V16.0048L15.5 10.0048H13Z"></path>
                      </svg>
                      Tips
                    </Link>
                    <Link
                      to="/points"
                      class={` flex items-center gap-1 py-2 pr-4 pl-3 ${
                        active === "create" ? "text-gray-100" : "text-gray-100"
                      } border-b bg-purple-500 shadow-lg shadow-purple-600 rounded-md border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:border lg:hover:border-purple-600 lg:border-0 lg:hover:text-primary-700 lg:px-3 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="currentColor"
                      >
                        <path d="M12.0049 4.00275C18.08 4.00275 23.0049 6.68904 23.0049 10.0027V14.0027C23.0049 17.3165 18.08 20.0027 12.0049 20.0027C6.03824 20.0027 1.18114 17.4115 1.00957 14.1797L1.00488 14.0027V10.0027C1.00488 6.68904 5.92975 4.00275 12.0049 4.00275ZM12.0049 16.0027C8.28443 16.0027 4.99537 14.9953 3.00466 13.4532L3.00488 14.0027C3.00488 15.8849 6.88751 18.0027 12.0049 18.0027C17.0156 18.0027 20.8426 15.9723 20.9999 14.1207L21.0049 14.0027L21.0061 13.4524C19.0155 14.9949 15.726 16.0027 12.0049 16.0027ZM12.0049 6.00275C6.88751 6.00275 3.00488 8.12054 3.00488 10.0027C3.00488 11.8849 6.88751 14.0027 12.0049 14.0027C17.1223 14.0027 21.0049 11.8849 21.0049 10.0027C21.0049 8.12054 17.1223 6.00275 12.0049 6.00275Z"></path>
                      </svg>
                      Points
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/mission"
                      class={`block py-2 pr-4 pl-3 ${
                        active === "mission" ? "text-gray-100" : "text-gray-400"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:px-3 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                    >
                      Mission
                    </Link>
                    {/* <Link
                      to="/goals"
                      class={`block py-2 pr-4 pl-3 ${
                        active === "goals" ? "text-gray-100" : "text-gray-400"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:px-3 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                    >
                      Future Goals
                    </Link> */}
                  </>
                )}
              </ul>
            </div>
            {user !== null ? (
              <div className=" lg:order-2 relative flex items-center gap-2">
                <div
                  className=" w-12 h-12 cursor-pointer rounded-full bg-slate-50"
                  onClick={() => setSeen((seen) => !seen)}
                >
                  <img
                    src="https://api.dicebear.com/7.x/adventurer/svg?seed=Abby"
                    alt="avatar"
                  />
                </div>
                <div
                  class={` z-30 ${
                    seen === true ? "block" : "hidden"
                  } absolute -left-28 top-16 w-48 h-max bg-slate-400`}
                >
                  <ul className="flex flex-col">
                    <Link
                      to="/profile"
                      className=" text-center p-3 border cursor-pointer hover:bg-gray-600"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/about"
                      className=" text-center p-3 border cursor-pointer hover:bg-gray-600"
                    >
                      About
                    </Link>
                    <Link
                      to="/help"
                      className=" text-center p-3 border cursor-pointer hover:bg-gray-600"
                    >
                      Help
                    </Link>
                    <li
                      className=" text-center p-3 border cursor-pointer hover:bg-gray-600"
                      onClick={handleLogout}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
                <svg
                    xmlns="<http://www.w3.org/2000/svg>"
                    id="menu-button"
                    class="h-6 w-6 cursor-pointer md:hidden block"
                    fill="white"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => {
                      let hams = document.getElementById('mobile-menu-2');
                      hams.classList.toggle('hidden');
                    }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
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
