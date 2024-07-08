import  ClimbingBoxLoader  from "react-spinners/ClimbingBoxLoader";
import { useEffect } from "react";

function Loader() {
  useEffect(() => {
    // Prevent scrolling
    document.body.style.overflow = 'hidden';

    // Cleanup to reset overflow when component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-gray-900 flex justify-center items-center text-2xl z-50 h-screen">
        <ClimbingBoxLoader color="rgba(206, 213, 224, 1)" size={40} />   
    </div>
  )
}

export default Loader