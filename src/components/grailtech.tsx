import React from 'react';

const Grailtech: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen  px-5 object-fit">
      {/* Clickable image container */}
      {/* <a
        href="#"
        className="block rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
      > */}
        {/* Image element */}
        <img
          src="/background1.jpg"
          alt="Grail Background"
          className="relative w-screen h-5/6 max-w-5/6 pb-10"
        />
      {/* </a> */}
    </div>
  );
};

export default Grailtech;
