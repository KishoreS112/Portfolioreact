import React from 'react'
import './Footer.css'
import github from './github.png'
import linkedIn from './linkedin.png'
import instgram from './instagram.png'
import Facebook from './facebook.png'

function Footer() {
  return (
    <>
    <section>
    <div className="Footer-container container-fluid bg-info mt-5  p-3">
        <div className="row">
            <div className="col-md-4">
                <h3>About </h3>
               <p className='text-justify mt-3'>As a dedicated software developer based in Coimbatore,
                I am constantly driven by a passion for learning new technologies and enhancing my skills. 
                My journey in the tech world has been marked by a commitment to innovation and continuous improvement. 
               <i>Let's explore, innovate, and create impactful solutions together!</i></p>
               <a href='https://github.com/KishoreS112'><img src={github} ></img></a>
               <a href="https://www.linkedin.com/in/kishore-s-982a59225/"><img src={linkedIn}></img></a>
               <a href="https://www.linkedin.com/in/kishore-s-982a59225/"><img src={instgram} ></img></a>
               <a href="https://www.linkedin.com/in/kishore-s-982a59225/"><img src={Facebook} ></img></a>
               <br/><br/>
            </div>
            <br/>
            <br/>
            <div className="col-md-4 mt-2 ml-3 ">
                <h3 className='mb-3 '> Links </h3>
                <ul>
                    <li>
                    <li><a href='#home' >Home </a></li> 
                      <li><a href='#aboutus'>About us</a></li> 
                       <li><a href='#projects'>Projects</a></li> 
                        <li><a href='#contactus'>Contact us</a></li>
                    </li>
                </ul>
            </div>
            <div className="col-md-3">
              <h3>Address</h3>
              <p style={{fontSize:20}}>No 7 south street Vathalaikadu <br/> Pookkollai (pt), Peravurani(tk),</p>
              <h5>Thanjavur - <i>District- 614804</i> <br/><br/>Tamil Nadu</h5>
              <br/>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4012924.123838464!2d78.28976490000001!3d10.821166349999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1716130638167!5m2!1sen!2sin" 
              width="100%" height="300"  allowfullscreen=""
               loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
            </div>

        </div>
        <br/><br/>
        <div className="row">
          <div className="col-12">
            <p className='text-center footer bg-warning p-3 '><i>@Copyright 2024 All Right Reserved</i></p>
          </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Footer