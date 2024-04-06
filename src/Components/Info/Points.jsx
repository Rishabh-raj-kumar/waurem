import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Points() {
  return (
    <>
      <Header />
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light text-surface dark:text-white">
                <thead class="border-b border-neutral-200 font-medium dark:border-white/10">
                  <tr>
                    <th scope="col" class="px-6 py-4">
                      #
                    </th>
                    <th scope="col" class="px-6 py-4">
                      User
                    </th>
                    <th scope="col" class="px-6 py-4">
                      FullName
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Points
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-neutral-200 dark:border-white/10">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                    <img
                      src="https://media.istockphoto.com/id/1298261537/vector/blank-man-profile-head-icon-placeholder.jpg?s=612x612&w=0&k=20&c=CeT1RVWZzQDay4t54ookMaFsdi7ZHVFg2Y5v7hxigCA="
                      alt="User Avatar"
                      class="w-8 h-8 mt-2 rounded-full mr-4"
                    />
                    <td class="whitespace-nowrap px-6 py-4">Otto</td>
                    <td class="whitespace-nowrap px-6 py-4">1000</td>
                  </tr>
                  <tr class="border-b border-neutral-200 dark:border-white/10">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                    <img
                      src="https://media.istockphoto.com/id/1298261537/vector/blank-man-profile-head-icon-placeholder.jpg?s=612x612&w=0&k=20&c=CeT1RVWZzQDay4t54ookMaFsdi7ZHVFg2Y5v7hxigCA="
                      alt="User Avatar"
                      class="w-8 h-8 mt-2 rounded-full mr-4"
                    />
                    <td class="whitespace-nowrap px-6 py-4">Thornton</td>
                    <td class="whitespace-nowrap px-6 py-4">600</td>
                  </tr>
                  <tr class="border-b border-neutral-200 dark:border-white/10">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                    <img
                      src="https://media.istockphoto.com/id/1298261537/vector/blank-man-profile-head-icon-placeholder.jpg?s=612x612&w=0&k=20&c=CeT1RVWZzQDay4t54ookMaFsdi7ZHVFg2Y5v7hxigCA="
                      alt="User Avatar"
                      class="w-8 h-8 mt-2 rounded-full mr-4"
                    />
                    <td class="whitespace-nowrap px-6 py-4">Wild</td>
                    <td class="whitespace-nowrap px-6 py-4">400</td>
                  </tr>
                  <tr class="border-b border-neutral-200 dark:border-white/10">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">4</td>
                    <img
                      src="https://media.istockphoto.com/id/1298261537/vector/blank-man-profile-head-icon-placeholder.jpg?s=612x612&w=0&k=20&c=CeT1RVWZzQDay4t54ookMaFsdi7ZHVFg2Y5v7hxigCA="
                      alt="User Avatar"
                      class="w-8 h-8 mt-2 rounded-full mr-4"
                    />
                    <td class="whitespace-nowrap px-6 py-4">Motto</td>
                    <td class="whitespace-nowrap px-6 py-4">300</td>
                  </tr>
                  <tr class="border-b border-neutral-200 dark:border-white/10">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">5</td>
                    <img
                      src="https://media.istockphoto.com/id/1298261537/vector/blank-man-profile-head-icon-placeholder.jpg?s=612x612&w=0&k=20&c=CeT1RVWZzQDay4t54ookMaFsdi7ZHVFg2Y5v7hxigCA="
                      alt="User Avatar"
                      class="w-8 h-8 mt-2 rounded-full mr-4"
                    />
                    <td class="whitespace-nowrap px-6 py-4">Trenti</td>
                    <td class="whitespace-nowrap px-6 py-4">100</td>
                  </tr>
                  <tr class="border-b border-neutral-200 dark:border-white/10">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">6</td>
                    <img
                      src="https://media.istockphoto.com/id/1298261537/vector/blank-man-profile-head-icon-placeholder.jpg?s=612x612&w=0&k=20&c=CeT1RVWZzQDay4t54ookMaFsdi7ZHVFg2Y5v7hxigCA="
                      alt="User Avatar"
                      class="w-8 h-8 mt-2 rounded-full mr-4"
                    />
                    <td class="whitespace-nowrap px-6 py-4">Missav</td>
                    <td class="whitespace-nowrap px-6 py-4">100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Points;
