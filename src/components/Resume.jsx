import { useEffect,useState } from "react";
import  ClimbingBoxLoader  from "react-spinners/ClimbingBoxLoader";
import { AiOutlineDownload } from "react-icons/ai";

import { Document, Page,pdfjs } from "react-pdf";
import pdf from "../assets/Resume-Simran.pdf"
import Particle from "./Particle";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import 'react-pdf/dist/esm/Page/TextLayer.css';
import Navbar from "./Navbar";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
const [isLoading, setIsLoading] = useState(true);
const [width, setWidth] = useState(1200);


useEffect(() => {
  // Simulate loading delay with setTimeout
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  // Clean up timer
  return () => clearTimeout(timer);
}, []);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
    {
        isLoading ?
        <div className="bg-gray-900  h-screen flex justify-center items-center text-2xl">
            <ClimbingBoxLoader color="rgba(206, 213, 224, 1)" size={40} />   
          </div> :
          <div  className=" text-black mt-20">
          <Navbar/>
          <Particle />
          

          <div className="resume mb-6">
            <Document file={pdf} className="flex justify-center">
              <Page  pageNumber={1} scale={width > 786 ? 1 : 0.5} />
            </Document>
          </div>
          <div className="flex justify-center my-4">
            <a href={pdf} target="_blank" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <AiOutlineDownload className="mr-2" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
    }
    </>
  )
  // return (
  //     <div  className=" text-black">
  //       <Navbar/>
  //       <Particle />
  //       <div className="flex justify-center my-4">
  //         <a href={pdf} target="_blank" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded inline-flex items-center">
  //           <AiOutlineDownload className="mr-2" />
  //           <span>Download CV</span>
  //         </a>
  //       </div>

  //       <div className="resume mb-6">
  //         <Document file={pdf} className="flex justify-center">
  //           <Page  pageNumber={1} scale={width > 786 ? 1 : 0.6} />
  //         </Document>
  //       </div>

  //     </div>
      
  // );
}

export default Resume;

// import React from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';

// // Set up pdfjs worker
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// // PDF viewer component
// const PDFViewer = () => (
//   <div>
//     <Document file={pdf}>
//       <Page pageNumber={1} />
//     </Document>
//   </div>
// );

// // App component
// const Resume = () => (
//   <div>
//     <Particle/>
//     <h1 className="text-black bg-inherit">PDF Viewer</h1>
//     <PDFViewer  />
//   </div>
// );

// export default Resume;
