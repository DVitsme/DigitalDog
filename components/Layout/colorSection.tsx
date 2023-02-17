import React from 'react';

const ColorSection = ({
  children,
  color,
  fullWidth,
  backgroundImage,
  backgroundImagePostion
}) => {
  return (
    <div className="relative">
      <div className="large-container">
        <div
          className="relative shadow-xl bg-no-repeat bg-right-bottom sm:overflow-hidden sm:rounded-2xl "
          style={{
            backgroundImage: `${
              backgroundImage ? 'url(/images/house_png.png),' : ''
            } linear-gradient(to right, rgb(244, 235, 228,1), rgba(244, 235, 228,1))`
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ColorSection;
