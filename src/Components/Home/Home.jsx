import { collection, endAt, getDocs, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../firebaseConfig";
// import Chatbot from "./chatbot";
// import Chat from "./chatbot";
import Chatbot from "./chatbot";
import axios from "axios";
import Faq from "./Faq";
// import ChatGPT from "./chatgpt";

function Home() {
  const [blogslist, setblogs] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await axios({
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
        .get("http://localhost:8080/profile")
        .then((res) => console.log(res));
    }
    fetchData();
  }, []);

  useEffect(() => {
    // Subscribe to query with onSnapshot
    const unsubscribe = onSnapshot(collection(db, "blogs"), (querySnapshot) => {
      // Get all documents from collection - with IDs
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // Update state
      // setLoading(false);
      setblogs(data);
    });

    // Detach listener
    return unsubscribe;
  }, []);
  return (
    <>
      <section class="relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pb-12 pt-20 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40 font-Poppins">
        <div class="relative z-10">
          <div class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg
              class="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                  width="200"
                  height="200"
                  x="50%"
                  y="50%"
                  patternUnits="userSpaceOnUse"
                  patternTransform="translate(-100 0)"
                >
                  <path d="M.5 200V.5H200" fill="none"></path>
                </pattern>
              </defs>
              <svg x="50%" y="50%" class="overflow-visible fill-blue-50">
                <path
                  d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                  stroke-width="0"
                ></path>
              </svg>
              <rect
                width="100%"
                height="100%"
                stroke-width="0"
                fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
              ></rect>
            </svg>
          </div>
        </div>
        <div class="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h1 class="text-4xl font-bold tracking-tight text-green-600 sm:text-6xl">
              Reimagine waste:
              <span class="text-gray-900">
                Reduce, Reuse, Earn with our Innovative App.
              </span>
            </h1>
            <h2 class="mt-6 text-lg leading-8 text-gray-600">
              Turn trash into treasure. Get started with our app and join the
              waste revolution!
            </h2>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <button className=" p-3 bg-blue-500 text-yellow-50 rounded-sm shadow-md m-4">
                <Link to="/open/camera" className="flex gap-3 items-center">
                  Open Camera
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </button>
            </div>
            <h2 class = "mt-2 text-lg leading-8 text-gray-600">
              Unlock your camera to easily and accurately <span class = "font-bold">scan the waste</span>
            </h2>
          </div>
          <div class="relative mx-auto mt-10 max-w-lg">
            <img
              class="w-full rounded-2xl border border-gray-100 shadow"
              src="/kenny-eliason-8Yk4T-tDSYY-unsplash.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      <main class="text-gray-900">
        <section id="features" class="py-10 lg:pb-8 lg:pt-1">
          <div class="container mx-auto text-center">
            <h2 class="text-3xl lg:text-5xl font-semibold">Main Features</h2>
          </div>
        </section>
        <section className=" font-Poppins">
          <div class="py-16">
            <div class="mx-auto px-6 max-w-6xl text-gray-500">
              <div class="relative">
                <div class="relative z-10 grid gap-3 grid-cols-6">
                  <div class="col-span-full lg:col-span-2 overflow-hidden flex relative p-8 rounded-xl bg-white border-2 border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                    <div class="size-fit m-auto relative">
                      <div class="relative h-24 w-56 flex items-center">
                        <svg
                          class="absolute inset-0 size-full text-gray-400 dark:text-gray-600"
                          viewBox="0 0 254 104"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <span class="w-fit block mx-auto text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-600 dark:from-blue-400 dark:to-pink-400">
                          100%
                        </span>
                      </div>
                      <h2 class="mt-6 text-center font-semibold text-gray-600 dark:text-white text-lg">
                        Free Platform to get Ideas to reduce waste.
                      </h2>
                    </div>
                  </div>
                  <div class="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-white border-2 border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                    <div>
                      <div class="relative aspect-square rounded-full size-44 flex border mx-auto dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                        <img
                          src="https://recycleye.com/wp-content/uploads/2023/04/Vision-System.png"
                          className=" w-80"
                        />
                      </div>
                      <div class="mt-6 text-center relative z-10 space-y-2">
                        <p class="dark:text-gray-300 text-gray-700">
                          Powerful AI identifies waste and suggests reuse ideas
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-white border-2 border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                    <div>
                      <div class="pt-6 lg:px-6">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXcERZO93GCdqXR21-9gUh9nIwOj6bP0v0i4LJ12ooA&s" />
                      </div>
                      <div class="mt-14 text-center relative z-10 space-y-2">
                        <p class="dark:text-gray-300 text-gray-700">
                          Connect with other waste warriors and share ideas
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-white border-2 border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                    <div class="grid sm:grid-cols-2">
                      <div class="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
                        <div class="relative aspect-square rounded-full size-12 flex border dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAfWW2Rf6OFzuAeiYIfPMvjVJFEWdOTgTH776qMcA6bA&s" />
                        </div>
                        <div class="space-y-2">
                          <h2 class="text-lg font-medium text-gray-800 transition group-hover:text-purple-950 dark:text-white">
                            Earn points for reducing and reusing, redeem for
                            rewards
                          </h2>
                          {/* <p class="dark:text-gray-300 text-gray-700">
                            Provident fugit vero voluptate. Voluptates a
                            sapiente inventore nisi.
                          </p> */}
                        </div>
                      </div>
                      <div class="overflow-hidden relative mt-6 sm:mt-auto h-fit -mb-[34px] -mr-[34px] sm:ml-6 py-6 p-6 border rounded-tl-lg dark:bg-white/5 dark:border-white/10">
                        <div class="absolute flex gap-1 top-2 left-3">
                          <span class="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                          <span class="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                          <span class="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                        </div>
                        <img src="https://img.freepik.com/free-vector/detailed-point-exchange_23-2148845560.jpg" />
                      </div>
                    </div>
                  </div>
                  <div class="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-white border-2 border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                    <div class="h-full grid sm:grid-cols-2">
                      <div class="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
                        <div class="relative aspect-square rounded-full size-12 flex border dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                          <svg
                            class="size-6 m-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <g fill="none">
                              <path
                                stroke="currentColor"
                                d="M9 6a3 3 0 1 0 6 0a3 3 0 0 0-6 0zm-4.562 7.902a3 3 0 1 0 3 5.195a3 3 0 0 0-3-5.196zm15.124 0a2.999 2.999 0 1 1-2.998 5.194a2.999 2.999 0 0 1 2.998-5.194z"
                              ></path>
                              <path
                                fill="currentColor"
                                fill-rule="evenodd"
                                d="M9.003 6.125a2.993 2.993 0 0 1 .175-1.143a8.507 8.507 0 0 0-5.031 4.766a8.5 8.5 0 0 0-.502 4.817a3 3 0 0 1 .902-.723a7.498 7.498 0 0 1 4.456-7.717m5.994 0a7.499 7.499 0 0 1 4.456 7.717a2.998 2.998 0 0 1 .902.723a8.5 8.5 0 0 0-5.533-9.583a3 3 0 0 1 .175 1.143m2.536 13.328a3.002 3.002 0 0 1-1.078-.42a7.501 7.501 0 0 1-8.91 0l-.107.065a3 3 0 0 1-.971.355a8.5 8.5 0 0 0 11.066 0"
                                clip-rule="evenodd"
                              ></path>
                            </g>
                          </svg>
                        </div>
                        <div class="space-y-2">
                          <h2 class="text-lg font-medium text-gray-800 transition group-hover:text-purple-950 dark:text-white">
                            Keep connected with others
                          </h2>
                          <p class="dark:text-gray-300 text-gray-700">
                            Ask questions regarding waste products and envolve
                            in community engagement.
                          </p>
                        </div>
                      </div>
                      <div class="mt-6 relative sm:-mr-[--card-padding] sm:-my-8 before:absolute before:w-px before:inset-0 before:mx-auto before:bg-gray-200 dark:before:bg-gray-800">
                        <div class="relative space-y-6 py-6 flex flex-col justify-center h-full">
                          <div class="flex items-center justify-end gap-2 w-[calc(50%+0.875rem)] relative">
                            <span class="h-fit text-xs block px-2 py-1 shadow-sm border rounded-md dark:bg-gray-800 dark:border-white/5 dark:text-white">
                              Glodie
                            </span>
                            <div class="size-7 ring-4 ring-white dark:ring-[--card-dark-bg]">
                              <img
                                class="rounded-full  border border-gray-950/5 dark:border-white/5 size-full"
                                src="https://pbs.twimg.com/profile_images/1585976646468763648/OlbJkLL0_400x400.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="flex items-center gap-2 ml-[calc(50%-1rem)] relative">
                            <div class="size-8 ring-4 ring-white dark:ring-[--card-dark-bg]">
                              <img
                                class="rounded-full  border border-gray-950/5 dark:border-white/5 size-full"
                                src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/124.jpg"
                                alt=""
                              />
                            </div>
                            <span class="h-fit text-xs block px-2 py-1 shadow-sm border rounded-md dark:bg-gray-800 dark:border-white/5 dark:text-white">
                              M. Irung
                            </span>
                          </div>
                          <div class="flex items-center justify-end gap-2 w-[calc(50%+0.875rem)] relative">
                            <span class="h-fit text-xs block px-2 py-1 shadow-sm border rounded-md dark:bg-gray-800 dark:border-white/5 dark:text-white">
                              B. Ng
                            </span>
                            <div class="size-7 ring-4 ring-white dark:ring-[--card-dark-bg]">
                              <img
                                class="rounded-full  border border-gray-950/5 dark:border-white/5 size-full"
                                src="https://pbs.twimg.com/profile_images/1585976646468763648/OlbJkLL0_400x400.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className=" flex flex-wrap justify-between gap-4 m-3 p-3 mx-9">
          {blogslist.map((blog) => (

            <article class="flex w-[380px] h-[200px] bg-white transition hover:shadow-xl border p-1 shadow">

              <div class="hidden sm:block sm:basis-40">
                <img
                  alt=""
                  src={blog.coverImg}
                  class="aspect-square h-full w-full object-cover"
                />
              </div>

              <div class="flex flex-1 flex-col justify-between">
                <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6 text-green-600">
                  <a href="#">{blog.Title}</a>

                  <p className="bg-gray-200 p-1 px-2 uppercase text-sm rounded-full text-black mb-3 w-max mt-3">
                    {blog.Tag}
                  </p>
                </div>

                <div class="sm:flex sm:items-end sm:justify-end">
                  <a
                    href="#"
                    class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                  >
                    Read Blog
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 font-Poppins">
          <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
            <div>
              <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white">
                Get Inspired, Reduce & Reuse: Join Our {""}
                <span class="text-blue-600">Community!</span>
              </h1>
              <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">
                Connect & Collaborate: Share Reuse Ideas & Make a Difference!
              </p>

              <div class="mt-7 grid gap-3 w-full sm:inline-flex">
                <a
                  class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Get started
                  <svg
                    class="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
                <a
                  class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Contact Us
                </a>
              </div>

              <div class="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">
                <div class="py-5">
                  <div class="flex space-x-1">
                    <svg
                      class="size-4 text-gray-800 dark:text-gray-200"
                      width="51"
                      height="51"
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      class="size-4 text-gray-800 dark:text-gray-200"
                      width="51"
                      height="51"
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      class="size-4 text-gray-800 dark:text-gray-200"
                      width="51"
                      height="51"
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      class="size-4 text-gray-800 dark:text-gray-200"
                      width="51"
                      height="51"
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      class="size-4 text-gray-800 dark:text-gray-200"
                      width="51"
                      height="51"
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  <p class="mt-3 text-sm text-gray-800 dark:text-gray-200">
                    <span class="font-bold">4.6</span> /5 - from 12 reviews
                  </p>
                </div>

                <div class="py-5">
                  <div class="flex space-x-1">
                    <svg
                      class="size-4 text-gray-800 dark:text-gray-200"
                      width="51"
                      height="51"
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      class="size-4 text-gray-800 dark:text-gray-200"
                      width="51"
                      height="51"
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      class="size-4 text-gray-800 dark:text-gray-200"
                      width="51"
                      height="51"
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      class="size-4 text-gray-800 dark:text-gray-200"
                      width="51"
                      height="51"
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      class="size-4 text-gray-800 dark:text-gray-200"
                      width="51"
                      height="51"
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M49.6867 20.0305C50.2889 19.3946 49.9878 18.1228 49.0846 18.1228L33.7306 15.8972C33.4296 15.8972 33.1285 15.8972 32.8275 15.2613L25.9032 0.317944C25.6021 0 25.3011 0 25 0V42.6046C25 42.6046 25.3011 42.6046 25.6021 42.6046L39.7518 49.9173C40.3539 50.2352 41.5581 49.5994 41.2571 48.6455L38.5476 32.4303C38.5476 32.1124 38.5476 31.7944 38.8486 31.4765L49.6867 20.0305Z"
                        fill="transparent"
                      />
                      <path
                        d="M0.313299 20.0305C-0.288914 19.3946 0.0122427 18.1228 0.915411 18.1228L16.2694 15.8972C16.5704 15.8972 16.8715 15.8972 17.1725 15.2613L24.0968 0.317944C24.3979 0 24.6989 0 25 0V42.6046C25 42.6046 24.6989 42.6046 24.3979 42.6046L10.2482 49.9173C9.64609 50.2352 8.44187 49.5994 8.74292 48.6455L11.4524 32.4303C11.4524 32.1124 11.4524 31.7944 11.1514 31.4765L0.313299 20.0305Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  <p class="mt-3 text-sm text-gray-800 dark:text-gray-200">
                    <span class="font-bold">4.8</span> /5 - from 5 reviews
                  </p>
                </div>
              </div>
            </div>

            <div class="relative ms-4">
              <img
                class="w-full rounded-md"
                src="/waste.png"
                alt="Image Description"
              />
              <div class="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>

              <div class="absolute bottom-0 start-0">
                <svg
                  class="w-2/3 ms-auto h-auto text-white dark:text-slate-900"
                  width="630"
                  height="451"
                  viewBox="0 0 630 451"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="531"
                    y="352"
                    width="99"
                    height="99"
                    fill="currentColor"
                  />
                  <rect
                    x="140"
                    y="352"
                    width="106"
                    height="99"
                    fill="currentColor"
                  />
                  <rect
                    x="482"
                    y="402"
                    width="64"
                    height="49"
                    fill="currentColor"
                  />
                  <rect
                    x="433"
                    y="402"
                    width="63"
                    height="49"
                    fill="currentColor"
                  />
                  <rect
                    x="384"
                    y="352"
                    width="49"
                    height="50"
                    fill="currentColor"
                  />
                  <rect
                    x="531"
                    y="328"
                    width="50"
                    height="50"
                    fill="currentColor"
                  />
                  <rect
                    x="99"
                    y="303"
                    width="49"
                    height="58"
                    fill="currentColor"
                  />
                  <rect
                    x="99"
                    y="352"
                    width="49"
                    height="50"
                    fill="currentColor"
                  />
                  <rect
                    x="99"
                    y="392"
                    width="49"
                    height="59"
                    fill="currentColor"
                  />
                  <rect
                    x="44"
                    y="402"
                    width="66"
                    height="49"
                    fill="currentColor"
                  />
                  <rect
                    x="234"
                    y="402"
                    width="62"
                    height="49"
                    fill="currentColor"
                  />
                  <rect
                    x="334"
                    y="303"
                    width="50"
                    height="49"
                    fill="currentColor"
                  />
                  <rect x="581" width="49" height="49" fill="currentColor" />
                  <rect x="581" width="49" height="64" fill="currentColor" />
                  <rect
                    x="482"
                    y="123"
                    width="49"
                    height="49"
                    fill="currentColor"
                  />
                  <rect
                    x="507"
                    y="124"
                    width="49"
                    height="24"
                    fill="currentColor"
                  />
                  <rect
                    x="531"
                    y="49"
                    width="99"
                    height="99"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <Faq/>
        <Chatbot />
        {/* <ChatGPT/> */}
      </main>
    </>
  );
}

export default Home;
