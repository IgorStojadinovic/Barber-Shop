const Footer = () => {
  return (
    <footer className="flex flex-col w-full ">
      <div className="mapouter">
        <div className="gmap_canvas w-full">
          <iframe
            title="iframe"
            className=" w-full h-full"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
          <a href="https://123movies-to.org">123movies</a>
          <a href="https://www.embedgooglemap.net"></a>
        </div>
      </div>
      <div className="h-[50px] bg-contact text-[white] text-xl flex justify-center items-center lg:text-4xl lg:h-[100px] uppercase">
        Gentelmens BarberShop
      </div>
    </footer>
  );
};

export default Footer;
