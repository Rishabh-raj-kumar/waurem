import React from "react";
import Header from "../Header";

function Tips() {
  return (
    <>
      <Header />
      <div className=" p-2 text-black grid lg:grid-cols-3 gap-1 grid-cols-1">
        <div class=" p-3 flex flex-col justify-center relative overflow-hidden ">
          <div class=" w-11/12 mx-auto">
            <div class="relative group cursor-pointer">
              <div class="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div class="relative px-4 py-3 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                <div class="space-y-2">
                    <div className=" flex justify-between">
                    <i class="ri-cloud-line"></i>
                    <i class="ri-verified-badge-fill text-blue-700"></i>
                    </div>
                  <p class=" font-Poppins text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error alias quibusdam nihil sapiente dolore et ipsa aperiam
                    animi sit quod saepe voluptatem sunt, eaque voluptatum
                    impedit eveniet?
                  </p>
                  <div className=" flex gap-1 font-openSans mt-3">
                    <span className=" bg-pink-200 px-3 text-sm">BLOG</span>
                    <span className=" bg-pink-200 px-3 text-sm">TELEVSION</span>
                    <span className=" bg-pink-200 px-3 text-sm">OLD PHONE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tips;
