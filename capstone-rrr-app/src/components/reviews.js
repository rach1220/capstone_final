import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel';
import "..//assets/css/reviews.css";
import reviewImg from "..//assets/images/reviews-img-1.png";

function Reviews() {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)
    const [ userName, setUserName ] = useState("");
    const [ userComment, setUserComment] = useState("");

    const handleClick = value => {
    setCurrentValue(value)
    }

    const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
    setHoverValue(undefined)
    }

    const data = {
    userName: userName,
    userRatings: hoverValue,
    userComment: userComment
    }
    console.log(data)
   
    const addAppointment = () => {localStorage.setItem('comments', JSON.stringify(data));}

    const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    stars: {
        display: "flex",
        flexDirection: "row",
    }}
    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9"
        
    };

    return (
    <div className="reviews-container">
        <div className="reviews-posted">
            <div className="review-img">
                <img src={reviewImg} 
                style={{height: "250px", width: "400px"}} alt=""/>
            </div>
            <div className="review-display">
                <Carousel>
                    <Carousel.Item>
                        <div className="review-container">
                            <div className="user-ratings">
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                            <div className="user-comment">
                                <span>"Fantastic grooming session! Our pet looks and smells amazing. Thank you for taking such good care of them!"</span>
                            </div>
                            <div className="user-name">
                                <span>Chard Pure</span>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="review-container">
                            <div className="user-ratings">
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                            <div className="user-comment">
                                <span>The attention to detail and care you provided truly shines through. We'll definitely be returning for more grooming sessions!"
                                </span>
                            </div>
                            <div className="user-name">
                                <span>John Dela Cruz</span>
                            </div>
                        </div>      
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="review-container">
                            <div className="user-ratings">
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                            <div className="user-comment">
                                <span>"Terrific dog grooming! Our pup is all smiles and looks adorable. Thanks a bunch!"</span>
                            </div>
                            <div className="user-name">
                                <span>Marie Claire</span>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
        <div className="post-container">
            <div className="post-header">
                <span className="post-header-1">
                    We appreciate your feedback!
                </span>
                <br/>
                <span className="post-header-2">
                    Leave us a review.
                </span>
            </div>
            <div className="feedback-form">
                <form action="#" method="#" id="rates">
                    <input type="text" id="userName" placeholder="Name" onChange={(e) => setUserName(e.target.value)}/>
                    <br />
                    <br />
                    <div className="ratingsContainer">
                        <div style={styles.stars} className="star-ratings">
                            {stars.map((_, index) => {
                            return (
                                <FaStar
                                key={index}
                                id="userRatings"
                                size={24}
                                onClick={() => handleClick(index + 1)}
                                onMouseOver={() => handleMouseOver(index + 1)}
                                onMouseLeave={handleMouseLeave}
                                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                style={{
                                    marginRight: 10,
                                    cursor: "pointer"
                                }}
                                />
                            )
                            })}
                        </div>
                    </div>
                    &nbsp;
                    <input
                        type="text"
                        id="userComment"
                        placeholder="Write your message here"
                        maxLength="150"
                        onChange={(e) => setUserComment(e.target.value)}
                    />
                    <br/>
                    <br/>
                    <div className="post-btn">
                        <input type="submit" onClick={addAppointment} value="Post" id="postBtn"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Reviews;