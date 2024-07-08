import Particle from "./Particle";
import "../index.css";
import Navbar from "./Navbar";
import photo from "../assets/temp.jpg";
import pp from "../assets/output-onlinegiftools.gif";
import Social from "./Social";
import Social2 from "./Social2";

function Home() {
  return (
    <>
    <div className="h-screen">
      <Particle />
      <Navbar />
      <div className="flex mx-auto sm:mt-40 my-20">
        <div className="w-3/5 mx-auto   flex-col  items-center justify-content h-full  lg:px-20 py-10 md:flex-row ">
          <div className="mx-2 font-bold md:text-3xl lg:text-4xl xl:text-5xl">Hi All, I am Simran
            <span className="inline-block animate-wave sm:text-4xl text-2xl md:text-5xl">👋🏻</span>
          </div>
          <div className="md:text-lg lg:text-xl mt-4  mx-2 font-light text-gray-300">
            I am a software developer with a focus on MERN stack development, I&apos;ve honed my skills in building dynamic web applications. From integrating frontend libraries to crafting seamless user experiences.
            <br />
            Currently interning at <span className="text-blue-400">Workabl</span>, I&apos;m eager to expand my exposure into new technologies and frameworks.
          </div>
          <Social2/>

        </div>
        <div className="m-auto hidden sm:block">
          <img src={pp} className= " sm:w-64 md:w-80 rounded-sm m-auto" alt="" />
          {/* <img src={photo} className= " sm:w-40 md:w-52 rounded-sm m-auto" alt="" /> */}
          {/* <img src={photo}  className=" rounded-2xl mx-auto px-2" alt="" /> */}
        </div>
      </div>
      <Social/>
    </div>
    </>

  );
}

export default Home;
