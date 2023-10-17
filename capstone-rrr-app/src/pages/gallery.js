import React from "react";
import Reviews from "../components/reviews";
import galImg1 from "..//assets/images/gallery-bg-1.png";

const Gallery = () => {

    return (
        <>      
            <section className="galleryPage">
                <div className="gal-bg-1" style={{backgroundImage:`url(${galImg1})`, backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"contain"}}>
                    <span>
                        Gallery
                    </span>    
                </div>
                <div className="gallery-photos">
                    <div className="gallery-header">
                        <span>
                            Our Happy Customers
                        </span>
                    </div>
                    <div className="gallery-grid" style={{padding: "50px"}}>
                    <div class="row">
                        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 img-hover">
                            <img
                            src="https://blog.groomit.me/wp-content/uploads/2019/01/cat.png"
                            className="w-100 shadow-1-strong rounded mb-4 gallery-img bounce"
                            alt="Ragdoll"
                            />

                            <img
                            src="https://img.freepik.com/premium-photo/closeup-vertical-shot-happy-curly-labradoodle-dog-female-groomer-washing-head-with-shampoo-bathtub-grooming-salon_482921-7779.jpg"
                            className="w-100 shadow-1-strong rounded mb-4 gallery-img bounce"
                            alt="Labradoodle taking a bath"
                            />
                        </div>

                        <div className="col-lg-4 mb-4 mb-lg-0 img-hover">
                            <img
                            src="https://images.pexels.com/photos/6130991/pexels-photo-6130991.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-6130991.jpg&fm=jpg"
                            className="w-100 shadow-1-strong rounded mb-4 gallery-img bounce"
                            alt="Dog being groomed"
                            />

                            <img
                            src="https://media.istockphoto.com/id/1209476317/photo/the-cat-is-combed-and-sheared-in-the-hairdresser-for-animals-pet-grooming.jpg?s=612x612&w=0&k=20&c=gyaaaJEB_JizRbAYef8e6w69vMtdLtez03PChRk_X8Q="
                            className="w-100 shadow-1-strong rounded mb-4 gallery-img bounce"
                            alt="British Shorthair"
                            />
                        </div>

                        <div className="col-lg-4 mb-4 mb-lg-0 img-hover">
                            <img
                            src="https://cdn.jwplayer.com/v2/media/vwcjlWGg/poster.jpg?width=720"
                            className="w-100 shadow-1-strong rounded mb-4 gallery-img bounce"
                            alt="Golden retriever taking a bath"
                            />

                            <img
                            src="https://thumbs.dreamstime.com/b/woman-groomer-combing-fur-black-labrador-retriever-dog-woman-groomer-combing-fur-black-labrador-retriever-dog-grooming-dog-131612099.jpg"
                            className="w-100 shadow-1-strong rounded mb-4 gallery-img bounce"
                            alt="Labrador nail trimming"
                            />
                        </div>
                        </div>                
                    </div>
                </div>
                <div className="feedback-section">
                    <div className="feedback-header">
                        <span>
                            What do our clients say?
                        </span>
                    </div>
                    <Reviews/>
                </div>
            </section>
        </>
    )
}

export default Gallery;