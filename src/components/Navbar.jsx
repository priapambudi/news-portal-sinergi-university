import { useState } from "react";
import clsx from "clsx";

function Navbar() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  return (
    <div className="w-full bg-[#094C5D] overflow-x-hidden">
      <div className="w-[85%] mx-auto py-[10px] text-white flex justify-between items-center md:py-[10px] md:px-[20px]">
        <a href="/">
          <div className="flex items-center gap-1">
            <img src="../../logo_head.png" alt="" />
            <h1 className="font-medium text-xs">
              <span className="text-xl">Sinergi</span> <br /> University
            </h1>
          </div>
        </a>
        <div>
          <i
            onClick={() => setSideMenuOpen(true)}
            className="bx bx-menu md:hidden text-white text-[30px] cursor-pointer"
          />
          <ul className="hidden md:flex gap-10">
            <li>Home</li>
            <li>Akademik</li>
            <li>Admisi</li>
            <li>Beasiswa</li>
            <li>Tentang Kami</li>
          </ul>
        </div>

        {/* Mobile Sidebar */}

        <div
          className={clsx(
            "md:hidden fixed h-full w-screen bg-black/50 backdrop-blur-sm top-0 right-0 transition-transform duration-300 transform",
            sideMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="text-black bg-white w-56 flex-col absolute top-0 right-0 h-screen p-8 gap-5 z-50">
            <i
              onClick={() => setSideMenuOpen(false)}
              className="bx bx-x text-[30px] cursor-pointer absolute top-5 right-5"
            />
            <ul className="flex flex-col gap-4 mt-10 font-medium">
              <li>Home</li>
              <li>Akademik</li>
              <li>Admisi</li>
              <li>Beasiswa</li>
              <li>Tentang Kami</li>
              <li>
                <div className="flex w-full py-2 ">
                  <div className="flex items-center justify-center mr-10 gap-1 cursor-pointer">
                    <img src="../../flag-indonesia.png" alt="" />
                    <p>ID</p>
                  </div>
                  <div className="flex items-center justify-center gap-1 cursor-pointer">
                    <img src="../../flag-uk.png" alt="" />
                    <p>EN</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
