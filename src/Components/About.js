import React from "react";
import './About.css';
import html from './htmlimage.jpg'
import cssimage from './Cssimage.png'
import Js from './Jsimage.png'
import Bootstrap5 from './bootstrap.png'
import Reactjs from './reactimage.png'
import javaimage from './javaimage.png'
import cimage from './cimage.jpg'
import sql from './sql.jpg'
import soapUI from './soapuitoolimage.png'
import cshrap from './C#image.png'
import dotnet from './dotnetimage.jpg'
import gitimage from './gitimage.jpg'
import L1 from './L1image.jpg'
import L2 from './L2image.jpg'
import L3 from './L3image.jpg'

export default function AboutMe() {
    return (<>

   <section id="aboutus">
        <div className="About-self">
            <h2>About Me</h2>
            <div className="PD">
                <div className="row">
                    <div className="col">
                        <h3 className="text-center">Personal Details</h3>
                    </div>
                    <table className="p-3">
                        <tr>
                            <th class="text-md-center col-md-6 p-3">Name</th>
                            <td class="text-md-center col-md-6 ">Kishore</td>
                        </tr>
                        <tr>
                            <th class="text-md-center col-md-6 p-3">Date of Birth</th>
                            <td class="text-md-center col-md-6 ">11-02-2002</td>
                        </tr>
                        <tr>
                            <th class="text-md-center col-md-6 p-3">Place</th>
                            <td class="text-md-center col-md-6 ">Thanjavur</td>
                        </tr>
                        <tr>
                            <th class="text-md-center col-md-6 p-3">SSLC & HSC</th>
                            <td class="text-md-center col-md-6 ">Muvendar mr.hr.sec.school</td>
                        </tr>
                        <tr>
                            <th class="text-md-center col-md-6 p-3">College</th>
                            <td class="text-md-center col-md-6 ">Karpagam College of engineering Coimbatore</td>
                        </tr>
                        <tr>
                            <th class="text-md-center col-md-6 p-3">Email</th>
                            <td class="text-md-center col-md-6 ">sathiyakishore11@gmail.com</td>
                        </tr>
                    </table>

                </div>
            </div>
        </div>


        {/* <div className="container-fluid education">

            <h1 className="text-info fs-5"><u><b className="bg-black p-3 border border-primary border-3 border-bottom-0 rounded-pill">Education</b></u></h1>

            <div className="edu-content border border-primary border-3 ">
                <div className="row">
                    <div className="col-md-6 fs-md-12">
                        <h3>Karpagam college of engineering</h3>
                        <h3 className="text-info">B.Tech Information Technology</h3>
                        <h4 className="text-success p-3"><b className="text-warning">2019 - 2023 </b>&nbsp; CGPA : 8.57</h4>
                    </div>
                    <div className="col-md-6 fs-md-12">
                        <h3>Muvendar Matriculation Higher Secondary School</h3>
                        <h5 className="text-success p-3"><b className="text-warning">2016 - 2017  </b>&nbsp; SSLC Score : 82.2%</h5>
                        <h5 className="text-success p-3"><b className="text-warning">2018 - 2019  </b>&nbsp; HSC Score : 56%</h5>
                    </div>
                </div>

            </div>

        </div> */}

        <div className="Experience container-fluid mb-4">
            <h2 className="text"><u>Experience</u></h2>
            <p>
                In the dynamic landscape of technology, adaptability is key. As a seasoned Software Engineer at Claysys Technology, I've spent the past year immersed in the intricate world of backend development, specializing in .NET for a critical banking project. During this time, I've honed my skills in crafting robust APIs and ensuring seamless data flow. However, the ever-evolving nature of our industry has sparked a <b className="bg-success text-white">new flame of curiosity within me—I yearn to delve into the realm of frontend development, particularly in React.js.</b>
                My journey in software engineering has been marked by a dedication to excellence. Within Claysys Technology, I've navigated complex backend systems, leveraging the power of .NET to drive efficiency and reliability in our banking project. My experience extends beyond mere code; it encompasses a deep understanding of the intricacies of financial systems and the critical importance of security and scalability in such environments. Through meticulous attention to detail and a passion for innovation, I've contributed to the success of our team and the satisfaction of our clients.
            </p>

        </div>

        <div className="lj container-fluid bg-black">
            <div className="row">
                <div className="col-12">
                    <h3 className="text-danger text-center">Learning Journey</h3>
                </div>
                <div className="col-md-5">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={L1} className="d-block w-100 border border-3 border-primary" style={{ height: '500px' }} alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={L2} className="d-block w-100 border border-3 border-danger" style={{ height: '500px' }} alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={L3} className="d-block w-100 border border-3 border-warning" style={{ height: '500px' }} alt="..." />
                            </div>
                        </div>
                    </div>

                    {/* <img className="ljimage" src={lj} alt="learningjourney" /> */}

                </div>
                <div className="col-md-7">

                    <p className="text-white p-4">
                        My quest to master React.js is not merely a personal aspiration; it's a strategic investment in my professional development. Through a structured learning approach, I intend to immerse myself in React.js tutorials, online courses, and practical projects. Drawing upon my existing knowledge of software architecture and design patterns, I seek to unravel the mysteries of component-based development and state management within the React ecosystem. Moreover, I'm eager to collaborate with peers, participate in hackathons, and contribute to open-source projects to accelerate my learning curve and forge meaningful connections within the React community.
                    </p>
                </div>
            </div>
        </div>


        <div className="Skills container-fluid mt-5">
            <h1 className="text-info fs-5"><u><b className="bg-black p-3 border border-primary border-3 border-bottom-0 rounded-pill">Skills</b></u></h1>
            <div className="border p-4 border-4 border-primary bg-black">
                <div className="row gx-4 gy-4 justify-content-center mb-4">

                    <div className="col-md-5 cards">
                        <h3 className="text-black text-center">Languages</h3>
                        <div className="row gx-4 gy-4">
                            <div className="col-md-6">
                                <img src={cimage} alt="" />
                            </div>
                            <div className="col-md-6">
                                <img src={javaimage} alt="" />
                            </div>
                            <div className="col-md-6">
                                <img src={cshrap} alt="" />
                            </div>
                            <div className="col-md-6">
                                <img src={Js} alt="" />
                            </div>
                        </div>
                    </div>



                    <div className="row ">

                        <div className="col-md-5 cards ">
                            <h3 className="text-black">Frontend</h3>
                            <div className="row gx-4 gy-4">
                                <div className="col-md-6">
                                    <img src={html} alt="" />
                                </div>
                                <div className="col-md-6">
                                    <img src={cssimage} alt="" />
                                </div>
                                <div className="col-md-6">
                                    <img src={Js} alt="" />
                                </div>
                                <div className="col-md-6">
                                    <img src={Reactjs} alt="" />
                                </div>
                            </div>

                        </div>

                        <div className="col">

                        </div>




                        <div className="col-md-5 cards">
                            <h3 className="text-black">Backend</h3>
                            <div className="row gx-4 gy-4">
                                <div className="col-md-6">
                                    <img src={dotnet} alt="" />
                                </div>
                                <div className="col-md-6">
                                    <img src={javaimage} alt="" />
                                </div>
                                <div className="col-md-6">
                                    <img src={sql} alt="" />
                                </div>
                                <div className="col-md-6">
                                    <img src={Js} alt="" />
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            </div>
        </div>
        </section>
    </>)
}

