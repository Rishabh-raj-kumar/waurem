import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Points() {
  return (
    <>
    <Header/>
    <div className=" min-h-screen">
      <div class="bg-white shadow-md rounded-md p-4 mx-auto max-w-sm mt-16">
        <h2 class="text-xl font-semibold mb-4">Top Users</h2>
        <ul>
          <li class="flex items-center justify-between py-2 border-b border-gray-300">
            <div class="flex items-center">
              <span class="text-lg font-semibold mr-4">1</span>
              <img
                src="https://via.placeholder.com/48"
                alt="User Avatar"
                class="w-8 h-8 rounded-full mr-4"
              />
              <span class="text-gray-800 font-semibold">John Doe</span>
            </div>
            <span class="text-green-500 font-semibold">1000 Points</span>
          </li>
          <li class="flex items-center justify-between py-2 border-b border-gray-300">
            <div class="flex items-center">
              <span class="text-lg font-semibold mr-4">2</span>
              <img
                src="https://via.placeholder.com/48"
                alt="User Avatar"
                class="w-8 h-8 rounded-full mr-4"
              />
              <span class="text-gray-800 font-semibold">Jane Doe</span>
            </div>
            <span class="text-green-500 font-semibold">950 Points</span>
          </li>
          <li class="flex items-center justify-between py-2 border-b border-gray-300">
            <div class="flex items-center">
              <span class="text-lg font-semibold mr-4">3</span>
              <img
                src="https://via.placeholder.com/48"
                alt="User Avatar"
                class="w-8 h-8 rounded-full mr-4"
              />
              <span class="text-gray-800 font-semibold">Bob Smith</span>
            </div>
            <span class="text-green-500 font-semibold">850 Points</span>
          </li>
          <li class="flex items-center justify-between py-2 border-b border-gray-300">
            <div class="flex items-center">
              <span class="text-lg font-semibold mr-4">4</span>
              <img
                src="https://via.placeholder.com/48"
                alt="User Avatar"
                class="w-8 h-8 rounded-full mr-4"
              />
              <span class="text-gray-800 font-semibold">Alice Smith</span>
            </div>
            <span class="text-green-500 font-semibold">800 Points</span>
          </li>
          <li class="flex items-center justify-between py-2">
            <div class="flex items-center">
              <span class="text-lg font-semibold mr-4">5</span>
              <img
                src="https://via.placeholder.com/48"
                alt="User Avatar"
                class="w-8 h-8 rounded-full mr-4"
              />
              <span class="text-gray-800 font-semibold">Joe Johnson</span>
            </div>
            <span class="text-green-500 font-semibold">750 Points</span>
          </li>
        </ul>
      </div>
      </div>
      <Footer/>
    </>
  );
}

export default Points;
