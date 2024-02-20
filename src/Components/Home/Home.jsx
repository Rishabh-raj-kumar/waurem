import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../firebaseConfig";

function Home() {
  return (
    <>
      <section class="relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pb-12 pt-20 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40">
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
        <section id="features" class="py-20 lg:pb-28 lg:pt-20">
          <div class="container mx-auto text-center">
            <h2 class="text-3xl lg:text-5xl font-semibold">Main Features</h2>
            <div class="flex flex-col sm:flex-row sm:-mx-3 mt-12">
              <div class="flex-1 px-3">
                <div
                  class="p-12 rounded-lg border bg-green-300 border-solid border-gray-200 mb-8"
                  style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
                >
                  <p class="font-semibold text-xl">1.</p>
                  <p class="mt-4">
                    Powerful AI identifies waste and suggests reuse ideas
                  </p>
                </div>
              </div>
              <div class="flex-1 px-3">
                <div
                  class="p-12 rounded-lg border bg-green-300 border-solid border-gray-200 mb-8"
                  style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
                >
                  <p class="font-semibold text-xl">2.</p>
                  <p class="mt-4">
                    Connect with other waste warriors and share ideas
                  </p>
                </div>
              </div>
              <div class="flex-1 px-3">
                <div
                  class="p-12 rounded-lg bg-green-300 border border-solid border-gray-200 mb-8"
                  style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
                >
                  <p class="font-semibold text-xl">3.</p>
                  <p class="mt-4">
                    Earn points for reducing and reusing, redeem for rewards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
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

        <section class="container mx-auto my-20 py-14 bg-green-200 rounded-lg text-center">
          <h3 class="text-5xl text-green-700 font-semibold">
            Ready to Explore the App?
          </h3>
          <p class="mt-8 text-xl font-light text-green-700">
            Create a Free account and get started with our mission to reduce the
            waste and reuse it again.
          </p>
          <p class="mt-8">
            <Link to={"/auth/signup"}>
              <button
                type="button"
                class=" py-5 px-16 text-lg bg-teal-500 hover:bg-teal-600 rounded text-white "
              >
                Create Account
              </button>
            </Link>
          </p>
        </section>
      </main>
    </>
  );
}

export default Home;
