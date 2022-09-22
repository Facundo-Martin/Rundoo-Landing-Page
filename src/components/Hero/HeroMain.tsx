import React from 'react';

type HeroMainProps = {
  setShowMore: (show: boolean) => void;
};
function HeroMain({ setShowMore }: HeroMainProps) {
  return (
    <>
      <div className="left-0 h-auto w-1/2 top-1/2 -translate-y-1/2 transform rotate-180 absolute opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        <img src="https://cdn.devdojo.com/assets/patterns/pattern-01.svg" />
      </div>

      <div className="">
        <div className="mx-auto sm:px-4 xl:px-0 flex items-center lg:flex-row flex-col h-full">
          <div className="w-full relative lg:w-1/2 flex-shrink-0 h-full flex flex-col xl:pr-0 lg:pr-5 lg:items-start sm:items-center justify-center space-y-10">
            <h1 className="font-extrabold text-4xl sm:text-5xl xl:text-6xl sm:text-center lg:text-left relative tracking-tight">
              Start Crafting Your<br></br>Next Great Idea
            </h1>

            <div className="flex max-w-sm items-center lg:max-w-lg">
              <div className="flex flex-shrink-0">
                <img src="https://cdn.devdojo.com/tails/avatars/010.jpg" className="rounded-full w-12 h-12 border-2 border-white" />
                <img src="https://cdn.devdojo.com/tails/avatars/017.jpg" className="rounded-full -ml-5 w-12 h-12 border-2 border-white" />
                <img src="https://cdn.devdojo.com/tails/avatars/041.jpg" className="rounded-full -ml-5 w-12 h-12 border-2 border-white" />
              </div>
              <p className="pl-3 lg:text-base text-xs">
                Join <span className="font-bold">23,000</span> other developers as we build the next greatest <span className="font-bold">SAAS tools</span>{' '}
                together!
              </p>
            </div>

            <div className="w-full flex sm:flex-row flex-col sm:justify-center lg:justify-start font-medium sm:space-x-5 space-y-4 sm:space-y-0">
              <a
                href="#_"
                className="px-7 py-4 bg-gray-900 text-white border-2 border-gray-900 hover:bg-white hover:text-gray-900 transition-all ease-out duration-150 rounded-xl flex items-center justify-center text-lg"
              >
                Sign Up Today
              </a>
              <button
                onClick={() => setShowMore(true)}
                className="px-7 flex items-center py-4 bg-gray-100 border-2 border-gray-100 hover:border-gray-900 justify-center hover:bg-white transition-all ease-out duration-150 text-gray-900 rounded-xl text-lg"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Learn More</span>
              </button>
            </div>
          </div>

          <div className="max-w-xl lg:w-1/2 flex-shrink-0 h-full lg:pt-0 pt-24">
            <div className="relative h-full w-full pl-12 lg:pr-0 pr-10">
              <div className="h-auto transform xl:translate-x-8 translate-y-2 w-32 sm:w-56 xl:w-64  absolute border border-gray-100 left-0 bottom-0 z-10 rounded-lg shadow-2xl overflow-hidden p-2 bg-white">
                <img src="https://cdn.devdojo.com/images/january2022/chart-1.png" className="" />
              </div>
              <div className="h-auto transform translate-x-5 lg:translate-x-6 -translate-y-5 xl:-translate-y-8 w-32 sm:w-56 xl:w-64 absolute border border-gray-100 right-0 z-10 top-0 rounded-xl shadow-2xl overflow-hidden p-2 bg-white">
                <img src="https://cdn.devdojo.com/images/january2022/chart-2.png" />
              </div>
              <div className="relative flex items-center justify-center p-3">
                <div className="bg-gray-100 transform rounded-xl p-2 shadow-2xl border border-gray-100 overflow-hidden h-auto w-full flex flex-col">
                  <img src="https://cdn.devdojo.com/images/january2022/admin-bg.png" className="h-auto opacity-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroMain;
