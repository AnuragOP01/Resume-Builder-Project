import { Outlet, Link } from "react-router-dom";
import mango from './Assets/mango.png'
import React from 'react'

const Layout = () => {
  return (
    <>
      <nav className="w-full">
        <ul className=" shadow-md p-4 flex justify-between mt-4 font-bold">
          
          <li>
          <div className=' flex justify-between items-center'>
          <img src={mango} alt="img" />
          
          </div>
          </li>
          <li className=" mt-8">
            <Link to="/">
            <button class=" px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
           Go Home</button></Link>
          </li>
          <li>
          <img className=' h-20 mr-16' src="https://gohackathon.in/img/main_logo.png" alt="fds" />
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;