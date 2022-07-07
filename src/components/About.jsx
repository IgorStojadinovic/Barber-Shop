import aboutBg from "../assets/images/about-us.jpg";

const About = () => {
  return (
    <section
      className=" bg-white flex  flex-col  justify-between h-[800px] md:flex-row md:h-[800px] md:items-center lg:bg-[white] lg:h-screen  "
      id="about"
    >
      <picture className="h-[70%]  flex items-start justify-center md:w-[50%] md:h-full 2xl:h-[80%]">
        <img
          src={aboutBg}
          alt="tools"
          className="h-full p-5 md:object-cover md:p-0 lg:w-full 2xl:object-contain"
        />
      </picture>
      <h1 className="absolute  text-5xl text-warning uppercase font-bold h-[550px] w-screen flex items-center justify-center z-10  md:items-start 2xl:text-7xl  ">
        Our Story
      </h1>
      <p className=" flex h-[30%] md:hidden md:w-[50%] bg-[white] items-center visible text-[black] text-center p-5 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odit
        aperiam cupiditate provident itaque placeat possimus dicta quasi at,
        explicabo eaque illo laboriosam perferendis cumque nam reprehenderit
        fugiat harum fuga voluptas doloribus quidem minus porro maiores?
        Officiis ea eveniet eos.
      </p>
      <p className="bg-[white]  hidden  text-[black] text-center p-5 md:w-[50%] md:flex 2xl:p-40">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
        perferendis sint adipisci dolore, consectetur eos voluptatum eveniet
        quidem, voluptas ea cupiditate quos minus eaque illo ipsum deleniti
        nulla ipsam ut sed ratione corrupti delectus? Labore repudiandae
        eligendi praesentium maiores dolore vero eveniet non earum libero.
        Mollitia exercitationem nobis suscipit labore, est numquam quos itaque
        sunt officiis esse laborum culpa dolorum, autem quae et earum corporis
        non blanditiis aspernatur tempore. Vel eaque quam dolores. Saepe animi
        cum itaque placeat aliquid distinctio libero natus totam quidem
        veritatis odit id eum amet et facere, vero optio magni accusamus
        dignissimos, recusandae explicabo reiciendis. Distinctio?
      </p>
    </section>
  );
};

export default About;
