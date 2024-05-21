import React from 'react'
import wrimage from './Wrimage.jpg'
import hbimages from './hotelbookingimage.png'
import adminview from './Adminpage.png';
import bookingform from './Bookingform.png'
import viewroom from './Viewroom.png'
import bookedroom from './bookedroom.png'
import todoimage1 from './Todoimage1.png'
import todoimage2 from './Todoimage2.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './Projects.css'

const Projects = () => {
    return (
        <div id="projects">
            <h1 className='text-center text-info mt-5 fw-bolder mb-5'>Projects</h1>
            <div className="weaterreport container-fluid">
                <div className="row">
                    <div className="col-md-7">
                        <h3 className='p-3'>Weather Forecast</h3>
                        <p className='text-justify mt-md-3 fs-12' id='hbp'>The objective is to create a weather report application fetching data from an API, ensuring accuracy and reliability. It aims to present weather information in a readable format with customizable options. The app prioritizes user experience, offering intuitive interfaces and features like geolocation. Error handling mechanisms are implemented to manage API failures or invalid inputs gracefully. Overall, the goal is to empower users with timely, accurate weather data to facilitate informed decision-making.</p>
                    </div>
                    <div className="col-md-5 ">
                        <a href="https://melodious-malabi-0af02e.netlify.app/"><img src={wrimage} className=' w-100 mt-md-5 mb-md-5 ' style={{ height: '350px' }} alt="" /></a>
                    </div>

                </div>
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <h3 className='mt-5 mb-5 ' > Hotel Room Booking System </h3>
                        <Carousel >
                            <div>
                                <img src={hbimages} />

                            </div>
                            <div>
                                <img src={adminview} />

                            </div>
                            <div>
                                <img src={viewroom} />

                            </div>
                            <div>
                                <img src={bookingform} />

                            </div>
                            <div>
                                <img src={bookedroom} />

                            </div>

                        </Carousel>

                    </div>
                    <div className="col-md-6">
                        <p className='text-justify mt-md-5 fs-12' id='hbp'>The Hotel Room Booking System is an online platform designed to simplify the process of reserving hotel rooms. Users can register, search for available rooms based on preferences, make reservations, and manage bookings. Key features include user authentication, room search functionality, booking management, an admin dashboard, payment integration, reviews and ratings, and responsive design.
                            Technologies used include HTML, CSS, JavaScript, ASP.Net MVC, SQL. Considerations for security, scalability, localization, accessibility, and legal compliance are important. Overall, the system aims to provide a seamless and secure experience for both customers and hotel staff.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">

                    <h3 className='mt-5 mb-4 ' > ToDoList </h3>
                        <p id='hbp'> Todo list application for simple task management. Users can add, edit, and mark tasks as complete. The interface is clean and responsive, with tasks stored locally for persistence. Optional features include task filtering, sorting, dark mode, and keyboard shortcuts. Perfect for practicing HTML, CSS, and JavaScript skills.</p>
                    </div>
                    <div className="col-md-6 mt-5">
                    <Carousel >
                            <div>
                                <img src={todoimage1} />

                            </div>
                            <div>
                                <img src={todoimage2}/>
                            </div>
                  

                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
