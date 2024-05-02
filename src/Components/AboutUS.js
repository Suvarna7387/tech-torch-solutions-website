  import React from "react";
  import aboutusimg1 from "../images/aboutusimg1.jpg";
  import aboutusimg2 from "../images/aboutusimg2.jpg";
  import aboutusimg3 from "../images/aboutusimg3.jpg";
  import aboutusimg4 from "../images/aboutusimg4.jpg";
  import aboutusimg5 from "../images/aboutusimg5.jpg";
  import aboutusimg6 from "../images/aboutusimg6.jpg";
  import "./AboutUS.css";

  const AboutUS = () => {
    return (
      <div>
        <div className="container">
          <div className="leftContent">
            <div>
              <div className="title">About Us</div>
              <div className="description">
                Welcome to TechTorch Solutions, a trailblazing force in the realm
                of digital innovation. At TechTorch, we don’t just build websites
                and apps; we craft digital experiences that resonate and leave a
                lasting impact.
              </div>
            </div>
          </div>
          <div className="rightContent">
            <img src={aboutusimg1} alt="About Us" className="image" />
          </div>
        </div>
        <div className="resultContainer">
          <div>We cracked result-driven process</div>
        </div>
        <div className="discoverContainer">
          <div className="textContainer">
            <div className="title" style={{color:"black"}}>Discover</div>
            <div className="description" style={{color:"black"}}>
              Embark on your digital journey with TechTorch Solutions, where we
              ignite your project through meticulous discovery. We unravel your
              goals, delve into audience insights, and meticulously define the
              project scope. Our in-depth exploration sets the stage for a
              successful digital transformation, ensuring every step aligns with
              your vision and objectives. Trust us to guide you through this
              pivotal first step, laying the foundation for a seamless and
              impactful digital experience.
            </div>
          </div>
          <img src={aboutusimg2} alt="Discover" className="imageDiscover" />
        </div>
        <div className="discoverContainer">
          <img src={aboutusimg3} alt="Design Brilliance" className="imageBrilliance" />
          <div className="textContainer">
            <div className="title" style={{color:"black"}}>Design Brilliance</div>
            <div className="description" style={{color:"black"}}>
              Crafting extraordinary experiences is our expertise at TechTorch
              Solutions. Through visually stunning and user-centric designs, we
              aim to captivate your audience, setting the stage for impactful
              interactions. Our design philosophy goes beyond aesthetics, focusing
              on creating immersive journeys that resonate with users. Trust us to
              infuse innovation into every pixel, ensuring your brand stands out
              and connects seamlessly with its audience. Elevate your digital
              presence with our unwavering commitment to excellence in design and
              user experience.
            </div>
          </div>
        </div>
        <div className="discoverContainer">
          <div className="textContainer">
            <div className="title" style={{color:"black"}}>Code with Precision</div>
            <div className="description" style={{color:"black"}}>
              Specializing in translating designs into reality, we leverage
              cutting-edge technologies at TechTorch Solutions for flawless,
              high-performance development. Positioned at the forefront of
              innovation, our team breathes life into digital concepts, ensuring
              both functionality and a cutting-edge user experience. The
              development process, marked by precision and excellence, sets a
              standard aligned with the dynamic technology landscape. Partner with
              us to witness your designs transform into powerful solutions,
              leaving a lasting impact in the digital realm.
            </div>
          </div>
          <img src={aboutusimg4} alt="Precision" className="imageDiscover" />
        </div>
        <div className="discoverContainer">
          <img src={aboutusimg5} alt="Rigorously" className="imageBrilliance"/>
          <div className="textContainer">
            <div className="title" style={{color:"black"}}>Test Rigorously</div>
            <div className="description" style={{color:"black"}}>
              Validate perfection through meticulous testing, ensuring flawless
              functionality and security for a robust foundation. Our
              comprehensive testing process identifies and resolves issues,
              guaranteeing a seamless user experience. Prioritizing quality
              assurance, we deliver a final product that meets the highest
              standards, providing users with confidence in performance and
              reliability. Partner with us to ensure your application undergoes
              thorough testing, offering users an exceptional and secure
              experience.
            </div>
          </div>
        </div>
        <div className="discoverContainer">
          <div className="textContainer">
            <div className="title" style={{color:"black"}}>Launch and Evolve</div>
            <div className="description" style={{color:"black"}}>
              Propel your website into the digital space with TechTorch Solutions,
              marking the beginning of a continuous journey of improvement. Guided
              by user feedback, we prioritize evolving your digital presence for
              sustained success and relevance. Our commitment extends beyond the
              launch, as we actively seek insights and enhancements to ensure your
              website stays ahead in the dynamic digital landscape. Partner with
              us to not only launch a successful website but to embark on a
              journey of continual refinement and optimization, meeting the
              ever-changing needs of your audience.
            </div>
          </div>
          <img
            src={aboutusimg6}
            alt="Launch and Evolve"
            className="imageDiscover"
          />
        </div>
      </div>
    );
  };

  export default AboutUS;
