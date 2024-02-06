import React from "react";
import Header from "./_partials/header";
import "../css/custom.css";

const Home = ({ userMenuShow, onUserMenuClick }) => {
  return (
    <>
      <Header userMenuShow={userMenuShow} onUserMenuClick={onUserMenuClick} />
      <main className="w-full bg-gray-100">
        <header className="px-0" id="home">
          <img
            className="object-fill w-full"
            src="https://www.w3schools.com/w3images/jane.jpg"
            alt="Fashion Blog"
            width="1600"
            height="1060"
          />
        </header>
        <div className="p-5 md:p-10">
          <div className="columns-auto gap-8 bg-gray-100 md:flex">
            <div className="md:w-2/3 bg-white p-5 mb-10">
              <div className="font-serif md:'Times New Roman' font-bold text-center text-xl subpixel-antialiased pt-3">
                <h3 className="">TITLE HEADING</h3>
                <h5 className="font-serif md:'Times New Roman' font-medium text-center text-sm subpixel-antialiased pt-3 pb-3">
                  <span className="text-dark">Title description, </span>
                  <span className="text-gray-600 ">May 2, 2016</span>
                </h5>
              </div>

              <div className="">
                <img
                  src="https://www.w3schools.com/w3images/girl_hat.jpg"
                  alt="Girl Hat"
                  className="w-full"
                />
                <div className="mt-5 text-justify mb-5">
                  <p className="mb-2">
                    <strong>More Hats!</strong> I am crazy about hats these
                    days. Some text about this blog entry. Fashion fashion and
                    mauris neque quam, fermentum ut nisl vitae, convallis
                    maximus nisl. Sed mattis nunc id lorem euismod placerat.
                    Vivamus porttitor magna enim, ac accumsan tortor cursus at.
                    Phasellus sed ultricies mi non congue ullam corper. Praesent
                    tincidunt sedtellus ut rutrum. Sed vitae justo condimentum,
                    porta lectus vitae, ultricies congue gravida diam non
                    fringilla.
                  </p>
                  <p>
                    Sunt in culpa qui officia deserunt mollit anim id est
                    laborum consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco.
                  </p>
                  <p className="float-start mt-10">
                    <button
                      type="button"
                      class="text-black focus:outline-none border border-gray-200 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      Like
                    </button>
                  </p>
                  <p className="float-end mt-10">
                    <button
                      type="button"
                      class="text-white focus:outline-none border border-gray-200 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center bg-black"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
                        />
                      </svg>
                      Replies
                    </button>
                  </p>
                </div>
                <div className="columns-1 w-full" id="demo1">
                  <hr className="my-4" />
                  <div className="flex">
                    <div className="mt-2">
                      <img
                        src="https://www.w3schools.com/w3images/avatar_smoke.jpg"
                        className="w-24"
                        alt=""
                      />
                    </div>
                    <div className="p-10 font-serif md:'Times New Roman' text-center text-xl subpixel-antialiased pt-3">
                      <h4 className="text-dark font-bold">
                        George{" "}
                        <span className="font-serif md:'Times New Roman' font-medium text-center text-sm subpixel-antialiased pt-3 pb-3 text-gray-600 ">
                          May 3, 2015, 6:32 PM
                        </span>
                      </h4>
                      <p className="font-serif md:'Times New Roman' font-medium text-center text-sm subpixel-antialiased pt-3 pb-3 text-gray-500 ">
                        Great blog post! Following
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 bg-white h-full mb-10">
              <div class="box-border h-15 w-full p-4 border-1 bg-black text-white font-serif md:'Times New Roman' text-xl">
                Popular Posts
              </div>
              <div className="">
                <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                  <li class="p-5 sm:pb-4">
                    <div class="flex items-center space-x-4 rtl:space-x-reverse">
                      <div class="flex-shrink-0">
                        <img
                          class="w-14 h-14"
                          src="https://www.w3schools.com/w3images/avatar_smoke.jpg"
                          alt="Neil"
                        />
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-lg text-gray-900 truncate ">
                        Denim
                        </p>
                        <p class="text-base text-gray-500 truncate dark:text-gray-400">
                        Sed mattis nunc
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="p-5 sm:py-4">
                    <div class="flex items-center space-x-4 rtl:space-x-reverse">
                      <div class="flex-shrink-0">
                        <img
                          class="w-14 h-14"
                          src="https://www.w3schools.com/w3images/bandmember.jpg"
                          alt="Neil "
                        />
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-lg text-gray-900 truncate ">
                        Sweaters
                        </p>
                        <p class="text-base text-gray-500 truncate dark:text-gray-400">
                        Praes tinci sed

                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="p-5 sm:py-4">
                    <div class="flex items-center space-x-4 rtl:space-x-reverse">
                      <div class="flex-shrink-0">
                        <img
                          class="w-14 h-14"
                          src="https://www.w3schools.com/w3images/workshop.jpg"
                          alt="Neil "
                        />
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-lg text-gray-900 truncate ">
                        Workshop
                        </p>
                        <p class="text-base text-gray-500 truncate dark:text-gray-400">
                        Ultricies congue
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="p-5 sm:py-4">
                    <div class="flex items-center space-x-4 rtl:space-x-reverse">
                      <div class="flex-shrink-0">
                        <img
                          class="w-14 h-14"
                          src="https://www.w3schools.com/w3images/avatar_smoke.jpg"
                          alt="Neil "
                        />
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-lg text-gray-900 truncate ">
                        Trends
                        </p>
                        <p class="text-base text-gray-500 truncate dark:text-gray-400">
                        Lorem ipsum dipsum

                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
