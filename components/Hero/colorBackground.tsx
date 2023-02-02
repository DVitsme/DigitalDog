import React from 'react';

const ColorBackground = () => {
  return (
    <div>
      {/* Hero card */}
      <div className="relative">
        <div className="large-container">
          <div
            className="relative shadow-xl bg-no-repeat bg-right-bottom sm:overflow-hidden sm:rounded-2xl "
            style={{
              backgroundImage: `url(/images/house_png.png), linear-gradient(to right, rgb(244, 235, 228,1), rgba(244, 235, 228,1))`
            }}
          >
            <div className="mx-auto container">
              <div className="relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-left text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-primary-header-text">
                    Take control of your
                  </span>
                  <span className="block text-primary-header-text">
                    customer support
                  </span>
                </h1>
                <p className="mt-6 max-w-lg text-left text-xl text-primary-header-text sm:max-w-3xl">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-10 max-w-sm sm:flex sm:max-w-none">
                  <div className="space-y-4 sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
                    >
                      Get started
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                    >
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorBackground;
