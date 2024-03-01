import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white items-center" >
      <div className="container p-12 flex justify-between">
        <span>
        <div className="rounded-full bg-[#035e68a7] w-[50px] h-[50px] lg:w-[50px] lg:h-[50px] relative">
            <Image
              src="/images/profile.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={90}
              height={90}
            />
          </div>
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
