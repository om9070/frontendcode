import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-column">
                            <h3 className='font'>vanapex</h3>
                            <h5 className='dec-foot'>We are a passionate team of innovators, developers, and problem-solvers dedicated to turning ideas into powerful digital solutions. From cutting-edge software development to seamless IT services, we help businesses grow, adapt, and thrive in the digital era. Our mission is simple: deliver technology that works, inspires, and drives success.</h5>
                            <div className="social-links">
                                <Link href="#" className="social-link" aria-label="Facebook"><i className="fab fa-facebook-f"></i></Link>
                                <Link href="#" className="social-link" aria-label="Twitter"><i className="fab fa-twitter"></i></Link>
                                <Link href="#" className="social-link" aria-label="Instagram"><i className="fab fa-instagram"></i></Link>
                                <Link href="#" className="social-link" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></Link>
                                <Link href="#" className="social-link" aria-label="YouTube"><i className="fab fa-youtube"></i></Link>
                            </div>
                        </div>

                        <div className="footer-column">
                            <h3 className='font'>Service</h3>
                            <ul className="footer-links">
                                <li><Link href="/website">Website Develpment</Link></li>
                                <li><Link href="/application">Application Develpment</Link></li>
                                <li><Link href="/seo">SEO Develpment</Link></li>
                                <li><Link href="/loadmanagement">Load Management</Link></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3 className='font'>Digital Marketing</h3>
                            <ul className="footer-links">
                                <li><Link href="/leadgenerater">Lead Generater</Link></li>
                                <li><Link href="/ads">FaceBook/Instagram/Google ADS</Link></li>
                                <li><Link href="/aiservice">Artificial Intelligence(AI)</Link></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3>Contact</h3>

                            <div className="contact-info">
                                <div className="contact-item">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>123 Rue du Bien-être<br />75000 Paris, France</span>
                                </div>

                                <div className="contact-item">
                                    <i className="fas fa-phone-alt"></i>
                                    <span>+33 1 23 45 67 89<br />Lun-Ven, 9h-18h</span>
                                </div>

                                <div className="contact-item">
                                    <i className="fas fa-envelope"></i>
                                    <span>contact@harmonie.com<br />support@harmonie.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="back-to-top" id="backToTop" aria-label="Retour en haut">
                <i className="fas fa-arrow-up"></i>
            </div>
        </>

    )
}
