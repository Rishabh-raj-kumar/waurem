import React from "react";
import { Link } from "react-router-dom";
function Community() {
  return (
    <div class="container mx-auto shadow-lg rounded-lg text-gray-900">
      <div class="px-5 py-5 flex justify-between items-center bg-white border-b-2">
        <Link to="/" replace={true} class="font-semibold text-2xl">WAUREM</Link>
        <div class="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
          RA
        </div>
      </div>

      <div class="flex flex-row justify-between bg-white">
        <div class="flex flex-col w-2/5 border-r-2 overflow-y-auto">
          <div class="border-b-2 py-4 px-2">
            <input
              type="text"
              placeholder="search chatting"
              class="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
            />
          </div>

          <div class="flex flex-row py-4 px-2 justify-center items-center border-b-2">
            <div class="w-1/4">
              <img
                src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                class="object-cover h-12 w-12 rounded-full"
                alt=""
              />
            </div>
            <div class="w-full">
              <div class="text-lg font-semibold">Luis1994</div>
              <span class="text-gray-500">Let's go pick some usefull waste.</span>
            </div>
          </div>
          <div class="flex flex-row py-4 px-2 items-center border-b-2">
            <div class="w-1/4">
              <img
                src="https://source.unsplash.com/otT2199XwI8/600x600"
                class="object-cover h-12 w-12 rounded-full"
                alt=""
              />
            </div>
            <div class="w-full">
              <div class="text-lg font-semibold">Mission clean</div>
              <span class="text-gray-500">Hi Sam, Welcome</span>
            </div>
          </div>
          <div class="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400">
            <div class="w-1/4">
              <img
                src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                class="object-cover h-12 w-12 rounded-full"
                alt=""
              />
            </div>
            <div class="w-full">
              <div class="text-lg font-semibold">Go waste free</div>
              <span class="text-gray-500">Lusi : Thanks Everyone</span>
            </div>
          </div>
          <div class="flex flex-row py-4 px-2 items-center border-b-2">
            <div class="w-1/4">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                class="object-cover h-12 w-12 rounded-full"
                alt=""
              />
            </div>
            <div class="w-full">
              <div class="text-lg font-semibold">Ravi Green</div>
              <span class="text-gray-500">Evan : we have some idea</span>
            </div>
          </div>
          <div class="flex flex-row py-4 px-2 items-center border-b-2">
            <div class="w-1/4">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                class="object-cover h-12 w-12 rounded-full"
                alt=""
              />
            </div>
            <div class="w-full">
              <div class="text-lg font-semibold">Team Reuser</div>
              <span class="text-gray-500">Evan : i have some bottles</span>
            </div>
          </div>
        </div>

        <div class="w-full px-5 flex flex-col justify-between">
          <div class="flex flex-col mt-5">
            <div class="flex justify-end mb-4">
              <div class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                Welcome to group everyone !
              </div>
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                class="object-cover h-8 w-8 rounded-full"
                alt=""
              />
            </div>
            <div class="flex justify-start mb-4">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                class="object-cover h-8 w-8 rounded-full"
                alt=""
              />
              <div class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                Hi Sam this side, are you guys interesetd on making diy projects using bottles.
              </div>
            </div>
            <div class="flex justify-end mb-4">
              <div>
                <div class=" w-4/5 ml-20 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                  Hii Sam , its nice to know that you arereusing waste bottles. I have a link that will give some idea.
                </div>

                <div class="w-4/5 mt-4 ml-20 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                  <Link class=" underline text-blue-900" to={"/blog/foE1I0pioFEazo6FmOfx"}>How to make something  interesting from waste.</Link>
                </div>
              </div>
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                class="object-cover h-8 w-8 rounded-full"
                alt=""
              />
            </div>
            <div class="flex justify-start mb-4">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                class="object-cover h-8 w-8 rounded-full"
                alt=""
              />
              <div class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                Thank you guys!
              </div>
            </div>
          </div>
          <div class="py-5 flex items-center gap-3">
          <div className=" p-3 bg-blue-200 rounded-full"><i class="ri-attachment-2"></i></div>
            <input
              class="w-full bg-gray-300 py-5 px-3 rounded-xl"
              type="text"
              placeholder="type your message here..."
            />
            <div className=" px-5 py-3 bg-green-200 rounded-full"><i class="ri-send-plane-2-fill"></i></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
