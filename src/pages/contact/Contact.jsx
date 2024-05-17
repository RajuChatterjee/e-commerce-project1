import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { Link } from 'react-router-dom';

function Contact() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div>
      <div className=" w-full px-10">

      <Link to={'/'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>
     
     <h1 className=' text-center  text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>
                           E-COMMERCE</h1>
                           </Link>
                           <br></br>
                           <h1 className='   font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>
                           Contact Us</h1>
     
     <br></br>
     <div>
            <center>
                    <img src="https://www.appslure.com/wp-content/uploads/2021/11/Top-5-Trends-That-Will-Shape-The-Grocery-Industry-In-2021.webp" alt="Image not loaded" />
             </center>
             </div>

       
   
    
    <div className="bg-gray-200" style={{ backgroundColor: mode === 'dark' ? 'rgb(55 57 61)' : '', color: mode === 'dark' ? 'white' : '', }}>
         
         <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
           
             <div className="flex ">
               <Link to={'/'} className="text-blue-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>
      Back to Home</Link>
               <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' 
               style={{ color: mode === 'dark' ? 'white' : '', }}>rajuchatterjeeofficial@gmail.com</h1>
             </div>
          
           
        
           

           <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
             <a  href="https://www.facebook.com" rel="noopener noreferrer" className="text-gray-500" target="_blank" >
               <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
               </svg>
             </a>
             <a href="https://www.twitter.com" rel="noopener noreferrer" className="ml-3 text-gray-500" target="_blank">
               <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                 <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
               </svg>
             </a>
             <a href="https://www.instagram.com" rel="noopener noreferrer" className="ml-3 text-gray-500" target="_blank">
               <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                 <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                 <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
               </svg>
             </a>
             <a href="https://www.linkedin.com" rel="noopener noreferrer" className="ml-3 text-gray-500" target="_blank">
               <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                 <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                 <circle cx={4} cy={4} r={2} stroke="none" />
               </svg>
             </a>
           </span>
         </div>
       </div>
       <br></br>
    
      
      </div> 


    </div>
   
  )
}

export default Contact