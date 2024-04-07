import React from "react";
import {useNavigate} from 'react-router-dom';

function Faq() {
  const navigate = useNavigate();
  
  return (
    <section class="py-10 m-10 bg-gray-50 sm:py-16 lg:py-24">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div class="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          <div class="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
            <button
              type="button"
              class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span class="flex text-lg font-semibold text-black">
                {" "}
                What is this website about?
              </span>

              <svg
                class="w-6 h-6 text-gray-400 rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div class="px-4 pb-5 sm:px-6 sm:pb-6">
              <p className=" font-Poppins font-normal">
                This website gives you content on how to reuse waste materials, some tips  and blogs, additional you can scan the waste to know how to reuse it.
              </p>
            </div>
          </div>

          <div class="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
            <button
              type="button"
              class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span class="flex text-lg font-semibold text-black">
                {" "}
                How can i use the scan feature of this website?
              </span>

              <svg
                class="w-6 h-6 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          <div class="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
            <div class="">
              <button
                type="button"
                onClick={() => {document.querySelector('.box').classList.toggle('hidden')}}
                class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span class="flex text-lg font-semibold text-black">
                  {" "}
                  Can i really get rewards on this app?
                </span>

                <svg
                  class="w-6 h-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div class="box hidden px-4 pb-5 sm:px-6 sm:pb-6">
                <p className=" font-Poppins font-normal">
                  Yes any user who will share content actively and top on the point's table will be rewarded.
                </p>
              </div>
            </div>
          </div>

          <div class="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
            <button
              type="button"
              class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span class="flex text-lg font-semibold text-black">
                {" "}
                How can I reach to support?{" "}
              </span>

              <svg
                class="w-6 h-6 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div class="hidden px-4 pb-5 sm:px-6 sm:pb-6">
              <p>
                Amet minim mollit non deserunt ullamco est sit{" "}
                <a
                  href="#"
                  title=""
                  class="text-blue-600 transition-all duration-200 hover:underline"
                >
                  aliqua dolor
                </a>{" "}
                do amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>
        </div>

        <p class="text-center text-gray-600 textbase mt-9">
          Didn’t find the answer you are looking for?{" "}
          <a
            href="#"
            title=""
            class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            onClick={() => {navigate('/contact')}}
          >
            Contact our support
          </a>
        </p>
      </div>
    </section>
  );
}

export default Faq;
