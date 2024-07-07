import buzztalk from "../assets/projects/buzz.png";
import multiStep from "../assets/projects/multiStep.png";
import inks from "../assets/projects/inks.png";
import parsim from "../assets/projects/parsim.png";
import news from "../assets/projects/news.png";
function Projects() {
  return (
    <div className="lg:px-24 sm:px-20 px-7 md:px-14  my-10">
      <div className="font-bold text-2xl sm:text-3xl md:text-4xl mb-10 underline decoration-gray-500 underline-offset-2" id="projects">
        Projects{" "}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 my-10">
        <div className="border rounded-lg shadow-inner  duration-300 pt-1 shadow-white  cursor-pointer   bg-gray-800">
          <img src={buzztalk} className="rounded-sm max-h-2/5 w-full" alt="" />
          <div className="font-bold text-xl text-center my-3">BuZZTalk</div>
          <div>
            <div className="px-4 h-20 text-sm">
              BuZZTalk is a simple chat website which I have created to gain
              exposure about bidirectional communication.
            </div>
          </div>
          <div className="grid grid-cols-3 text-center gap-4 m-3">
            <div className=" bg-gray-500 text-xs sm:text-sm rounded-sm px-3">React.js</div>
            <div className=" bg-gray-500 text-xs sm:text-sm rounded-sm px-3">Node.js</div>
            <div className=" bg-gray-500 text-xs sm:text-sm rounded-sm px-2">MongoDB</div>
            <div className=" bg-gray-500 text-xs sm:text-sm rounded-sm px-2">
              Express.js
            </div>
            <div className=" bg-gray-500 text-xs sm:text-sm rounded-sm px-2">
              Bootstrap
            </div>
            <div className=" bg-gray-500 text-xs sm:text-sm rounded-sm px-2">
              Socket.io
            </div>
          </div>
          <div className="grid grid-cols-2 pt-0 gap-8 p-4 text-center">
            <a
              href="https://buzztalk-buzztalk.netlify.app/"
              target="_blank"
              className="transition ease-in-out delay-150 bg-blue-900 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-800 duration-300 rounded-sm p-2"
            >
              Website
            </a>
            <a
              href="https://github.com/Simran-Sharmaa/Buzz-Talk"
              target="_blank"
              className="transition ease-in-out delay-150 bg-blue-900 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-800 duration-300 rounded-sm p-2"
            >
              Github
            </a>
          </div>
        </div>
        <div className="border rounded-lg shadow-inner  duration-300 pt-2 shadow-white  cursor-pointer   bg-gray-800">
          <img src={inks} className="rounded-sm max-h-2/5 w-full " alt="" />
          <div className="font-bold text-xl text-center my-3">
            Inks & Insights
          </div>
          <div>
            <div className="px-4 h-20 text-sm">
              A simple blog website, validation of forms is handled by using
              react-hook-form and used TinyMCE as a wysiwyg editor.
            </div>
          </div>
          <div className="grid grid-cols-3 text-center gap-4 m-4 ">
            <div className=" bg-gray-500 text-xs sm:text-sm rounded-sm px-3">React.js</div>
            <div className=" bg-gray-500 text-xs sm:text-sm rounded-sm px-3">Node.js</div>
            <div className=" bg-gray-500 text-xs sm:text-sm rounded-sm px-2">Appwrite</div>
            <div className=" bg-gray-500 text-xs sm:text-sm rounded-sm px-2">
              Bootstrap
            </div>
            <div className=" bg-gray-500 text-xs sm:text-sm rounded-sm px-3">Redux</div>
          </div>
          <div className="grid grid-cols-2 pt-0 gap-8 p-4 text-center">
            <a
              href="https://ink-insights.vercel.app"
              target="_blank"
              className="transition ease-in-out delay-150 bg-blue-900 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-800 duration-300 rounded-sm p-2"
            >
              Website
            </a>
            <a
              href="https://github.com/Simran-Sharmaa/Ink-Insights"
              target="_blank"
              className="transition ease-in-out delay-150 bg-blue-900 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-800 duration-300 rounded-sm p-2"
            >
              Github
            </a>
          </div>
        </div>
        <div className="border rounded-lg shadow-inner  duration-300 pt-1 shadow-white  cursor-pointer   bg-gray-800">
          <img src={multiStep} className="rounded-sm max-h-2/5 w-full" alt="" />
          <div className="font-bold text-xl text-center my-3">
            Multi-Step Form
          </div>
          <div>
            <div className="px-4 h-20 text-sm">
              This project has been created in order to learn multi-step form,
              tailwind css and how email confirmation works.
            </div>
          </div>
          <div className="grid grid-cols-3 text-center gap-4 m-4">
            <div className=" bg-gray-500 text-xs sm:text-sm rounded-sm px-3">React.js</div>
            <div className=" bg-gray-500 text-xs sm:text-sm rounded-sm px-3">
              Tailwind{" "}
            </div>
            <div className=" bg-gray-500 text-xs sm:text-sm rounded-sm px-3">Node.js</div>
            <div className=" bg-gray-500 text-xs sm:text-sm rounded-sm px-2">
              Express.js
            </div>
            <div className=" bg-gray-500 text-xs sm:text-sm rounded-sm px-2">MongoDB</div>
            <div className=" bg-gray-500 text-xs sm:text-sm rounded-sm ">
              Nodemailer
            </div>
          </div>
          <div className="grid grid-cols-2 pt-0 gap-8 p-4 text-center">
            <a
              href="https://aeonaxy-fullstack-project.netlify.app/sign-up"
              target="_blank"
              className="transition ease-in-out delay-150 bg-blue-900 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-800 duration-300 rounded-sm p-2"
            >
              Website
            </a>
            <a
              href="https://github.com/Simran-Sharmaa/aeonaxy-fullstack"
              target="_blank"
              className="transition ease-in-out delay-150 bg-blue-900 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-800 duration-300 rounded-sm p-2"
            >
              Github
            </a>
          </div>
        </div>
        <div className="border rounded-lg shadow-inner  duration-300 pt-2 shadow-white  cursor-pointer   bg-gray-800">
          <img src={parsim} className="rounded-sm max-h-2/5 w-full" alt="" />
          <div className="font-bold text-xl text-center my-3">ParSim Point</div>
          <div>
            <div className="px-4 h-20 text-sm">
              A shopping website,add your favorite items to your cart, where you
              can manage quantities and view accurate pricing.
            </div>
          </div>
          <div className="grid grid-cols-3 text-center gap-4 m-4">
            <div className=" bg-gray-500 text-xs sm:text-sm rounded-sm px-3">HTML</div>
            <div className=" bg-gray-500 text-xs sm:text-sm rounded-sm px-3">CSS</div>
            <div className=" bg-gray-500 text-xs sm:text-sm rounded-sm px-2">
              JavaScript
            </div>
            <div className=" bg-gray-500 text-xs sm:text-sm rounded-sm px-3">Node.js</div>
            <div className=" bg-gray-500 text-xs sm:text-sm rounded-sm px-2">Express.js</div>
            <div className=" bg-gray-500 text-xs sm:text-sm rounded-sm px-2">MongoDB</div>
          </div>
          <div className="pt-0 p-4 w-1/2 mx-auto">
            <a
              href="https://github.com/Simran-Sharmaa/Parsim_Point"
              target="_blank"
            >
              <button className="transition ease-in-out delay-150 bg-blue-900 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-800 duration-300 rounded-sm p-2 w-full">
                Github
              </button>
            </a>
          </div>
        </div>
        <div className="border rounded-lg shadow-inner  duration-300 pt-2 shadow-white  cursor-pointer   bg-gray-800">
          <img src={news} className="rounded-sm max-h-2/5 w-full" alt="" />
          <div className="font-bold text-xl text-center my-3">News App</div>
          <div>
            <div className="px-4 h-20 text-sm">
              A news website where you can get the latest news also you can
              filter the news according to your interest.
            </div>
          </div>
          <div className="grid grid-cols-2 text-center gap-4 m-4 ">
            <div className=" bg-gray-500 text-xs sm:text-sm rounded-sm px-3 text-center">React.js</div>
            <div className=" bg-gray-500 text-xs sm:text-sm rounded-sm px-3 text-center">
              Bootstrap
            </div>
            <div className=" bg-gray-500 text-xs sm:text-sm rounded-sm px-3">API</div>
            {/* <div className=" bg-gray-500 text-sm rounded-sm px-3">Node.js</div>
                    <div className=" bg-gray-500 text-sm rounded-sm px-3">Express</div> */}
          </div>
          <div className="pt-0 p-4 w-1/2 mx-auto">
            <a
              href="https://github.com/Simran-Sharmaa/Newsistan/tree/master"
              target="_blank"
            >
              <button className="transition ease-in-out delay-150 bg-blue-900 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-800 duration-300 rounded-sm p-2 w-full">
                Github
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
