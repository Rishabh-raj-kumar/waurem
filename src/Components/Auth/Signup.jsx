import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import Loading from "../Home/Loading";

function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    console.log(name, email, password);
    event.preventDefault();
    setLoading((loading) => !loading);

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        const user = userCred.user;

        addDoc(collection(db, "users"), {
          uid: user.uid,
          name: name,
          email: email,
          password: password,
          created: Timestamp.now(),
        });

        setLoading((loading) => !loading);
        localStorage.setItem(
          "user",
          JSON.stringify({ name: name, email: email })
        );
        console.log(user);
        navigate("/auth/login");
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
      });
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div class="h-full bg-green-500 dark:bg-gray-900">
          <div class="mx-auto">
            <div class="flex justify-center px-6 py-12">
              <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                <div
                  class="w-full h-auto bg-gray-400 text-slate-900 relative dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                  style={{ backgroundImage: "url('/signup.jpg')" }}
                >
                  <a
                    className="absolute bottom-2  left-4 text-sm mx-auto text-center"
                    href="https://www.freepik.com/free-vector/zero-waste-concept-illustration_18151579.htm#fromView=search&term=illustation+reuse&track=ais&regularType=vector&page=1&position=2&uuid=bed3e24d-b519-4193-a253-b8106b116337"
                  >
                    Image by storyset on Freepik
                  </a>
                </div>
                <div class="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                  <h3 class="py-4 text-2xl text-center text-gray-800 dark:text-white">
                    Create an Account!
                  </h3>
                  <form class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                    <div class="mb-4 md:flex md:justify-between">
                      <div class="mb-4 md:mr-2 md:mb-0">
                        <label
                          class="block text-left mb-2 text-sm font-bold text-gray-700 dark:text-white"
                          for="firstName"
                        >
                          First Name
                        </label>
                        <input
                          class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="firstName"
                          type="text"
                          placeholder="First Name"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div class="md:ml-2">
                        <label
                          class="block text-left mb-2 text-sm font-bold text-gray-700 dark:text-white"
                          for="lastName"
                        >
                          Last Name
                        </label>
                        <input
                          class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="lastName"
                          type="text"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div class="mb-4">
                      <label
                        class="block text-left mb-2 text-sm font-bold text-gray-700 dark:text-white"
                        for="email"
                      >
                        Email
                      </label>
                      <input
                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div class="mb-4 md:flex md:justify-between">
                      <div class="mb-4 md:mr-2 md:mb-0">
                        <label
                          class="block text-left mb-2 text-sm font-bold text-gray-700 dark:text-white"
                          for="password"
                        >
                          Password
                        </label>
                        <input
                          class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="password"
                          type="password"
                          placeholder="******************"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        {password.length > 4 ? null : <p class="text-xs italic text-red-500">
                          Please choose a password.
                        </p>}
                      </div>
                      <div class="md:ml-2">
                        <label
                          class="block text-left mb-2 text-sm font-bold text-gray-700 dark:text-white"
                          for="c_password"
                        >
                          Confirm Password
                        </label>
                        <input
                          class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="c_password"
                          type="password"
                          placeholder="******************"
                        />
                      </div>
                    </div>
                    <div class="mb-6 text-center">
                      <button
                        class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={onSubmit}
                      >
                        Register Account
                      </button>
                    </div>
                    <hr className="mb-6 "></hr>
                    <div className="flex flex-col items-center">
                      <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                        <div className="bg-white p-2 rounded-full">
                          <svg className="w-4" viewBox="0 0 533.5 544.3">
                            <path
                              d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                              fill="#4285f4"
                            />
                            <path
                              d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                              fill="#34a853"
                            />
                            <path
                              d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                              fill="#fbbc04"
                            />
                            <path
                              d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                              fill="#ea4335"
                            />
                          </svg>
                        </div>
                        <span className="ml-4">Sign Up with Google</span>
                      </button>
                    </div>
                    <div class="text-center mt-6">
                      <a
                        class="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                        href="#"
                      >
                        Forgot Password?
                      </a>
                    </div>
                    <div class="text-center">
                      <Link
                        className="text-slate-800 underline"
                        to={"/auth/login"}
                      >
                        Already have an account? Login!
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Signup;
