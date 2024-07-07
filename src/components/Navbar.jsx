import { useState } from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { GiSettingsKnobs } from "react-icons/gi";
import { HiOutlineHome } from "react-icons/hi2";
import { PiHandbag } from "react-icons/pi";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
    const [bars, setBars] = useState(true); 
    const [nvScroll, setNvScroll] = useState(false);
    const handleClick=()=>{
        setBars(!bars);
        // console.log(bars);
    }
    const handleScroll=()=>{
        if(window.scrollY>10)
            setNvScroll(true);
        else
            setNvScroll(false);
    }

    window.addEventListener("scroll",handleScroll)
  return (
    <>
    {/* <nav className={`z-10 text-white flex md:flex-row flex-col items-center justify-between p-5 fixed w-full  ${(nvScroll||bars)?'transition-all  duration-500 bg-gray-600 bg-opacity-70 -top-52':'transition-all  duration-500 top-0'} `}> */}
    {/* <nav className={`z-10 text-white flex md:flex-row flex-col items-center justify-between p-5 fixed w-full  ${(nvScroll||bars)&&'transition-all  duration-500 bg-gray-600 bg-opacity-70 '} `}> */}
    <nav className={`z-10 text-white flex md:flex-row flex-col items-center justify-between p-5 fixed top-0 w-full bg-gray-600 bg-opacity-70 '} `}>
        <Link to="/" > <div className='font-protest lg:text-2xl font-extrabold'> {'< Simran Sharma />'} </div></Link>

        {/* <div className={`md:block hidden`}> */}
        {/* <div className={`${bars?'block':' md:block hidden'} `}> */}
        <div  className={`md:z-10 -z-10 text-white flex md:flex-row flex-col w-full justify-between items-center  md:right-0  md:w-auto  fixed md:bg-transparent bg-gray-600 bg-opacity-70 m-6 md:top-0 ${(!bars)?'transition-all  duration-700  -top-60 ':'transition-all  duration-500 top-10  '} `}>
            {/* <ul className={`flex flex-col md:flex-row justify-evenly absolute gap-2 transition-all duration-500  hover:top-0 -top-full `} > */}
            {/* <ul className={`flex flex-col md:flex-row justify-evenly absolute gap-2 transition-all duration-500 ${bars ? 'top-16' : '-top-full'}  bg-gray-800 md:bg-transparent w-full`}> */}
            {/* <ul className={`flex flex-col md:flex-row justify-evenly absolute gap-2 transition-all duration-500  ${bars?" top-0":" -top-full"} `} > */}
            {/* <ul className={`flex flex-col md:flex-row justify-evenly absolute gap-2 transition-all duration-500 -top-full`}> */}
            <ul className={`flex flex-col md:flex-row justify-evenly relative gap-2 transition-all duration-500 -top-full group-hover:top-0 `}>
                <a href="/" className="group  transition-all duration-300 ease-in-out " >
                    <li className='flex items-center mx-4 cursor-pointer bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-300 ease-out rounded md:my-0 my-2'>
                    <HiOutlineHome className='mr-2' /> <div className="text-sm lg:text-lg">Home</div>
                    </li>
                </a>
                <a href="/#experience" className="group  transition-all duration-300 ease-in-out " >
                    <li className='flex items-center mx-4 cursor-pointer bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-300 ease-out rounded md:my-0 my-2'>
                    <PiHandbag   className='mr-2' />  <div className="text-sm lg:text-lg">Experience</div>
                    </li>
                </a>
                <a href="#skills" className="group  transition-all duration-300 ease-in-out " >
                    <li className='flex items-center mx-4 cursor-pointer bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-300 ease-out rounded md:my-0 my-2'>
                    <GiSettingsKnobs  className='mr-2' />  <div className="text-sm lg:text-lg">Skills</div>
                    </li>
                </a>
                <a href="#projects" className="group  transition-all duration-300 ease-in-out " >
                    <li className='flex items-center mx-4 cursor-pointer bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-300 ease-out rounded md:my-0 my-2'>
                    <AiOutlineFundProjectionScreen className='mr-2 ' />   <div className="text-sm lg:text-lg">Projects</div>
                    </li>
                </a>
                <Link to="/resume" className="group  transition-all duration-300 ease-in-out " >
                    <li className='flex items-center mx-4 cursor-pointer bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-300 ease-out rounded md:my-0 my-2'>
                        <CgFileDocument className='mr-2' /> <div className="text-sm lg:text-lg">Resume</div>
                    </li>
                </Link>
            </ul>
        </div>
        
        {/* <div className={`${bars?'hidden':'block'}`} onClick={handleClick}><RxHamburgerMenu /></div> */}
        {/* <div className='absolute md:hidden block' onClick={handleClick}>{!bars?<RxHamburgerMenu /> :<RxCross2 />}</div> */}
        
    </nav>    
    <div className='fixed md:hidden block right-6 top-6 z-10 ' onClick={handleClick}>{!bars?<RxHamburgerMenu /> :<RxCross2 />}</div> 
    </>

  )
}

export default Navbar