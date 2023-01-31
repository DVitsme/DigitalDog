import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroTwo = () => {
  return (
    <main className="mx-auto ">
      <div className="flex justify-center px-0 my-0 h-screen">
        {/* <!-- Row --> */}
        <div className="w-full flex">
          {/* <!-- Col --> */}
          <div className="flex w-full h-auto bg-gray-400 lg:block lg:w-1/2 overflow-hidden">
            <Link href="/web-design">
              <Image
                src="/images/code.jpg"
                width={1920}
                height={1080}
                alt="code"
                className="transition duration-500 ease-out hover:scale-125"
              />
            </Link>
          </div>
          {/* <!-- Col --> */}
          <div className="w-full h-auto bg-gray-400 lg:block lg:w-1/2 overflow-hidden">
            <Link href="/photography" className="">
              <Image
                src="/images/house.jpg"
                width={1920}
                height={1080}
                alt="house"
                className="transition duration-500 ease-out hover:scale-125"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroTwo;
