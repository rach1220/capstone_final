import React from "react";
import ContactSection from "../components/contactus";
import GroomingForm from "../components/package";
import svcsImg1 from "..//assets/images/svcs-img-1.png";
import svcsImg2 from "..//assets/images/svcs-img-2.png";
import icon1 from "../assets/images/svcs-icon-1.png";
import icon2 from "..//assets/images/svcs-icon-2.png";
import icon3 from "..//assets/images/svcs-icon-3.png";
import icon4 from "..//assets/images/svcs-icon-4.png";
import BookAppointment from "../components/booking";

const Services = () => {
    return (
        <>
            <section className="services-page">
                <div className="services-container">
                    <div className="svcs-header">
                    <span>Our Services</span>
                    </div>
                    <div className="svcs-border">
                        <img src={svcsImg2} style={{height: "20px"}} alt=""/>
                    </div>
                    <div className="svcs-hero">
                        <div className="svcs-p1">
                            <div className="full-groom">
                                <div className="svcs-title-left">
                                    <span>Full Grooming</span>
                                    &nbsp;
                                    <span className="svcs-icon"><img src={icon1} style={{height: "50px", width: "50px"}}alt=""/></span>
                                </div>
                                <div className="svcs-text-left">
                                    <span>Your pet is in good hands with us! Let your favorite get the best care in our center.</span>
                                </div>
                            </div>
                            <div className="bath-dry">
                                <div className="svcs-title-left">
                                    <span>Bath & Dry</span>
                                    &nbsp;
                                    <span className="svcs-icon"><img src={icon2} style={{height: "50px", width: "50px"}}alt=""/></span>
                                </div>
                                <div className="svcs-text-left">
                                    <span>Your pet is in good hands with us! Let your favorite get the best care in our center.</span>
                                </div>
                            </div>
                        </div>
                        <div className="dog-img">
                            <span>
                                <img src={svcsImg1} style={{height: "600px", width: "350px"}} className="hero-pic" alt="" />
                            </span>
                        </div>
                         <div className="svcs-p2">
                            <div className="styling">
                                <div className="svcs-title-right">
                                        <span className="svcs-icon"><img src={icon3} style={{height: "50px", width: "50px"}}alt=""/></span>
                                        &nbsp;
                                        <span>Styling</span>
                                    </div>
                                    <div className="svcs-text-right">
                                        <span>Our team of pet hair stylists is happy to make your animal look pretty and happy.</span>
                                    </div>
                            </div>
                            <div className="med-bath">
                                <div className="svcs-title-right">
                                    <span className="svcs-icon"><img src={icon4} style={{height: "50px", width: "50px"}}alt=""/></span>
                                    &nbsp;
                                    <span>Medical Bath</span>
                                </div>
                                <div className="svcs-text-right">
                                    <span>Bathing in our vet bath, using an appropriate shampoo that is kind to the pet's skin.</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                <div className="packages">
                    <div className="rates">
                        <GroomingForm/>
                    </div>
                    <div className="appointment">
                        <BookAppointment/>
                    </div>
                </div>
                <div className="contact-us">
                    <ContactSection/>
                </div>
            </section>
        </>
    )
}

export default Services;