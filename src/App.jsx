import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from './components/FirstPage'
import Blogs from './components/Blogs'
import Data from './components/Data'
import Layout from './components/Layout'

function App() {
  const [inputs, setInputs] = useState(['']);
  const getData = (data)=>{
    setInputs(data);
  }
  return (
    <div className='contain bt-0'>
    <div className="cont h-screen w-full mt-0">
     <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout/>}>
          <Route index element={<FirstPage />} />
          <Route path="blogs" element={<Blogs  onSubmit = {getData}  />} />
          <Route path="data" element={<Data props={inputs}   />} />
          </Route>
      </Routes>
    </BrowserRouter>

    </div>

    


    </div>
  )
}

export default App
