import galleryImgOne from "../assets/images/triming.jpg";
import galleryImgTwo from "../assets/images/triming-back.jpg";
import galleryImgThree from "../assets/images/tools.jpg";
import galleryImgFour from "../assets/images/tools-all.jpg";

const Gallery = () => {
  return (
    <section
      className="flex flex-col  h-[1300px] bg-[white] md:h-[700px] md:justify-center lg:h-screen "
      id="gallery"
    >
      <h1 className="h-[10%] flex justify-center items-center text-5xl text-warning uppercase md:h-[20%] ">
        Gallery
      </h1>
      <div className="h-[90%] w-full   flex flex-col justify-evenly md:flex-row md:flex-wrap md:h-[70%]">
        <figure className="p-4 h-[25%] flex justify-center md:w-[45%] md:h-[45%] md:p-0">
          <img
            src={galleryImgOne}
            alt=""
            className=" h-full  object-contain  md:object-cover md:w-full"
          />
        </figure>
        <figure className="p-4  h-[25%]   flex justify-center  md:w-[45%] md:h-[45%] md:p-0 ">
          <img
            src={galleryImgTwo}
            alt=""
            className=" h-full  object-contain  md:object-cover md:w-full"
          />
        </figure>
        <figure className="p-4  h-[25%]  flex justify-center  md:w-[45%] md:h-[45%] md:p-0 ">
          <img
            src={galleryImgThree}
            alt=""
            className="  h-full  object-contain md:object-cover md:w-full"
          />
        </figure>

        <figure className="p-4  h-[25%]  flex justify-center  md:w-[45%] md:h-[45%] md:p-0">
          <img
            src={galleryImgFour}
            alt=""
            className="   h-full  object-contain md:object-cover md:w-full"
          />
        </figure>
      </div>
    </section>
  );
};

export default Gallery;
