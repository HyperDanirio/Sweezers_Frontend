import React from "react";
import Image from "next/image";

function Header() {
  return (
    <>
      <div className="w-screen h-30 backdrop-blur-lg fixed top-0 flex items-center px-20">
        <div className="w-80 h-20 bg- z-50 flex justify-center items-center mt-3">
            <Image src="/Group3.png" width={150} height={300}/>
        </div>
      </div>
    </>
  );
}

export default Header;