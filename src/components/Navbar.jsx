import React from 'react';
import { appleImg, searchImg, bagImg, rightImg } from "../utils";
import {navLists} from "../constants";

const Navbar = () => {
    // const [activeMenu, setActiveMenu] = useState(true);
    // const [screenSize, setScreenSize] = useState(null);

    // useEffect(() => {
    //     const handleResize = () => setScreenSize(window.innerWidth)

    //     window.addEventListener("resize", handleResize);

    //     handleResize();

    //     return () => window.removeEventListener("resize", handleResize);

    // }, []);

    // useEffect(() => {
    //     if(screenSize < 640) {
    //         setActiveMenu(false)
    //     }else {
    //         setActiveMenu(true)
    //     }
    // }, [screenSize])

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center ">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />

        {activeMenu && (
          <div className="flex flex-1 justify-center max-sm:hidden">
            {navLists.map((nav) => (
              <div
                key={nav}
                className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
                {nav}
              </div>
            ))}
          </div>
        )}

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 mr-5 md:mr-0">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>

        {/* <button
          type="button"
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <img src={rightImg} alt="menu-icon" width={18} height={18} />
        </button> */}
      </nav>
    </header>
  );
}

export default Navbar