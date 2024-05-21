import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';
import contactgif from './contactGif.gif';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_d9lndo8', 'template_ker7bjr', form.current, {
            publicKey: 'rUiP4QK4ZB-MoCT0J',
        })
            .then(
                () => {
                    toast.success('Mail sent successfully!');
                    console.log('SUCCESS!');
                    form.current.reset(); 
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <>
        <section id="contactus">
        <ToastContainer />
            <div className="Contect-container container-fluid ">
                <div className="Contect-container-img">
                    <div className="row">
                        <div className="col-md-5">
                            <img src={contactgif} alt="" className='w-100  mt-3'/>
                        </div>
                        <div className="col-md-7">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="subdiv p-3">
                                    <h3 className='text-center text-black p-2 '>Contact Forms</h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                        <input type="text" name="from_name" placeholder='Name' className='p-3 mt-3 w-100'/>
                                        </div>
                                        <div className="col-md-6">
                                        <input type="email" name="from_email" placeholder='Email' className='p-3 mt-3 w-100'/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                        <textarea name="message" placeholder='Comment' className='p-3 w-100 '/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                        <input type="submit" value="Send" className='p-3 w-50 ' />
                                        </div>
                                    </div>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>


            </div>

            </section>
        </>
    )
}
