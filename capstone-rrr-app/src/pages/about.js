import React from "react";
import image1 from "../assets/images/about-pic1.png";
import image2 from "../assets/images/about-pic2.png";
import image3 from "..//assets/images/Groomer-1.png";
import image4 from "../assets/images/Groomer-2.png";
import image5 from "../assets/images/Groomer-3.png";
import image6 from "../assets/images/Groomer-4.png";

const About = () => {
    return (
        <>
            <div className="about-page">
                <div className="about-container">
                    <div className="about-photo-1">
                        <img src={image1} className="abt-img1" alt="Dog Grooming"/>        
                    </div> 
                    <div className="about-story">
                        <div className="about-story-title">
                            <span>Our Story</span>
                        </div>
                        <div className="about-story-text">
                            <span className="first-line">
                            Gu-Pet began as a labor of love. 
                            </span>
                            &nbsp;
                            <span className="second-line">
                            Inspired by our passion for animals and the desire to provide a higher level of care, we embarked on this journey several years ago. Armed with a vision of a safe and welcoming space for pets, we meticulously crafted our grooming center from the ground up. Through dedication, countless hours of training, and a genuine commitment to our furry clients, we transformed our dream into reality. Today, we take pride in being a trusted destination for pet owners seeking top-notch grooming services, all thanks to our humble beginnings and unwavering dedication to our four-legged friends.
                            </span>
                        </div>
                    </div>
                </div> 
                <div className="mission-container">
                    <div className="about-mission">
                        <div className="mission-title">
                            <span>Our Mission</span>
                        </div>
                        <div className="mission-text">
                            <span className="first-line-mission">
                            To enhance the well-being and happiness of every pet we serve.
                            </span>
                            &nbsp;
                            <span className="second-line-mission">
                            Through expert grooming, compassionate care, and a commitment to their comfort, we aim to ensure every furry friend leaves us looking and feeling their best.
                            </span>
                        </div>
                    </div>
                    <div className="mission-photo">
                        <img src={image2} className="abt-img2" alt="dog"/>
                    </div>
                </div>     
                <div className="team-header">
                        <span>Meet Our Team</span>
                </div>
                <div className="team-container">
                    <div className="groomer-profile">
                        <div className="groomer-pic">
                            <img src={image3} style={{width: 500, height: 350}} alt="groomer-1" className="pic"/>
                        </div>
                        <div className="groomer-desc">
                            <div className="groomer-name">
                                Fonz Dun
                            </div>
                            <div className="groomer-text">
                                Your fur baby's comfort and safety are my top priorities. Let's keep those tails fluffy and paws pristine!
                            </div>
                        </div>
                    </div>
                    <div className="groomer-profile">
                        <div className="groomer-pic">
                            <img src={image4} style={{width: 500, height: 350}} alt="groomer-2" className="pic"/>
                        </div>
                        <div className="groomer-desc">
                            <div className="groomer-name">
                                Jessy Kah
                            </div>
                            <div className="groomer-text">
                                Dedicated to keeping tails wagging and cats purring with top-notch grooming services.
                            </div>
                        </div>
                    </div>
                    <div className="groomer-profile">
                        <div className="groomer-pic">
                            <img src={image5} style={{width: 500, height: 350}} alt="groomer-3" className="pic"/>
                        </div>
                        <div className="groomer-desc">
                            <div className="groomer-name">
                                Luna Montenegro
                            </div>
                            <div className="groomer-text">
                                Trained in handling all breeds and sizes, I'm here to make your pets look and feel their best. 
                             </div>
                        </div>
                    </div>
                    <div className="groomer-profile">
                        <div className="groomer-pic">
                            <img src={image6} style={{width: 500, height: 350}} alt="groomer-4" className="pic"/>
                        </div>
                        <div className="groomer-desc">
                            <div className="groomer-name">
                                Roman Carlos
                            </div>
                            <div className="groomer-text">
                                I'm here to provide top-quality grooming services with a gentle touch. Your furry companions are in capable hands! 
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
        </>
    )
}

export default About;