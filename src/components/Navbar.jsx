import { useEffect, useState } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [width, setWidth] = useState();

  const mobileMenu = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  const checkWindowWidth = () => {
    const width = window.innerWidth;
    setWidth(width);
  };
  useEffect(() => {
    window.addEventListener("resize", checkWindowWidth);
    window.addEventListener("load", checkWindowWidth);
  }, [width]);

  return (
    <>
      <nav className="navbar fixed  bg-[black] justify-between h-[10vh] md:h-[5vh] lg:h-[10vh] z-30 ">
        <div className=" flex w-[50%] justify-evenly lg:w-[20%] lg:flex lg:justify-evenly">
          <svg
            preserveAspectRatio="xMidYMid meet"
            id="comp-j7j54d06svgcontent"
            data-bbox="55.5 53.9 90 90"
            viewBox="55.5 53.9 90 90"
            height="40"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
            data-type="shape"
            role="img"
            className="fill-white"
          >
            <g>
              <switch>
                <g>
                  <path d="M100.5 53.9c-24.9 0-45 20.1-45 45s20.1 45 45 45 45-20.1 45-45c0-24.8-20.2-45-45-45zm0 85.7c-22.5 0-40.7-18.2-40.7-40.7 0-22.5 18.2-40.7 40.7-40.7s40.7 18.2 40.7 40.7c0 22.5-18.3 40.7-40.7 40.7z"></path>
                  <path d="M117.3 106.2c-1.4 0-2.6.4-3.7 1L103.4 97l16.8-17c.8-.8.8-2.1 0-2.8-.8-.8-2.1-.8-2.8 0l-16.9 16.9-17-16.9c-.8-.8-2.1-.8-2.8 0-.8.8-.8 2.1 0 2.8l16.9 16.9-10.2 10.2c-1.1-.6-2.4-1-3.7-1-4.2 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5c4.2 0 7.5-3.4 7.5-7.5 0-1.3-.4-2.6-1-3.7l10.2-10.2 10.2 10.2c-.6 1.1-1 2.4-1 3.7 0 4.2 3.4 7.5 7.5 7.5 4.2 0 7.5-3.4 7.5-7.5s-3.2-7.4-7.3-7.4zm-33.6 11.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm33.6 0c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path>
                </g>
              </switch>
            </g>
          </svg>
          <h1 className="text-xl font-bold">Hair & There</h1>
        </div>

        {width >= 768 ? (
          <ul className=" menu w-3/4 font-bold  flex flex-row  justify-end z-20 lg:text-xl">
            <li className="hover:bg-warning">
              <a href="#home">Home</a>
            </li>
            <li className="hover:bg-warning">
              <a href="#about">About </a>
            </li>
            <li className="hover:bg-warning">
              <a href="#services">Services</a>
            </li>
            <li className="hover:bg-warning">
              <a href="#gallery">Gallery</a>
            </li>
            <li className="hover:bg-warning">
              <a href="#contact">Contact us</a>
            </li>
          </ul>
        ) : (
          <button
            className="btn btn-square bg-[black] border-none  "
            onClick={mobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 w-full stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        )}

        {isVisible ? (
          <ul className=" absolute top-[100%] left-0 font-bold menu bg-[black] w-full h-[90vh]  flex flex-col  justify-evenly items-center z-20">
            <li>
              <a onClick={mobileMenu} href="#home">
                Home
              </a>
            </li>
            <li>
              <a onClick={mobileMenu} href="#about">
                About{" "}
              </a>
            </li>
            <li>
              <a onClick={mobileMenu} href="#services">
                Services
              </a>
            </li>
            <li>
              <a onClick={mobileMenu} href="#gallery">
                Gallery
              </a>
            </li>
            <li>
              <a onClick={mobileMenu} href="#contact">
                Contact us
              </a>
            </li>
          </ul>
        ) : (
          <div className="hidden"></div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
