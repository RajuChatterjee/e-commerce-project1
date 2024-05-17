import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { Link } from 'react-router-dom';
function About() {
    const context = useContext(myContext);
  const { mode } = context;
    return (
        <div>
            <section className=''>
            <Link to={'/'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>
     
<h1 className=' text-center  text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>
                      E-COMMERCE</h1>
                      </Link>
                        
        <div>
            <br></br>
         <center>
          <img src="https://www.appslure.com/wp-content/uploads/2021/11/Top-5-Trends-That-Will-Shape-The-Grocery-Industry-In-2021.webp" alt="Image not loaded" />
         </center>
         </div>


         
                      
                         <p style={{ color: mode === 'dark' ? 'white' : '' }} 
                                className=" w-full px-10">
                                  <h1><strong>About Us</strong></h1><br></br>
                                  Welcome to ECommerce.com, <br></br> your premier destination for all your online shopping needs.<br></br> At ECommerce.com, we are dedicated to providing you with a seamless and enjoyable shopping experience, right from the comfort of your own home.<br></br>

                                Our Story:<br></br>
                                ECommerce.com was founded with a vision to revolutionize the way people shop online. We understand the challenges and frustrations that often come with online shopping, which is why we set out to create a platform that is user-friendly, reliable, and tailored to meet the diverse needs of our customers.<br></br>
                                
                                What We Offer:<br></br>
                                At ECommerce.com, we offer a vast selection of products across numerous categories, including electronics, fashion, home goods, beauty products, and much more. Whether you're looking for the latest gadgets, trendy fashion pieces, or everyday essentials, you'll find it all right here.<br></br>
                                
                                Why Choose Us:<br></br>
                                With so many online retailers out there, you may be wondering what sets us apart. Here are just a few reasons why ECommerce.com is the ultimate destination for all your shopping needs:<br></br>
                                <br></br>
                                1. Unrivaled Selection: We pride ourselves on offering a wide range of products to suit every taste and budget. From top brands to up-and-coming designers, we've got something for everyone.<br></br>
                                <br></br>
                                2. Exceptional Customer Service: Our dedicated customer service team is here to assist you every step of the way. Whether you have a question about a product, need help with an order, or simply want to provide feedback, we're always here to help.<br></br>
                                <br></br>
                                3. Secure Shopping Experience: We take your online security seriously, which is why we utilize the latest encryption technology to ensure that your personal and financial information is always protected.<br></br>
                                <br></br>
                                4. Fast and Reliable Shipping: We know that you want your purchases as quickly as possible, which is why we offer fast and reliable shipping options to get your order to you in no time.<br></br>
                                <br></br>
                                5. Hassle-Free Returns: We want you to be completely satisfied with your purchase, which is why we offer a hassle-free returns policy. If you're not happy with your order for any reason, simply return it within our specified timeframe for a full refund or exchange.<br></br>
                                <br></br>
                                Thank you for choosing ECommerce.com for all your online shopping needs. We look forward to serving you and exceeding your expectations every step of the way. Happy shopping!.</p>

                                
                <div className=" container mx-auto px-5 py-10">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>
                        Develeoper</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>
                        <span className=' text-pink-500'>Details</span></h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" 
                                src="https://webknudocs.vercel.app/logo/react.png" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} 
                                className="leading-relaxed">Working on Font end And Back End Development.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} 
                                className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                                    RAJU CHATTERJEE</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} 
                                className="text-gray-500">Font end and back end Developer</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" 
                                src="https://webknudocs.vercel.app/logo/react.png" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}
                                className="leading-relaxed">Working on Font end Development</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} 
                                className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                                    PALLAB DUTTA</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} 
                                className="text-gray-500">Font end Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" 
                                src="https://webknudocs.vercel.app/logo/react.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} 
                                className="leading-relaxed">Working on Font end Development.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} 
                                className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                                    RAVI KUMAR PANDEY</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}
                                className="text-gray-500">Font end Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" 
                                src="https://webknudocs.vercel.app/logo/react.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} 
                                className="leading-relaxed">Working on Font end Development.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} 
                                className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                                   TAHMID HASSAN</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}
                                className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" 
                                src="https://webknudocs.vercel.app/logo/react.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} 
                                className="leading-relaxed">Working on Font end Development.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} 
                                className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                                   SOMOSHIS CHATTERJEE</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}
                                className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className=" w-full px-10">
            <br></br>
<Link to={'/'} className="text-blue-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>
    Back to Home</Link><br></br><br></br><br></br>
    </div>
            
        </div>
    )
}

export default About