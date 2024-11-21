import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <div>
            <>
                <div id="top" /> {/* This element is used for the scroll target */}
                <AliceCarousel autoPlay autoPlayInterval={3000} infinite disableButtonsControls disableSlideInfo className="owl-carousel">
                    <div className="slider1" />
                    <div className="slider2" />
                    <div className="slider3" />
                </AliceCarousel>
                <section id="header">
                    <div className="navbar">
                        {/* Logo on the left */}
                        <div className="logo">
                            <Image src="/logo.png" alt="Logo" width={50} height={50} />
                        </div>
                        {/* Navigation bar in the center */}
                        <nav>
                            <ul>
                                <li>
                                    <a href="#intro">Intro</a>
                                </li>
                                <li>
                                    <a href="#countdown">Countdown</a>
                                </li>
                                <li>
                                    <a href="#note">Note</a>
                                </li>
                                <li>
                                    <a href="#location">Location</a>
                                </li>
                                <li>
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </nav>
                        {/* <i class="fa-solid fa-bars"></i> */}
                        <div className="toggle-switch">
                            <FontAwesomeIcon icon={faMoon} className="fa-solid fa-moon" />
                            <button className="toggle" onclick="toggleBar()">
                                <FontAwesomeIcon icon={faToggleOn} id="toggle" className="fa-solid fa-toggle-on toggleon" />
                            </button>
                            <i className="fa-solid fa-sun" />
                        </div>
                        {/* Call Us button with phone icon on the right */}
                        <a href="#" className="call">
                            <i className="fas fa-phone" />
                            Call Us
                        </a>
                        {/* <button onclick="document.getElementById('themeStyle').setAttribute('href','./assets/css/dark.css')"><i class="fa-solid fa-sun"></i>Click Me</button> */}
                        <div className="bars">
                            <i className="fa-solid fa-bars" />
                        </div>
                    </div>
                    {/* Main content */}
                    <div className="header-content">
                        <p className="imomotimi">Imomotimi Foundation Present</p>
                        <h1>
                            Imomotimi Ijaw <br />
                            Dance Contest 2024
                        </h1>
                        {/* Download button with icon */}
                        <a href="#" className="download-btn">
                            <i className="fas fa-download" /> Download Entry Form
                        </a>
                        {/* Additional text */}
                        <p>
                            All dully filled out forms and the entry fees should be brought along to
                            the audition.
                        </p>
                    </div>
                    <div id="mouseIcon" className="mouse">
                        <a href="#">
                            <i className="fa-solid fa-computer-mouse" />
                        </a>
                    </div>
                    {/* Bottom border image */}
                    <div className="top-white">
                        <Image
                            id="border1"
                            src="/shape-top-white-80.png"
                            alt="Top Border"
                            width={50}
                            height={50}
                        />
                    </div>
                </section>
            </>

        </div>
    )
}

export default Home;
