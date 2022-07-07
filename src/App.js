import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      {" "}
      <header className="h-[100vh] w-screen flex flex-col bg-[black]">
        <Navbar />
        <Home />
      </header>
      <main>
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
