import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Mission() {
  return (
    <>
      <Header active={"mission"} />
      <div class="bg-gray-50  bg-gradient-to-tr from-lime-400 via-emerald-500 to-teal-700" >
        <div class="py-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto">
          <div class="space-y-16">
            <div class="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center md:flex-row">
            <div class="mx-auto w-1/2 md:w-1/3 p-3">
                <img src="/clean_world_t.jpg" />
              </div>
              <div class="w-full md:w-2/4 space-y-4">
                <h3 class="font-medium text-2xl">
                  Empower individuals and communities to reduce waste and
                  promote a more sustainable future.
                </h3>
                <p>
                  Empowering individuals and communities, one scan at a time.
                  Together, we can turn waste into a sustainable future.
                </p>
              </div>
            </div>
          </div>
          <div class="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center md:flex-row-reverse ">
          <div class="mx-auto w-1/2 md:w-1/3">
              <img src="/gem_robot.jpg" />
            </div>
            <div class="w-full md:w-2/4 space-y-4">
              <h3 class="font-medium text-2xl">Using robots to pick waste.</h3>
              <p>
                Robots can be used to collect waste from areas that are
                difficult for humans to access, such as remote locations or
                hazardous environments. This can ensure more equitable and
                inclusive waste management, reaching diverse communities and
                promoting overall sustainability.
              </p>
            </div>
          </div>
          <div class="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center flex-row">
          <div class="mx-auto w-1/2 md:w-1/3 p-3">
              <img src="/clean_world.jpg" />
            </div>
            <div class="w-full md:w-2/4 space-y-4">
              <h3 class="font-medium text-2xl"> Positive Impact on Ecosystems</h3>
              <p>
                By reducing waste generation, diverting materials from
                landfills, and promoting resource recovery, you contribute to
                cleaner air and water, healthier ecosystems, and reduced
                biodiversity loss. This ripple effect creates a more sustainable
                environment for all living beings
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Mission;
