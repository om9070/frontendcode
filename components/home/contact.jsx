'use client'
import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2';


export default function Contact() {

    const [text, settext] = useState({ Name: "", Email: "", Message: "" })
    const [loader, setloder] = useState(false)

    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);


    const validateForm = ({ Name, Email, Message }) => {

        console.log(Message,"message",Message.length)
        if (!Name || !Email || !Message) {
            return "All fields are required";
        }

        if (Name.length < 3 || Name.length > 20) {
            return "Name must be between 3 and 20 characters";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(Email)) {
            return "Invalid email format";
        }

        if (Message.length < 10 || Message.length > 50) {
            return "Message must be between 10 and 50 characters";
        }

        return ""; // no errors
    };

    const handleSubmit = async () => {
        try {
            setloder(true)
            console.log(text,"message function call")
            const validationError = validateForm(text);
            console.log(validateForm,"validition form in thi sevtion.")
            if (validationError) {
                setloder(false)
                Swal.fire({
                    title: 'Error',
                    text: validationError,
                    icon: 'error'
                });
                return;
            }

            const { Name, Email, Message } = text;
            const response = await fetch('/api/sheets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Name, Email, Message }),
            });

            const result = await response.json();
            Swal.fire({
                title: 'Thanks!',
                text: result.message,
                icon: 'success'
            });
            settext({Name:"",Email:"",Message:""})
            setloder(false)
        } catch (e) {
            Swal.fire({
                title: 'Error',
                text: e.slice(0,20),
                icon: 'error'
            }); setloder(false)
        }
    }

    return (
        <>
            <section className="contact_us">
                <div className="container_sec">
                    <div className="row" ref={sectionRef}>
                        <div className="col-md-10 offset-md-1">
                            <div className="contact_inner">
                                <div className={`row animateOnScrollRight ${visible ? "visible" : ""}`}>
                                    <div className="col-md-10">
                                        <div className="contact_form_inner">
                                            <div className="contact_field">
                                                <h5 className=' my-3 card-tittle'>Contatc Us</h5>
                                                <p className='color font'>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                                                <input type="text" onChange={(e) => settext({ ...text, Name: e.target.value })} value={text.Name} className="form-control form-group" placeholder="Name" />
                                                <input type="email" onChange={(e) => settext({ ...text, Email: e.target.value })} value={text.Email} className="form-control form-group" placeholder="Email" />
                                                <textarea onChange={(e) => settext({ ...text, Message: e.target.value })} value={text.Message} className="form-control form-group" placeholder="Message"></textarea>
                                                {!loader ? <button className="contact_form_submit" onClick={handleSubmit}>Send</button> :
                                                    <div className="spinner-border text-primary mt-3" role="status"></div>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="right_conatct_social_icon d-flex align-items-end">
                                            <div className="socil_item_inner d-flex">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`contact_info_sec animateOnScrollLeft ${visible ? "visible" : ""}`}>
                                    <h4 className='font'>Contact Info</h4>
                                    <div className="d-flex info_single align-items-center">
                                        <i className="fas fa-headset"></i>
                                        <span className='font'>+91 7079679070</span>
                                    </div>
                                    <div className="d-flex info_single align-items-center">
                                        <i className="fas fa-envelope-open-text"></i>
                                        <span className='font'>info@flightmantra.com</span>
                                    </div>
                                    <div className="d-flex info_single align-items-center">
                                        <i className="fas fa-map-marked-alt"></i>
                                        <span className='font'>1000+ Travel partners and 65+ Service city across India, USA, Canada & UAE</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
