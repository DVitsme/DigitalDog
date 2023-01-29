import React from 'react';

const HeroTwo = () => {
  return (
    <main className="mx-auto ">
      <div className="flex justify-center px-0 my-0 h-screen">
        {/* <!-- Row --> */}
        <div className="w-full flex">
          {/* <!-- Col --> */}
          <div
            className="w-full h-auto bg-gray-400 lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage: "url('/images/code.jpg')"
            }}
          ></div>
          {/* <!-- Col --> */}
          <div
            className="w-full h-auto bg-gray-400 lg:block lg:w-1/2 bg-cover  transition duration-500 ease-out hover:scale-125 overflow-hidden"
            style={{
              backgroundImage: "url('/images/house.jpg')"
            }}
          ></div>
        </div>
      </div>
    </main>
  );
};

export default HeroTwo;
