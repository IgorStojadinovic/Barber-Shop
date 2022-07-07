import { IoIosArrowDown } from "react-icons/io";
import BgImg from "../assets/images/home-bg.jpg";
const Home = () => {
  return (
    <div
      className="  relative h-full w-screen flex  flex-col justify-center  items-center  home-containerbg-no-repeat md:h-screen  "
      id="home"
    >
      <img
        src={BgImg}
        alt=""
        className="h-full w-full object-cover object-center absolute "
      />
      <div className="absolute  h-full w-screen bg-transparent md:h-screen lg:w-full lg:h-screen"></div>
      <h1 className="text-4xl flex  flex-col  items-center justify-center text-black text-center font-bold text-[black] uppercase z-0 md:flex md:flex-col md:justify-center md:items-center lg:text-5xl  lg:h-[200px] lg:flex lg:flex-col lg:justify-center lg:items-center">
        -Gentelmens-<br></br>
        <small className="text-2xl font-bold text-[white] uppercase lg:text-4xl ">
          BarberShop
        </small>
        <IoIosArrowDown
          size={50}
          className="z-0 hover:translate-y-[15px] ease-in-out duration-300 hover:cursor-pointer"
          color="white"
        />
      </h1>
    </div>
  );
};

export default Home;
