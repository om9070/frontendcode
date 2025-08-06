import React from 'react'

export default function Footer() {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-column">
                            <h3>Harmonie</h3>
                            <h5 className='dec-foot'>Notre mission est d'apporter paix et sérénité dans votre vie quotidienne grâce à des solutions de
                                bien-être innovantes.</h5>
                            <div className="social-links">
                                <a href="#" className="social-link" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social-link" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="social-link" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="social-link" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#" className="social-link" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>

                        <div className="footer-column">
                            <h3>Navigation</h3>
                            <ul className="footer-links">
                                <li><a href="#">Accueil</a></li>
                                <li><a href="#">Nos services</a></li>
                                <li><a href="#">Méthodologie</a></li>
                                <li><a href="#">Témoignages</a></li>
                                <li><a href="#">Événements</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3>Support</h3>
                            <ul className="footer-links">
                                <li><a href="#">Centre d'aide</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Contactez-nous</a></li>
                                <li><a href="#">Politique de confidentialité</a></li>
                                <li><a href="#">CGU</a></li>
                                <li><a href="#">Accessibilité</a></li>
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
