import { faFacebook, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
    return (
        <div>
            <footer id="footer-section">
                <div className="footer-container">
                    {/* Social Media Section */}
                    <div className="social-media">
                        <h3>We Are Social</h3>
                        <div className="social-icons">
                            <a href="#" className="social-icon facebook">
                                <FontAwesomeIcon icon={faFacebook} className="fa-brands fa-facebook" />
                            </a>
                            <a href="#" className="social-icon x-twitter">
                                <FontAwesomeIcon icon={faXTwitter} className="fa-brands fa-x-twitter" />
                            </a>
                            <a href="#" className="social-icon instagram">
                                <FontAwesomeIcon icon={faInstagram} className="fa-brands fa-instagram" />
                            </a>
                            <a href="#" className="social-icon youtube">
                                <FontAwesomeIcon icon={faYoutube} className="fa-brands fa-youtube" />
                            </a>
                        </div>
                    </div>
                    {/* Horizontal Line */}
                    <hr className="footer-line" />
                    {/* Copyright Section */}
                    <div className="footer-copyright">
                        <p>© 2024 Imomotimi Foundation. All Rights Reserved.</p>
                    </div>
                    {/* Scroll to Top Button */}
                    <a href="#top" className="scroll-to-top">
                        <FontAwesomeIcon icon={faArrowUp} className="fas fa-arrow-up" />
                    </a>
                </div>
            </footer>

        </div>
    )
}

export default Footer