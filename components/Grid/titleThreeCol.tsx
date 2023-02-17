import Image from 'next/image';
import React, { useRef, useState } from 'react';
import ColorSection from '../Layout/colorSection';

export default function TitleThreCol() {
  return (
    <ColorSection>
      <div className="grid grid-cols-4 gap-4">
        <div className="title">Title</div>
        <div className="relative">
          <Image src="/images/house.jpg" height={500} width={500} alt="house" />
          <h2 className="absolute text-3xl text-white bottom-4 left-1/2 -translate-x-1/2">
            Bottom Center
          </h2>
        </div>
        <div className="image-1">
          <Image src="/images/house.jpg" height={500} width={150} alt="house" />
        </div>
        <div className="image-1">
          <Image src="/images/house.jpg" height={500} width={150} alt="house" />
        </div>
      </div>
    </ColorSection>
  );
}
