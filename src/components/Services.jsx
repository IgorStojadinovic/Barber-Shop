const Services = () => {
  return (
    <div
      className="bg-services flex flex-col  items-center  justify-end h-[100vh] md:justify-center lg:h-screen lg:justify-end 2xl:justify-center"
      id="services"
    >
      <h1 className="h-[10%] flex items-center text-2xl text-[white] uppercase md:h-[5%] md:text-4xl lg:text-5xl ">
        Services
      </h1>
      <div className="flex flex-col justify-evenly h-4/5 text-[white] w-4/5  lg:w-3/6 ">
        <div className="flex flex-col w-full items-center  text-xl  md:text2xl ">
          <p>Signature Haircut</p>
          <p>$25</p>
        </div>
        <div className="h-[2px] bg-[white]"></div>
        <div className="flex flex-col items-center text-xl md:text-2xl  ">
          <p>Haircut</p>
          <p>$20</p>
        </div>
        <div className="h-[2px] bg-[white]"></div>
        <div className="flex flex-col items-center text-xl md:text-2xl  ">
          <p>Beard Shaving</p>
          <p>$15</p>
        </div>
        <div className="h-[2px] bg-[white]"></div>
        <div className="flex flex-col items-center  text-xl  md:text-2xl ">
          <p>Beard Trim</p>
          <p>$15</p>
        </div>
        <div className="h-[2px] bg-[white]"></div>
        <div className="flex flex-col items-center  text-xl  md:text-2xl ">
          <p>Cut & Shave</p>
          <p>$30</p>
        </div>
        <div className="h-[2px] bg-[white]"></div>
        <div className="flex flex-col items-center  text-xl  md:text-2xl  ">
          <p>Deep Tissue Shave</p>
          <p>$25</p>
        </div>
        <div className="h-[2px] bg-[white]"></div>
        <div className="flex flex-col items-center  text-xl md:text-2xl ">
          <p>Eyebrown Threading</p>
          <p>$10</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
