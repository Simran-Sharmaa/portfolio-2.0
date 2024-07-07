import { useEffect,useState } from "react";
import Home from '../components/Home'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import  ClimbingBoxLoader  from "react-spinners/ClimbingBoxLoader";

function Parent() {
    const [isLoading, setIsLoading] = useState(true);

    
    useEffect(() => {
      // Simulate loading delay with setTimeout
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
  
      // Clean up timer
      return () => clearTimeout(timer);
    }, []);
  
  return (
    <>
    {
        isLoading ?
        <div className="bg-gray-900  h-screen flex justify-center items-center text-2xl">
            <ClimbingBoxLoader color="rgba(206, 213, 224, 1)" size={40} />   
          </div> :
    (<div className="font-noto">
        <Home/>
        <Education/>
        <Skills/>
        <Projects/>
    </div>)
    }
    </>
  )
}

export default Parent