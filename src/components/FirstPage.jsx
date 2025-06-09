import React from 'react'
import { Outlet, Link } from "react-router-dom";
const FirstPage = () => {
    return (
    <div className=' w-full min-h-screen p-4'>
      <div className='w-full lg:w-11/12 lg:m-auto rounded-3xl p-2 bg-fuchsia-700 flex justify-between my-5'>
        <div className="content p-4">
          <h1 className='text-center font-extrabold text-xl  text-white'>Try Our New Cover Letter Tool!</h1>
          <br />
          <h2 className='text-center text-sm text-white'>Let our cover letter generator write a streamlined, personalized, professional, stylish cover letter in seconds.</h2>
          <br />
          <div className="flex justify-center p-4">
          <Link to="/blogs" className='m-auto'><button class="px-4 py-2 bg-orange-800 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                  Create Your Resume</button></Link>
          </div>
          
        </div>

        <div className=" hidden md:inline-block">
          <img className='w-52' src="https://app.resumebuilder.com/assets/images/callout_banner_icon.png" alt="img" />
        </div>
      </div>
      <br /><br />
      <div className='w-full lg:w-11/12 lg:m-auto rounded-3xl flex flex-col p-2 min-h-80 border-black border'> 
          <div className='flex  border-b-4 border-black'>
            <h2 className=' ml-10 font-semibold text-xl text-blue-600 min-h-10 '>Resumes</h2>
          </div>
          <div className='flex p-8 flex-1 flex-col'>
            <div className=' border-blue-800 flex-1 border-2 rounded-md h-full flex w-1/2 md:w-1/3 justify-center items-center'>
            <Link to="/blogs" className='m-auto'><span>
                + Create New Resume
              </span>
            </Link>
            </div>
          </div>
      
      </div>

    
    </div>
    )
  };
  
  export default FirstPage

  