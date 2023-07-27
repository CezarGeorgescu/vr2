import React, { useState, Fragment, useRef } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../component/Other/Footer";
import Navbar from "../../component/Other/Navbar";
import SecChoose from "../../component/Page/SecChoose";
import SecService from "../../component/Page/SecService";
import SecSubscribe from "../../component/Page/SecSubscribe";
import SecTestimonial from "../../component/Page/SecTestimonial";
import SliderArticle from "../../component/Slider/SliderArticle";

const Index = (props) => {

  const [accordion, setAccordion] = useState(-1)

  const accordionFunc = (e) => {
    if (e == accordion) {
      setAccordion(-1);
    } else {
      setAccordion(e);
    }
  }

  const dataAccordiom = [
    {
      title: "Passionate and Experienced Team",
      desc: "We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences."
    },
    {
      title: "Customized Solutions",
      desc: "We understand that every client has unique needs and goals, which is why we offer customized VR solutions that are tailored to meet your specific requirements. From initial consultation to final delivery, we work closely with you to ensure that your VR experience is everything you envisioned."
    },
    {
      title: "Exceptional Customer Service",
      desc: "Our goal is to provide exceptional customer service from start to finish. We are committed to ensuring that you are completely satisfied with every aspect of your VR experience, and our team is always available to answer any questions and address any concerns you may have."
    },
  ]

  const video = useRef(null);

  const article = [
    {
      img: "./../images/14.png",
      title: "The Future of Education: How VR is Revolutionizing the Classroom",
      tag: "VR Education",
      linjk: "#!"
    },
    {
      img: "./../images/1.png",
      title: "Bringing Designs to Life: How VR is Changing Architecture",
      tag: "VR Architecture",
      linjk: "#!"
    },
    {
      img: "./../images/5.png",
      title: "Making Events Memorable: The Power of VR for Corporate and Special Occasions",
      tag: "VR Entertainment ",
      linjk: "#!"
    },
    {
      img: "./../images/4.png",
      title: "Exploring New Worlds: The Benefits of VR Travel",
      tag: "VR Event",
      linjk: "#!"
    },
    {
      img: "./../images/14.png",
      title: "The Future of Education: How VR is Revolutionizing the Classroom",
      tag: "VR Education",
      linjk: "#!"
    },
    {
      img: "./../images/1.png",
      title: "Bringing Designs to Life: How VR is Changing Architecture",
      tag: "VR Architecture",
      linjk: "#!"
    },
    {
      img: "./../images/5.png",
      title: "Making Events Memorable: The Power of VR for Corporate and Special Occasions",
      tag: "VR Entertainment ",
      linjk: "#!"
    },
    {
      img: "./../images/4.png",
      title: "Exploring New Worlds: The Benefits of VR Travel",
      tag: "VR Event",
      linjk: "#!"
    },
  ]
  return (
    <Fragment>
      <div className="overflow-hidden position-relative">
        <img src="./../images/sdsad.png" className="images__head-top" alt="" />
        <Navbar />

        <section className="position-relative">
          <img src="./../images/Frame 5.png" className="images__bg-flor" alt="" />
          <div className="container position-relative z-2">
            <div className="row">
              <div className="col-lg-6">
                <h1 className="semi-bold font__size--64 text__65-1024 text__65-sm color__white">Immerse Yourself in Virtual Reality</h1>
                <p className="light font__size--16 text__16-1024 color__gray-1 lh-2 mb-4">Experience Unforgettable Events in VR. Bring your events to <br className="d-none d-sm-block" /> life like never before with our VR services</p>
                <NavLink
                  to="/service" className="bold font__size--14 text__14-1024 btn__action-more color__white ls__1 text-uppercase">discover more</NavLink>

                <div className="mt-4 mb-5 mb-lg-0">
                  <div className="d-flex flex-wrap flex-sm-nowrap align-items-center">
                    <div className="wrapper__list-people mb-5 mb-sm-0">
                      <div className="d-flex align-items-center user">
                        <img src="./../images/rm (1).png" alt="" />
                        <img src="./../images/rm (2).png" alt="" />
                        <img src="./../images/rm (3).png" alt="" />
                      </div>
                      <div className="light font__size--16 text__16-1024 ml-3"><span className="bold position-relative"><span className="position-relative z-2">32k+</span>
                        <img src="./../images/Clip path group (1).png" className="images__line-head" alt="" />
                      </span> Happy Client</div>
                    </div>

                    <div className="ml-sm-4">
                      <div className="wrapper__video-head position-relative">
                        <img src="./../images/_Play button.png" className="play" alt="" />
                        <img src="./../images/Group 15.png" className="wrap" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 position__initial-md">
                <div className="wrapper__grup-image-head">
                  <div className="position-relative">
                    <img src="./../images/Ellipse 33.png" className="images__bg-wrap" alt="" />
                    <img src="./../images/Group_clipdrop-relight 1.png" className="position-relative z-2" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="wrapper__sec-about">
              <div className="row">
                <div className="col-md-4 mb-4 mb-md-0">
                  <img src="./../images/Frame 9.png" className="mb-4" alt="" />
                  <h5 className="normal font__size--20 text__20-1024">Expertise</h5>
                  <p className="normal font__size--14 text__14-1024 color__gray-1">Our team consists of experienced VR developers, designers, and technicians who have a passion for VR and a commitment to delivering quality work and give the best service</p>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                  <img src="./../images/Frame 10.png" className="mb-4" alt="" />
                  <h5 className="normal font__size--20 text__20-1024">Customization</h5>
                  <p className="normal font__size--14 text__14-1024 color__gray-1">Every client is unique, and we believe every VR experience should be too. We'll work with you to create a customized solution that meets your specific needs and goals</p>
                </div>
                <div className="col-md-4">
                  <img src="./../images/Frame 11.png" className="mb-4" alt="" />
                  <h5 className="normal font__size--20 text__20-1024">Service</h5>
                  <p className="normal font__size--14 text__14-1024 color__gray-1">We believe in providing exceptional customer service, from initial consultation to final delivery. Our goal is to ensure you're satisfied with every aspect of your VR experience.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-4 my-md-auto">
                <img src="./../images/Group 17.png" className="position-relative z-2" alt="" />
                <img src="./../images/Ellipse 34.png" className="images__bg-sec" alt="" />
              </div>
              <div className="col-md-6 my-auto">
                <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">ABOUT US</p>
                <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm">Bring your events to life like never before with our VR services.</h2>
                <p className="light font__size--16 text__16-1024 color__gray-1 mb-3">VRNas is a leading provider of VR services for education, entertainment, architecture, and events. Our mission is to bring the power of virtual reality to everyone, allowing them to explore new worlds, learn in new ways, and experience events in a whole new light.</p>

                <ul className="list__data mb-4">
                  <li>
                    <div className="d-flex">
                      <img src="./../images/check-box (1).png" className="object-fit-content" alt="" />
                      <span className="ml-2 noraml font__size--16 text__16-1024">Cutting-Edge Technology</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <img src="./../images/check-box (1).png" className="object-fit-content" alt="" />
                      <span className="ml-2 noraml font__size--16 text__16-1024">Versatile Applications</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <img src="./../images/check-box (1).png" className="object-fit-content" alt="" />
                      <span className="ml-2 noraml font__size--16 text__16-1024">Affordable and Accessible</span>
                    </div>
                  </li>
                </ul>

                <a href="#!" className="bold font__size--14 text__14-1024 btn__action-more color__white ls__1 text-uppercase">read more</a>

              </div>
            </div>
          </div>
        </section>


        <SecService />


        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6 order-md-1 order-12 my-auto">
                <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">WHY CHOOSE US</p>
                <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-4">Why Choose Us for Your VR Needs</h2>

                {
                  dataAccordiom.map((obj, i) => {
                    return <div className={"wrapper__accordion-wrap mb-4 " + (accordion == i ? "active" : "")}>
                      <div className={"head pointer "} onClick={() => accordionFunc(i)} >
                        <h5 className="mb-0 semi-bold font__size--20 text__20-1024">{obj.title}</h5>
                        <img src="./../images/expand_more_FILL0_wght400_GRAD0_opsz48.png" className="arrow ml-2" />
                      </div>
                      <hr />
                      <div className="desc">
                        <p className="mb-0 normal font__size--16 text__16-1024 color__gray-1">{obj.desc}</p>
                      </div>
                    </div>
                  })
                }



              </div>
              <div className="col-md-6 order-1 order-md-12 mb-4 my-md-auto">
                <img src="./../images/Image (1).png" className="position-relative z-2" alt="" />
                <img src="./../images/Ellipse 34.png" className="images__bg-sec" alt="" />
              </div>
            </div>
          </div>
        </section>


        <section>
          <div className="container">
            <div className="text-center mb-5">
              <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">HOW TO GET STARTED</p>
              <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-0">Bringing Your Virtual Reality <br className="d-none d-sm-block" /> Dreams to Life</h2>
            </div>

            <div className="wrapper__video-wrap position-relative mb-5">
              <div className="desc">
                <div className="tag mb-2 medium font__size--14 text__14-1024">VR Service</div>
                <h4 className="medium font__size--36 text__36-1024">How to get started</h4>
              </div>
              <video
                ref={video}
                id="myVideo"
                poster="./../images/adasdsa.png"
                controls={true}
                playsInline
                preload="auto"
                loop
                muted
              >
                <source
                  src="./../images/saas.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="text-center">
              <a href="#!" className="bold font__size--14 text__14-1024 btn__action-more color__white ls__1 text-uppercase">GET STARTED</a>
            </div>
          </div>
        </section>


        <SecTestimonial />


        <SecChoose />


        <section>
          <div className="container">
            <div className="mb-5 text-center">
              <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">Our Trusted Partners</p>
              <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-0">Discover the Companies We Work With</h2>
            </div>

            <div className="text-center">
              <img src="./../images/Group 53.png" className="w-100" alt="" />
            </div>

          </div>
        </section>


        <section>
          <div className="container">
            <div className="d-flex flex-wrap flex-md-nowrap align-items-sm-end justify-content-between mb-4 mb-md-5">
              <div className="">
                <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">OUR ARTICLES</p>
                <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-0">Stay Up-to-Date with Our VR Insights</h2>
              </div>
              <a href="#!" className="ml-sm-3 bold font__size--14 text__14-1024 text__14-1024 btn__action width text-uppercase color__white pointer flex-shrink-0 d-md-inline-block d-none">see all</a>
            </div>
            <div className="wrapper__wrap-article position-relative">
              <div className="bg__wrap d-none d-lg-block"></div>
              <div className="row pt-5 position-relative z-2">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <SliderArticle />
                </div>
                <div className="col-lg-6">
                  <div className="wrapper__bg-blog-wrap mt-5 mt-lg-0">
                    <h4 className='semi-bold font__size--28 text__28-1024 mb-4 px__2 xs-1'>Recent Article</h4>

                    <div className="wrapper__wrap-article-scroll">
                      <div className="wrap">
                        {
                          article.map((obj) => {
                            return <Fragment>
                              <div className="wrapper__article-list">
                                <div className="d-flex align-items-center">
                                  <img src={obj.img} alt="" />
                                  <div className="des ml-3">
                                    <div className="tag medium font__size--14 text__14-1024 mb-3">{obj.tag}</div>
                                    <h5 className="mb-0 normal font__size--18 text__18-1024">{obj.title}</h5>
                                  </div>
                                </div>
                                <a href="#!" className="arrow ml-3 flex-shrink-0 d-sm-block d-none">
                                  <img src="./../images/next 1.png" alt="" />
                                </a>
                              </div>

                              <hr className="hr__line-article my-4" />
                            </Fragment>
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center d-md-none mt-5 mt-md-0">
              <a href="#!" className="ml-sm-3 bold font__size--14 text__14-1024 text__14-1024 btn__action width text-uppercase color__white pointer flex-shrink-0">see all</a>
            </div>
          </div>
        </section>

        <SecSubscribe />

        <Footer />

      </div >
    </Fragment >
  );
};

export default Index;
