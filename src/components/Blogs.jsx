import React, { useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link} from 'react-router-dom';
import "./blogs.css"
<link rel="stylesheet" 
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"></link>

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'

const Blogs = (props) => {
  const pdfRef = useRef();
 
  const downloadPDF = () => {
    const input = pdfRef.current;
    console.log(formData);
    
    html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p','mm','a4',true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth , pdfHeight / imgHeight);
        const imgX = (pdfWidth -imgWidth * ratio)/2;
        const imgY = 30;
        pdf.addImage(imgData,'PNG',imgX,imgY,imgWidth * ratio,imgHeight * ratio);
        pdf.save('Resume.pdf');
    });
}
  const [show,setShow] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    Project: '',
    Experience:'',
    phone:'',
    Skills:'',
    Objective:'',
    Education:'',
    Certificates:'',
  });
  

  
  const [submittedData, setSubmittedData] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setShow(false)
    props.onSubmit(submittedData)
  };

  return (
    <div className=" container p-4 flex flex-col m-auto">
      {show && (
      <form onSubmit={handleSubmit} className="space-y-4 lg:w-11/12 lg:m-auto">
        <div className=' lg:flex justify-around '>

        <div className=' w-1/3'>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <br />
        <br />
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <br />
        <br />

        <div>
          <label htmlFor="Phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <br /><br />
        <div>
          <label htmlFor="Address" className="block text-sm font-medium text-gray-700">
          Address
          </label>
          <textarea
            id="Address"
            name="Address"
            value={formData.Address}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <br />

        <div>
          <label htmlFor="Objective" className="block text-sm font-medium text-gray-700">
          Objective
          </label>
          <textarea
            id="Objective"
            name="Objective"
            value={formData.Objective}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        </div>
        <div className=' w-1/3'>
        <div>
          <label htmlFor="Project" className="block text-sm font-medium text-gray-700">
            Project
          </label>
          <textarea
            id="Project"
            name="Project"
            value={formData.Project}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <br />

        <div>
          <label htmlFor="Certificates" className="block text-sm font-medium text-gray-700">
            Certificates
          </label>
          <textarea
            id="Certificates"
            name="Certificates"
            value={formData.Certificates}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <br />


        <div>
          <label htmlFor="Experience" className="block text-sm font-medium text-gray-700">
            Experience
          </label>
          <textarea
            id="Experience"
            name="Experience"
            value={formData.Experience}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <br />

        <div>
          <label htmlFor="Education" className="block text-sm font-medium text-gray-700">
            Education
          </label>
          <textarea
            id="Education"
            name="Education"
            value={formData.Education}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <br />

        <div>
            <label htmlFor="Skills"  className="block text-sm font-medium text-gray-700">
                Skills
            </label>
            <textarea
            id="Skills"
            name="Skills"
            placeholder='separate by ","'
            value={formData.Skills}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        </div>
        </div>

        <div className=' flex justify-center'> 
        {/* <Link to="/data"> */}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Submit
        </button>
        {/* </Link> */}
        </div>
      </form>
      )}

      {submittedData && (
       <div className='flex flex-col justify-center items-center bg-slate-600 opacity-90'>
        <div ref={pdfRef} className="mt-4 border rounded-md text-black bg-white max-w-4xl box grid grid-cols-1 gap-5 text-xl">
        
          <h3 className="capitalize font-extrabold h-10 text-xl p-2 text-center">{submittedData.name} Resume </h3>
          <hr />
          
          <div className=" p-2 space-x-4 -translate-y-6 ">
            <h3 className='capitalize font-extrabold text-xl text-center '>Objective</h3>
          
            <p className='font-semibold text-xl text-center  w-4/5 m-auto'>{submittedData.Objective}</p>
          </div>
          <hr />
          <div className='flex justify-between min-h-30'>
            <div className=' min-w-96'>
              <h3 className=' font-extrabold text-center rounded p-2 bg-red-300'>Contact</h3>
              <div className='text-sm  flex flex-col justify-evenly'>
                <div className='mx-2 flex'>
                   <span className='mt-3 mr-2'> <i class="fa-solid fa-message"></i></span>
                    <p className='font-semibold text-lg'> {submittedData.email} </p>
                </div>
                
                <div className='mx-2 flex'>
                <span className='mt-3 mr-2'> <i class="fa-solid fa-home"></i></span>
                    <p className='w-60 text-left font-semibold text-lg'> {submittedData.Address} </p>
                </div>
  
                <div className='mx-2 flex'>
                <span className='mt-3 mr-2'><i class="fa-solid fa-phone-flip"></i></span>
                    <p className='font-semibold text-lg'> {submittedData.phone} </p>
                </div>
              </div>
            </div>
            <div className=' min-w-96'>
              <h3 className=' text-center font-extrabold rounded p-2 bg-red-300'>Education</h3>
              <p className='w-96 font-semibold text-lg'>{submittedData.Education}</p>
            </div>

          </div>

          <hr/>


          <div className='flex justify-between'>
            <div className=' min-w-96 mr-20'>
              <h3 className=' text-center font-extrabold p-2 rounded bg-red-300'>Skills</h3>
              <div className='text-sm min-h-30'>
                <div className='mx-2 flex'>
                    <p className='w-40 font-semibold text-lg'>{submittedData.Skills}</p>
                </div>
              </div>
            </div>
            <div className='min-w-96 '>
              <h3 className=' text-center rounded font-extrabold p-2 bg-red-300'>Experience</h3>
              <p className='w-96 justify-items-end font-semibold text-lg'>{submittedData.Experience}</p>
            </div>
          </div>
          <hr />

          <div className='flex justify-between'>
          <div className='min-w-96 flex flex-col'>
            <div className =' text-center bg-red-300 rounded font-extrabold p-2'>Projects</div>
            <p className='w-96 min-h-30 text-center font-semibold text-lg'>{submittedData.Project}</p>
          </div>
          <div className='min-w-96 flex flex-col'>
            <div className=' text-center font-extrabold p-2 rounded bg-red-300'>Certificates</div>
            <p className='w-96 min-h-30 text-center font-semibold text-lg'>{submittedData.Certificates}</p>
          </div>
          </div>
          <hr />

        
          </div>

        <button onClick={downloadPDF} className= ' bg-green-600 rounded-xl my-6 h-10 p-4 pb-8 pt-2 font-bold text-xl hover:text-white hover:underline'>Download Resume</button>
        </div>
      )}
 
    </div>
  );
};

export default Blogs;
