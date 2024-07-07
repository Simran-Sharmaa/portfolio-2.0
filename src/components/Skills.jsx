import nodejs from "../assets/skills/nodejs.png"
import express from "../assets/skills/express.png"
import html from "../assets/skills/html.png"
import css from "../assets/skills/css.png"
import redux from "../assets/skills/redux.png"
import tailwind from "../assets/skills/tailwind.png"
import js from "../assets/skills/js.png"
import bootstrap from "../assets/skills/bootstrap.png"
// import react from "../assets/skills/react.png"
import mongodb from "../assets/skills/mongodb.png"
import github from "../assets/skills/github.png"
import postman from "../assets/skills/postman.png"
import react2 from "../assets/skills/react2.png"
import aws from "../assets/skills/aws.png"
import sequelize from "../assets/skills/sequelize.png"
import mysql from "../assets/skills/mysql.png"

function Skills() {
  return (
    <div className="px-5 sm:px-14 lg:px-24 xl:px-40 my-10">
        <div className="font-bold text-2xl sm:text-3xl md:text-4xl mb-10  underline decoration-gray-500 underline-offset-2" id="skills">Skills </div>
        <div className="text-center my-5 font-bold text-2xl">Frontend</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                {/* <div className="border rounded-lg shadow-md transition ease-in-out delay-150 shadow-white  hover:-translate-y-1 hover:scale-110  duration-300 "> */}
            <div className="border rounded-lg shadow-inner hover:scale-105 duration-300 pt-2 shadow-white group cursor-pointer  h-40 bg-gray-800  ">
                <img src={html} alt="html" className="w-auto h-28 mx-auto" />
                <div className="text-center mt-3 group-hover:text-gray-200  transition-all duration-300 ease-out">HTML</div>
            </div>
            <div className="border rounded-lg shadow-inner hover:scale-105 duration-500 py-2 group shadow-white cursor-pointer  h-40 bg-gray-800">
                <img src={css} alt="css" className="w-auto h-28 mx-auto" />
                <div className="text-center mt-3 group-hover:text-gray-200 ">CSS</div>
            </div>
            <div className="border rounded-lg shadow-inner hover:scale-105 duration-500 py-2 group shadow-white cursor-pointer  h-40 bg-gray-800">
                <img src={js} alt="js" className="w-auto h-28 mx-auto" />
                <div className="text-center mt-3 group-hover:text-gray-200">Javascript</div>
            </div>
            <div className="border rounded-lg shadow-inner hover:scale-105 duration-500 py-2 group shadow-white cursor-pointer  h-40 bg-gray-800">
                <img src={react2} alt="react" className="w-auto h-28 mx-auto" />
                <div className="text-center mt-3 group-hover:text-gray-200">React</div>
            </div>
            <div className="border rounded-lg shadow-inner hover:scale-105 duration-500 py-2 group shadow-white cursor-pointer  h-40 bg-gray-800">
                <img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="redux" className="w-auto h-28 mx-auto" />
                <div className="text-center mt-3 group-hover:text-gray-200">Redux</div>
            </div>
            <div className="border rounded-lg shadow-inner hover:scale-105 duration-500 py-2 group shadow-white cursor-pointer h-40 bg-gray-800  ">
                <img src={tailwind} alt="tailwind" className="w-24 h-28 mx-auto" />
                <div className="text-center mt-3 group-hover:text-gray-200">Tailwind CSS</div>
            </div>
            <div className="border rounded-lg shadow-inner hover:scale-105 duration-500 py-2 group shadow-white cursor-pointer h-40 bg-gray-800">
                <img src={bootstrap} alt="bootstrap" className="w-28 mx-auto" />
                <div className="text-center mt-3 group-hover:text-gray-200">Bootstrap</div>
            </div>
            </div>

            <div className="text-center my-5 font-bold text-2xl">Backend</div>
            <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 gap-8">
                <div className="border rounded-lg shadow-inner hover:scale-105 duration-500 py-2 group shadow-white cursor-pointer  h-40 bg-gray-800">
                    <img src={nodejs} alt="postman" className="w-auto h-28 mx-auto" />
                    <div className="text-center mt-3 group-hover:text-gray-200">NodeJs</div>
                </div>
                <div className="border rounded-lg shadow-inner hover:scale-105 duration-500 py-2 group shadow-white cursor-pointer  h-40 bg-gray-800">
                    <img src={express} alt="tailwind" className="w-28 h-28 mx-auto" />
                    <div className="text-center mt-3 group-hover:text-gray-200">Express</div>
                </div>
                <div className="border rounded-lg shadow-inner hover:scale-105 duration-500 py-2 group shadow-white cursor-pointer  h-40 bg-gray-800">
                    <img src={sequelize} alt="tailwind" className="w-auto h-28 mx-auto" />
                    <div className="text-center mt-3 group-hover:text-gray-200">Sequelize</div>
                </div>
            </div>
            <div className="text-center my-5 font-bold text-2xl">Database</div>
            <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 gap-8">
                <div className="border rounded-lg shadow-inner hover:scale-105 duration-500 py-2 group shadow-white cursor-pointer  h-40 bg-gray-800">
                    <img src={mongodb} alt="tailwind" className="w-auto h-28 mx-auto" />
                    <div className="text-center mt-3 group-hover:text-gray-200">MongoDB</div>
                </div>
                <div className="border rounded-lg shadow-inner hover:scale-105 duration-500 py-2 group shadow-white cursor-pointer  h-40 bg-gray-800">
                    <img src={mysql} alt="tailwind" className="w-28 h-28 mx-auto" />
                    <div className="text-center mt-3 group-hover:text-gray-200">My SQL</div>
                </div>
            </div>
            <div className="text-center my-5 font-bold text-2xl">Tools</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                <div className="border rounded-lg shadow-inner hover:scale-105 duration-500 py-2 group shadow-white cursor-pointer  h-40 bg-gray-800">
                    <img src={github} alt="github" className="w-28 h-28 mx-auto" />
                    <div className="text-center mt-3 group-hover:text-gray-200">Github</div>
                </div>
                <div className="border rounded-lg shadow-inner hover:scale-105 duration-500 py-2 group shadow-white cursor-pointer  h-40 bg-gray-800">
                    <img src={postman} alt="postman" className="w-28 h-28 mx-auto" />
                    <div className="text-center mt-3 group-hover:text-gray-200">Postman</div>
                </div>
                <div className="border rounded-lg shadow-inner hover:scale-105 duration-500 py-2 group shadow-white cursor-pointer  h-40 bg-gray-800">
                    <img src={aws} alt="postman" className="w-auto h-28 mx-auto" />
                    <div className="text-center mt-3 group-hover:text-gray-200">AWS</div>
                </div>

        </div>
        {/* <div className="text-center my-5 font-bold text-2xl">Programming Language</div>
        <div className="grid grid-cols-5 gap-8">
                <div className="border rounded-lg shadow-inner hover:scale-105 duration-500 py-2 group shadow-white cursor-pointer  h-40 bg-gray-800">
                    <img src={mongodb} alt="tailwind" className="w-auto h-28 mx-auto" />
                    <div className="text-center mt-3 group-hover:text-gray-200">MongoDB</div>
                </div>
                <div className="border rounded-lg shadow-inner hover:scale-105 duration-500 py-2 group shadow-white cursor-pointer  h-40 bg-gray-800">
                    <img src={mysql} alt="tailwind" className="w-28 h-28 mx-auto" />
                    <div className="text-center mt-3 group-hover:text-gray-200">My SQL</div>
                </div>
            </div> */}
    </div>
  )
}

export default Skills