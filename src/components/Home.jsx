import Particle from "./Particle";
import "../index.css";
import Navbar from "./Navbar";
import photo from "../assets/temp.jpg";
import pp from "../assets/output-onlinegiftools.gif";
// import photo from "../assets/pp1.png";
import Social from "./Social";
import Social2 from "./Social2";

function Home() {
  return (
    <>
    <div className="h-screen">
      <Particle />
      <Navbar />
      <div className="flex mx-auto sm:mt-40 my-20">
        {/* <div className="px-16 py-8 "> */}
        {/* <div className="w-3/5 mx-auto lg:ml-auto ml-16  flex-col  items-center justify-content h-full  lg:px-20 py-10 md:flex-row "> */}
        <div className="w-3/5 mx-auto   flex-col  items-center justify-content h-full  lg:px-20 py-10 md:flex-row ">
          <div className="mx-2 font-bold md:text-3xl lg:text-4xl xl:text-5xl">Hi All, I am Simran
            <span className="inline-block animate-wave sm:text-4xl text-2xl md:text-5xl">👋🏻</span>
          </div>
          <div className="md:text-lg lg:text-xl mt-4  mx-2 font-light text-gray-300">
            I am a software developer with a focus on MERN stack development, I&apos;ve honed my skills in building dynamic web applications. From integrating frontend libraries to crafting seamless user experiences.
            <br />
            Currently interning at <span className="text-blue-400">Workabl</span>, I&apos;m eager to expand my exposure into new technologies and frameworks.
          </div>
          {/* <div className="md:text-lg lg:text-xl mt-4 mx-2 font-light text-gray-300">
              <a href="https://www.linkedin.com/in/simran-sharma-339244248/" target="_blank" rel="noreferrer" className="white w-full"> 
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                </svg>
              </a>
            <a href="https://github.com/Simran-Sharmaa" target="_blank" rel="noreferrer" className="flex justify-between items-center text-white w-full"
        >
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="30" width="30" xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
          </svg>
        </a>
          </div> */}
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
    {/* <Education/>
      <Skills/>
      <Projects/> */}
    </>

  );
}

export default Home;
