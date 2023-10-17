import React from "react";
// import HomeCont from "../components/homeContent";
// import Footer from "../components/footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import heroBg from "../assets/images/herobg2.png"
import dogmain from "../assets/images/dogmain.png"




const Home = () => {
  return (
    <>
      
        <Parallax pages={1.5}>

          {/* hero background */}
          <ParallaxLayer offset={0} speed={0.7} factor={1.9} style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            // height: "200vh",
          }}>
          </ParallaxLayer>

          {/* hero dogmain */}
          <ParallaxLayer offset={.5} speed={0.5} factor={1.3}>
            <div className="text-center d-none d-lg-block">
              <img className="img-fluid" alt="pets" src={dogmain} style={{width: "100%"}} />             
            </div>
          </ParallaxLayer>

           {/* hero text */}
           <ParallaxLayer offset={.2} speed={2.5} factor={1}>
          <div className="text-center">
          <h1 className="hero-text display-5"><strong>Gu-Pet</strong></h1>
            <h5 className="hero-text2">P e t &nbsp; g r o o m i n g</h5>
            <h5 className="hero-text2">S e r v i c es</h5>
            <br /><br />
            <h1 className="hero-text2 display-1">Groom with love,</h1>
            <h1 className="hero-text2 display-1">Styled with care</h1>                      
          </div>
          </ParallaxLayer>
          
          {/* hero-btn */}
          <ParallaxLayer offset={.2} speed={-.10} factor={1}>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <div className="text-center">
            <a href="Services">
          <button class="button-53 shadow"><i class="fa-solid fa-scissors"></i> Book now <i class="fa-solid fa-dog fa-bounce"></i></button>
          </a>
          </div>
          </ParallaxLayer>
        </Parallax>               
      
      {/* <Footer /> */}
    </>
  );
};

export default Home;