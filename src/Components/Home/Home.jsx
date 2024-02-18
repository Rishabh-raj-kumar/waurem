import React from "react";
import { Link } from "react-router-dom";

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
              <span class="text-gray-900">Reduce, Reuse, Earn with our Innovative App.</span>
            </h1>
            <h2 class="mt-6 text-lg leading-8 text-gray-600">
            Turn trash into treasure. Get started with our app and join the waste revolution!
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
                  style={{boxShadow:"0 10px 28px rgba(0,0,0,.08)"}}
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
                  style={{boxShadow:"0 10px 28px rgba(0,0,0,.08)"}}
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
                  style={{boxShadow:"0 10px 28px rgba(0,0,0,.08)"}}
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

        <section id="testimonials" class="py-10 lg:py-10">
          <div class="container mx-auto">
            <p class="uppercase tracking-wider mb-8 text-gray-600 text-center">
              What customers are saying
            </p>
            <div class="flex flex-col md:flex-row md:-mx-3">
              <div class="flex-1 px-3">
                <div
                  class="p-12 rounded-lg border border-solid border-gray-200 mb-8"
                  style={{boxShadow:"0 10px 28px rgba(0,0,0,.08)"}}
                >
                  <p class="text-xl font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                  <p class="mt-6">
                    Eu lobortis elementum nibh tellus molestie nunc non blandit
                    massa. Sit amet consectetur adipiscing elit duis.
                  </p>
                  <div class="flex items-center mt-8">
                    <img
                      class="w-12 h-12 mr-4 rounded-full"
                      src="https://placeimg.com/150/150/people"
                      alt="Jane Doe"
                    />
                    <div>
                      <p>Jane Doe</p>
                      <p class="text-sm text-gray-600">
                        Director of Research and Data
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-1 px-3">
                <div
                  class="p-12 rounded-lg border border-solid border-gray-200 mb-8"
                  style={{boxShadow:"0 10px 28px rgba(0,0,0,.08)"}}
                >
                  <p class="text-xl font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                  <p class="mt-6">
                    Eu lobortis elementum nibh tellus molestie nunc non blandit
                    massa. Sit amet consectetur adipiscing elit duis.
                  </p>
                  <div class="flex items-center mt-8">
                    <img
                      class="w-12 h-12 mr-4 rounded-full"
                      src="https://placeimg.com/150/150/people"
                      alt="John Doe"
                    />
                    <div>
                      <p>John Doe</p>
                      <p class="text-sm text-gray-600">
                        Director of Research and Data
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-1 px-3">
                <div
                  class="p-12 rounded-lg border border-solid border-gray-200 mb-8"
                  style={{boxShadow:"0 10px 28px rgba(0,0,0,.08)"}}
                >
                  <p class="text-xl font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                  <p class="mt-6">
                    Eu lobortis elementum nibh tellus molestie nunc non blandit
                    massa. Sit amet consectetur adipiscing elit duis.
                  </p>
                  <div class="flex items-center mt-8">
                    <img
                      class="w-12 h-12 mr-4 rounded-full"
                      src="https://placeimg.com/150/150/people"
                      alt="Jane Smith"
                    />
                    <div>
                      <p>Jane Smith</p>
                      <p class="text-sm text-gray-600">
                        Director of Research and Data
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="container mx-auto my-20 py-14 bg-green-200 rounded-lg text-center">
          <h3 class="text-5xl text-green-700 font-semibold">Ready to Explore the App?</h3>
          <p class="mt-8 text-xl font-light text-green-700">
            Create a Free account and get started with our mission to reduce the waste and reuse it again.
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
