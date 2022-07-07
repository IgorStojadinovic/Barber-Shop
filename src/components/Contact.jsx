const Contact = () => {
  return (
    <section
      className="h-[100vh] bg-contact  flex flex-col justify-end items-center md:h-[900px] "
      id="contact"
    >
      <h1 className="h-[10%] flex justify-center items-center text-4xl text-[white] uppercase md:h-[10%] lg:h-[10%] lg:text-5xl">
        Contact
      </h1>
      <form className="w-full h-[50%] flex flex-col justify-center items-center  md:h-[50%]">
        <div className="flex flex-col h-full w-4/5 justify-evenly lg:w-[30%]">
          <input type="text" placeholder="Name" className=" p-2" />
          <input type="emlai" placeholder="Email" className=" p-2" />
          <textarea
            name="msg"
            id="msg"
            cols="30"
            rows="5"
            placeholder="Message"
            className=" p-2"
          ></textarea>

          <button className="submit btn w-[40%] self-center ">Send</button>
        </div>
      </form>

      <div className="h-[30%]  w-full flex text-[white] justify-evenly md:h-[30%]">
        <div className="flex flex-col items-center justify-evenly w-[30%]">
          <h1 className="text-base h-[10%] lg:text-2xl lg:mb-3">Say Hello</h1>
          <div className=" text-sm text-center h-[80%] lg:text-base ">
            <p>
              Phone: <br></br>123-456-789
            </p>
            <p>Email: info@mysite.com</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-evenly w-[30%] ">
          <h1 className="text-base h-[10%] lg:text-2xl lg:mb-3">Our adress</h1>
          <div className="text-sm text-center h-[80%] lg:text-base ">
            <p>500 Terry Francois Street</p>
            <p>New Yourk,NY 94158</p>
          </div>
        </div>
        <div className="flex flex-col items-center  justify-evenly w-[30%] ">
          <h1 className="text-base h-[10%] lg:text-2xl lg:mb-3">
            Opening hours
          </h1>
          <div className=" text-sm h-[80%] lg:text-base ">
            <p>
              Mon - Fri: <br></br>7am - 10am
            </p>
            <p className="pr-1">
              Saturday: <br></br>8am - 10pm
            </p>
            <p>
              Saturday: <br></br>Closed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
