import * as React from "react";
import * as $ from "jquery";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useHistory } from "react-router-dom";
import ButtonComp from "../../common/Button/button.component";
import HeaderSection from "../../common/Navigation/header.component";
import Navigation from "../../common/Navigation/navigation.component";
import Image from "../../common/Image/image.component";
import { UserCircle } from "styled-icons/boxicons-regular";
import { QuoteAltLeft } from "styled-icons/boxicons-solid";
import { QuoteAltRight } from "styled-icons/boxicons-solid";
import Carousel from "nuka-carousel";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import FooterComp from "../../common/Footer/footer.component";

import banner from "../../assets/images/backgrounds/banner-image.png";
import People from "../../assets/images/icon-image/people.png";
import Package from "../../assets/images/icon-image/pacakges.png";
import Ratings from "../../assets/images/icon-image/ratings.png";


import deceptionsp from "../../assets/images/414x736/414_X_736_1.jpg"
import atlastianssp from "../../assets/images/414x736/414_X_736_2.jpg"
import blueberrysp from "../../assets/images/414x736/414_X_736_3.jpg"
import dyingwellsp from "../../assets/images/414x736/414_X_736_4.jpg"
import erichoffersp from "../../assets/images/414x736/414_X_736_5.jpg"

import deception from "../../assets/images/backgrounds/100-YEARS-OF-DECEPTION_web.jpg";
import atlastians from "../../assets/images/backgrounds/ALASTIANS_WEB.jpg";
import blueberry from "../../assets/images/backgrounds/BLUEBERRY-DREAMS_web.jpg";
import dyingwell from "../../assets/images/backgrounds/DYING-WELL-PREPARED_WEB.jpg";
import erichoffer from "../../assets/images/backgrounds/ERIC-HOFFER-AWARD_WEB.jpg";
import BookExpoImage from "../../assets/images/backgrounds/Book Expo.png";
import BookExpoFair from "../../assets/images/backgrounds/BookExpoFair.png";
import AmazonKindle from "../../assets/images/logo/Amazon Kindle.png";
import barnesNoble from "../../assets/images/logo/barnes & noble.png";
import Chapters from "../../assets/images/logo/chapters.png";
import Indigo from "../../assets/images/logo/indigo.png";
import Ingram from "../../assets/images/logo/ingram.png";
import LightningSource from "../../assets/images/logo/lightning source.png";
import HalDavis from "../../assets/images/backgrounds/haldavis.png";
import Book1 from "../../assets/images/books/book1.png";
import Book2 from "../../assets/images/books/book2.png";

import lilian from "../../assets/images/authors/Lilian.png";
import adelia from "../../assets/images/authors/Adelia1.png";
import jean from "../../assets/images/authors/Jean1.png";
import jerry from "../../assets/images/authors/jerry.png";
import thomas from "../../assets/images/authors/thomas.png";
import cb from "../../assets/images/authors/cb.png";
import clint from "../../assets/images/authors/clint.png";
import { SettingsPhone } from "@styled-icons/material";

const ITEMSSP= [
  {
    img: deceptionsp,
    alt: "Slide 1",
    href: "javascript:void(0)",
  },
  {
    img: atlastianssp,
    alt: "Slide 2",
    href: "javascript:void(0)",
  },
  {
    img: blueberrysp,
    alt: "Slide 3",
    href: "javascript:void(0)",
  },
  {
    img: dyingwellsp,
    alt: "Slide 4",
    href: "javascript:void(0)",
  },
  {
    img: erichoffersp,
    alt: "Slide 5",
    href: "javascript:void(0)",
  },
];

const ITEMS = [
  {
    img: deception,
    alt: "Slide 1",
    href: "javascript:void(0)",
  },
  {
    img: atlastians,
    alt: "Slide 2",
    href: "javascript:void(0)",
  },
  {
    img: blueberry,
    alt: "Slide 3",
    href: "javascript:void(0)",
  },
  {
    img: dyingwell,
    alt: "Slide 4",
    href: "javascript:void(0)",
  },
  {
    img: erichoffer,
    alt: "Slide 5",
    href: "javascript:void(0)",
  },
];

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff",
  },
  slide1: {
    background: "#FEA900",
  },
  slide2: {
    background: "#B3DC4A",
  },
  slide3: {
    background: "#6AC0FF",
  },
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const DashbaordContainer: React.FC = () => {
  const [details, setDetails] = React.useState<any>([]);
  const history = useHistory();

  const getUserGeolocationDetails = () => {
    alert(details);
  };

  const goToPublish = () => {
    history.push("/publish");
    window.scrollTo(0, 0);
    behavior: "smooth";
  };

  const goToAboutUs = () => {
    history.push("/about-us");
    window.scrollTo(0, 0);
    behavior: "smooth";
  };

  const interviewBtn = (name: string) => {
    switch (name) {
      case "interview":
        $(".video").addClass("active"), 1500;
        history.push('/#video1');

        var stopAllYouTubeVideos = () => {
          var iframes = document.querySelectorAll("iframe");
          Array.prototype.forEach.call(iframes, (iframe) => {
            iframe.contentWindow.postMessage(
              JSON.stringify({ event: "command", func: "pauseVideo" }),
              "*"
            );
          });
        };
        stopAllYouTubeVideos();
        break;

      case "book":
        $(".video2").addClass("active"), 1500;
        history.push('/#video2');

        var stopAllYouTubeVideos = () => {
          var iframes = document.querySelectorAll("iframe");
          Array.prototype.forEach.call(iframes, (iframe) => {
            iframe.contentWindow.postMessage(
              JSON.stringify({ event: "command", func: "pauseVideo" }),
              "*"
            );
          });
        };
        stopAllYouTubeVideos();
        break;
    }
  };
  // close interview video
  $(document).on("keyup", function (evt) {
    if (evt.keyCode == 27) {

      $(".video").removeClass("active"), 1500;
      $(".video2").removeClass("active"), 1500;
      
      var stopAllYouTubeVideos = () => {
        var iframes = document.querySelectorAll("iframe");
        Array.prototype.forEach.call(iframes, (iframe) => {
          iframe.contentWindow.postMessage(
            JSON.stringify({ event: "command", func: "pauseVideo" }),
            "*"
          );
        });
      };
      stopAllYouTubeVideos();
    }
  });

  // close interview video
  $(document).ready(function () {
    $(".close").click(function () {
      $(".video").removeClass("active"), 1500;
      $(".video2").removeClass("active"), 1500;

      var stopAllYouTubeVideos = () => {
        var iframes = document.querySelectorAll("iframe");
        Array.prototype.forEach.call(iframes, (iframe) => {
          iframe.contentWindow.postMessage(
            JSON.stringify({ event: "command", func: "pauseVideo" }),
            "*"
          );
        });
      };
      stopAllYouTubeVideos();
    });
  });

//   React.useEffect(() => {
//     fetch(
//       "https://geolocation-db.com/json/2c7ba9a0-fcc9-11eb-80e0-2d180bc7db04"
//     )
//       .then((response) => response.json())
//       .then((data) => setDetails(data));
    
//       Swal.fire({
//         icon: 'error',
//         title: 'Sorry...',
//         text: 'We are currently experiencing extended power outage. Rest assured we will get back to you as soon as possible. You may email us or leave a voicemail on our hotline.',
//         // footer: '<a href="">Please contact us regarding this issue why you are getting this.</a>'
//       })
    
//     document.title = "Stratton Press";
//   }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

//slick slider
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


const settingSp ={
  dots: true,
  infinite: true,
  adaptiveHeight: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

  return (
    <div>
      <HeaderSection bgcolor="#043439" />
      <Navigation />
      <div className="banner-section" id="home-1">
        <div className="con">
        <div className="my-hero">
          <div className="tagline-section">
            <div className="tagline-body">
              <span className="tagline">
                <label className="what">
                  What's Your&nbsp;
                  <span className="story">Story?</span>
                </label>
              </span>
              <br />
              <span className="tagline-content">
                    Is there a story you wish to tell? 
                    Are there chapters you've written but not knowing the next step? 
                    Is it the story of your life, or of a dreamy place,
                    or a picture collection of your travels?
                    Whatever your story is, we'll help you launch towards the next step.
                <br />
                <br />
                Be a published author and let the world know{" "}
                <span className="your-story">Your Story.</span>
              </span>
            </div>
          </div>
          <div className="banner-image">
            <Image src={banner} width="550" height="650" alt="..." />
          </div>
        </div>
        </div>
      </div>
      <div className="publishing-section">
        <div className="w-100">
          <div className="left">
            <h2>
              <strong>Publishing made easy</strong>{" "}
            </h2>
            {/* <p>
              Download our free publishing guide to learn about our
              self-publishing process and services.
            </p> */}
          </div>
          <div className="right">
            <button onClick={() => goToPublish()}>Check our Services</button>
          </div>
        </div>
      </div>
      <div className="container-fluid learnmore">
        <div className="learnmore-section">
          <div className="about-us">
            <div className="col">
              <img src={People} className="aboutUse-img" alt="..." />
              <label className="row">About Us</label>
              <p className="align-middle">
                  We are an Author Services Provider 
                  committed towards helping you publish 
                  your book. We offer publishing and marketing
                  services suited to your needs. We'll help you get published. 
                  And most importantly, you reserve all the rights to your work!
              </p>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => goToAboutUs()}
              >
                Learn More!
              </button>
            </div>
            <div className="col">
              <img src={Package} className="packages-img" alt="..." />
              <label className="">Our Publishing Packages</label>
              <p className="align-middle">
                Do you need someone to design your book cover? 
                Do you need help in copyediting? 
                Does your book require illustrations? 
                Do you want your book available too, in e-book form?
                How about a movie trailer? 
                Whatever you need, we are a one-stop provider of services any author would dream about!
              </p>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => goToPublish()}
              >
                View Services
              </button>
            </div>
            <div className="col">
              <img src={Ratings} className="ratings-img" alt="..." />
              <label className="">A- BBB Rating</label>
              <p className="align-middle">
                  Better Business Bureau (BBB) rates Stratton Press an A-,
                  which is equivalent to a 90-93.99% service rate! 
                  Like the rest of the world,
                  Stratton Press feels the effects of the pandemic. However, 
                  this does not stop us from continuously aspiring to be better,
                  transparent, helpful and responsive. We'llsupport you throughout your journey!
              </p>
              <HashLink
                to="/publish#publish-5"
                type="button"
                className="btn btn-primary"
              >
                {" "}
                What They Say{" "}
              </HashLink>
            </div>
          </div>
        </div>
      </div>

     <div className="pc slider-bg">
            <div className="slider-con">
            <Carousel autoplay={true} wrapAround={true} >
          {ITEMS.map((items, i) => {
            return (
              <div>
                <a href={items.href}>
                  <img  className="carouselBanner" src={items.img} alt={items.alt}/>
                </a>
              </div>
            );
          })}
        </Carousel>
            </div>
     </div>

     <div className="sp  ">
          
          <Carousel autoplay={true} wrapAround={true} >
          {ITEMSSP.map((items, i) => {
            return (
              <div>
                <a href={items.href}>
                  <img src={items.img} alt={items.alt} />
                </a>
              </div>
            );
          })}
        </Carousel>
         
     </div>

      <div className="video" id="video1">
        <div className="close">
          <div className="bar1"></div>
          <div className="bar2"></div>
        </div>
        <div className="content">
          <iframe
            src="https://www.youtube.com/embed/TuhAb-6AJ3Q?version=3&enablejsapi=1"
            frameBorder="0"
            allowFullScreen
          >
            {" "}
          </iframe>
        </div>
      </div>
      <div className="video2" id="video2">
        <div className="close">
          <div className="bar1"></div>
          <div className="bar2"></div>
        </div>
        <div className="content">
        <iframe  src="https://www.youtube.com/embed/qNOpjGy5Us0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>

      {/* spotlight here */}
      <section className="spotlight">
        <div className="w100 height">
          <div className="author">
            <Image src={HalDavis} alt="..." className="author-image" />
          </div>
          <div className="temp"></div>
          <div className="author-spot">
            <div className="flex">
              <div className="top">
                <div className="flex-r">
                  <div className="left">
                    <h1>
                      AUTHOR SPOTLIGHT : <span>HAL DAVIS</span>
                    </h1>
                    <p>
                      Hal Davis is a distinguished US Marine (Ret.) with a
                      career that spanned twenty-two years. He became a
                      Tennessee State Trooper, FBI Special Investigator, United
                      States Secret Service Agent to two US presidents, and a
                      Marine and Naval Criminal Investigator. He is the author
                      of the books, From an Outhouse to the White House, and
                      Beyond the Mountains and Across the Seas
                    </p>
                  </div>
                  <div className="right">
                    <div className="book-flex">
                      <img className="p10" src={Book1} alt="book" />
                      <img src={Book2} alt="book" />
                    </div>
                    <div className="ttl-flex">
                      <a href="https://haldavisusmcret.com" target="_blank">
                        Check out Hal's Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="buttom">
                <div className="flex-r">
                  <div className="temp-author"></div>
                  <div className="left">
                  <iframe
            src="https://www.youtube.com/embed/TuhAb-6AJ3Q?version=3&enablejsapi=1"
            frameBorder="0"
            allowFullScreen
          >
            {" "}
          </iframe>
                    <h2>This Week In America Radio Interview :</h2>
                    <h1> From an Outhouse to the White House</h1>
                    <HashLink to="#video1"> <button onClick={() => interviewBtn("interview")}>Check Out the Full Interview</button> </HashLink>
                  
                    
                  </div>
                  <div className="right">
                  <iframe  src="https://www.youtube.com/embed/qNOpjGy5Us0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <h2>Book Trailer :</h2>
                    <h1>Beyond the Mountains and Across the Seas</h1>
                    <HashLink to="#video2"> <button onClick={() => interviewBtn("book")}>Check Out the Full Interview</button> </HashLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of spotlight */}
      <div className="testimonials text-center" id="testimonials">
        <div className=" con">
          
          
            <div className="row">
            <Slider {...settings}>
              
              <div className="col-md-6 col-lg-4">
                <div className="card border-light bg-light text-center">
                  {/* <i className="fa fa-quote-left card-img-top rounded-circle" aria-hidden="true"></i> */}
                  <QuoteAltRight
                    size={45}
                    className="card-img-top rounded-circle"
                    aria-hidden="true"
                    color="orange"
                  />
                  <div className="card-body blockquote">
                    {/* <img src={userIcon} width="100" height="100" alt="..." /> */}
                    {/* <UserCircle size={65} color="gray"/> */}
                      <div className="">
                              <img src={lilian} alt="Avatar" />
                      </div>
                    <p className="card-text">
                      I learned more about my craft, and I was impressed that they
                      market it in different countries. The staff were always
                      friendly and willing to answer any questions I had.
                    </p>
                    <footer className="blockquote-footer">
                      <cite title="Source Title">Lilian White</cite>
                    </footer>
                    <footer className="testimonials-book-title blockquote">
                      <cite title="Source Title">Emmanuel</cite>
                    </footer>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card border-light bg-light text-center">
                  {/* <i className="fa fa-quote-left card-img-top rounded-circle" aria-hidden="true"></i> */}
                  <QuoteAltRight
                    size={45}
                    className="card-img-top rounded-circle"
                    aria-hidden="true"
                    color="orange"
                  />
                  <div className="card-body blockquote">
                    {/* <img src={userIcon} width="100" height="100" alt="..." /> */}
                    {/* <UserCircle size={65} color="gray" /> */}
                      <div className="">
                              <img src={adelia} alt="Avatar" />
                      </div>
                    <p className="card-text">
                    Stratton Press not only took their time to walk me all the way but 
                    went further by providing the editing, publishing, and marketing side.
                    I would recommend Stratton Press for being a good, caring publishing company 
                    and the best team of professionals I grew to love and admire.
                    </p>
                    <footer className="blockquote-footer">
                      <cite title="Source Title">Adelia Goncalves</cite>
                    </footer>
                    <footer className="testimonials-book-title blockquote">
                      <cite title="Source Title">Love Me Now & Forever</cite>
                    </footer>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4" >
                <div className="card border-light bg-light text-center">
                  {/* <i className="fa fa-quote-left card-img-top rounded-circle" aria-hidden="true"></i> */}
                  <QuoteAltRight
                    size={45}
                    className="card-img-top rounded-circle"
                    aria-hidden="true"
                    color="orange"
                  />
                  <div className="card-body blockquote">
                    {/* <img src={userIcon} width="100" height="100" alt="..." /> */}
                    {/* <UserCircle size={65} color="gray" /> */}
                      <div className="">
                          <img src={jean} alt="Avatar" />
                      </div>
                    <p className="card-text">
                    I really appreciated the way your organization has helped me as a writer 
                    to have a finished product with my book. It was really helpful to work with 
                    the company which not only provided great suggestions but also was considerate 
                    regarding my ideas and vision. I am grateful that such a difficult journey for 
                    others was a less stressful process for me.
                    </p>
                    <footer className="blockquote-footer">
                      <cite title="Source Title">Jean-Maurice Belekwa</cite>
                    </footer>
                    <footer className="testimonials-book-title blockquote">
                      <cite title="Source Title">How the Tiniest Can Be Stronger Than the Most Ferocious</cite>
                    </footer>
                  </div>
                </div>
              </div>

              {/* TEST */}
                <div className="col-md-6 col-lg-4" >
                  <div className="card border-light bg-light text-center">
                    {/* <i className="fa fa-quote-left card-img-top rounded-circle" aria-hidden="true"></i> */}
                    <QuoteAltRight
                      size={45}
                      className="card-img-top rounded-circle"
                      aria-hidden="true"
                      color="orange"
                    />
                    <div className="card-body blockquote">
                      {/* <img src={userIcon} width="100" height="100" alt="..." /> */}
                      {/* <UserCircle size={65} color="gray" /> */}
                        <div className="">
                            <img src={thomas} alt="Avatar" />
                        </div>
                      <p className="card-text">
                      I thought the complete procedure was very good. 
                      Far better than any I have seen previously with other books.
                      </p>
                      <footer className="blockquote-footer">
                        <cite title="Source Title">Tom Shipley</cite>
                      </footer>
                      <footer className="testimonials-book-title blockquote">
                        <cite title="Source Title">The United States of America: The Most Successful Nation and People of All</cite>
                      </footer>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4" >
                  <div className="card border-light bg-light text-center">
                    {/* <i className="fa fa-quote-left card-img-top rounded-circle" aria-hidden="true"></i> */}
                    <QuoteAltRight
                      size={45}
                      className="card-img-top rounded-circle"
                      aria-hidden="true"
                      color="orange"
                    />
                    <div className="card-body blockquote">
                      {/* <img src={userIcon} width="100" height="100" alt="..." /> */}
                      {/* <UserCircle size={65} color="gray" /> */}
                        <div className="">
                            <img src={jerry} alt="Avatar" />
                        </div>
                      <p className="card-text">
                      Stratton Press has taken the rough road to publication and smoothed it out. 
                      As an author, I feel grateful to each and every member of their team. It's 
                      almost like being part of a family.
                      </p>
                      <footer className="blockquote-footer">
                        <cite title="Source Title">Jerry Crossley</cite>
                      </footer>
                      <footer className="testimonials-book-title blockquote">
                        <cite title="Source Title">The Seen and the Unseen</cite>
                      </footer>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4" >
                  <div className="card border-light bg-light text-center">
                    {/* <i className="fa fa-quote-left card-img-top rounded-circle" aria-hidden="true"></i> */}
                    <QuoteAltRight
                      size={45}
                      className="card-img-top rounded-circle"
                      aria-hidden="true"
                      color="orange"
                    />
                    <div className="card-body blockquote">
                      {/* <img src={userIcon} width="100" height="100" alt="..." /> */}
                      {/* <UserCircle size={65} color="gray" /> */}
                        <div className="">
                            <img src={cb} alt="Avatar" />
                        </div>
                      <p className="card-text">
                      For ease of working with, this publisher is one of the best. 
                      Beautiful work and done in a timely manner.
                      </p>
                      <footer className="blockquote-footer">
                        <cite title="Source Title">CB Millien</cite>
                      </footer>
                      <footer className="testimonials-book-title blockquote">
                        <cite title="Source Title">Savage Destiny: Blood Bond</cite>
                      </footer>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4" >
                  <div className="card border-light bg-light text-center">
                    {/* <i className="fa fa-quote-left card-img-top rounded-circle" aria-hidden="true"></i> */}
                    <QuoteAltRight
                      size={45}
                      className="card-img-top rounded-circle"
                      aria-hidden="true"
                      color="orange"
                    />
                    <div className="card-body blockquote">
                      {/* <img src={userIcon} width="100" height="100" alt="..." /> */}
                      {/* <UserCircle size={65} color="gray" /> */}
                        <div className="">
                            <img src={clint} alt="Avatar" />
                        </div>
                      <p className="card-text">
                      They did an amazing job on my novel, Rebirth of the Dark Ones. 
                      Check it out! I would recommend them.
                      </p>
                      <footer className="blockquote-footer">
                        <cite title="Source Title">Clint Charles Fryer</cite>
                      </footer>
                      <footer className="testimonials-book-title blockquote">
                        <cite title="Source Title">Rebirth of the Dark Ones</cite>
                      </footer>
                    </div>
                  </div>
                </div>

            
              {/* END OF TEST AREA */}

              </Slider>
            </div>
       

        </div>
      </div>

      <div className="sp1" id="testimonials1">
        <Slider {...settingSp}>
          <div className="col-md-6 col-lg-4 sp">
            <div className="card border-light bg-light text-center">
              {/* <i className="fa fa-quote-left card-img-top rounded-circle" aria-hidden="true"></i> */}
              <QuoteAltRight
                size={45}
                className="card-img-top rounded-circle"
                aria-hidden="true"
                color="orange"
              />
              <div className="card-body blockquote">
                {/* <img src={userIcon} width="100" height="100" alt="..." /> */}
                {/* <UserCircle size={65} color="gray"/> */}
                    <div className="">
                            <img src={lilian} alt="Avatar" />
                    </div>
                  <p className="card-text">
                    I learned more about my craft, and I was impressed that they
                    market it in different countries. The staff were always
                    friendly and willing to answer any questions I had.
                  </p>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">Lilian White</cite>
                  </footer>
                  <footer className="testimonials-book-title blockquote">
                    <cite title="Source Title">Emmanuel</cite>
                  </footer>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 sp">
            <div className="card border-light bg-light text-center">
              {/* <i className="fa fa-quote-left card-img-top rounded-circle" aria-hidden="true"></i> */}
              <QuoteAltRight
                size={45}
                className="card-img-top rounded-circle"
                aria-hidden="true"
                color="orange"
              />
              <div className="card-body blockquote">
                {/* <img src={userIcon} width="100" height="100" alt="..." /> */}
                {/* <UserCircle size={65} color="gray" /> */}
                <div className="">
                            <img src={adelia} alt="Avatar" />
                    </div>
                  <p className="card-text">
                  Stratton Press not only took their time to walk me all the way but 
                  went further by providing the editing, publishing, and marketing side.
                  I would recommend Stratton Press for being a good, caring publishing company 
                  and the best team of professionals I grew to love and admire.
                  </p>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">Adelia Goncalves</cite>
                  </footer>
                  <footer className="testimonials-book-title blockquote">
                    <cite title="Source Title">Love Me Now & Forever</cite>
                  </footer>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 sp">
            <div className="card border-light bg-light text-center">
              {/* <i className="fa fa-quote-left card-img-top rounded-circle" aria-hidden="true"></i> */}
              <QuoteAltRight
                size={45}
                className="card-img-top rounded-circle"
                aria-hidden="true"
                color="orange"  
              />
              <div className="card-body blockquote">
                {/* <img src={userIcon} width="100" height="100" alt="..." /> */}
               {/* <UserCircle size={65} color="gray" /> */}
               <div className="">
                        <img src={jean} alt="Avatar" />
                    </div>
                  <p className="card-text">
                  I really appreciated the way your organization has helped me as a writer 
                  to have a finished product with my book. It was really helpful to work with 
                  the company which not only provided great suggestions but also was considerate 
                  regarding my ideas and vision. I am grateful that such a difficult journey for 
                  others was a less stressful process for me.
                  </p>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">Jean-Maurice Belekwa</cite>
                  </footer>
                  <footer className="testimonials-book-title blockquote">
                    <cite title="Source Title">How the Tiniest Can Be Stronger Than the Most Ferocious</cite>
                  </footer>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 sp">
            <div className="card border-light bg-light text-center">
              {/* <i className="fa fa-quote-left card-img-top rounded-circle" aria-hidden="true"></i> */}
              <QuoteAltRight
                size={45}
                className="card-img-top rounded-circle"
                aria-hidden="true"
                color="orange"  
              />
              <div className="card-body blockquote">
                {/* <img src={userIcon} width="100" height="100" alt="..." /> */}
               {/* <UserCircle size={65} color="gray" /> */}
               <div className="">
                        <img src={thomas} alt="Avatar" />
                    </div>
                  <p className="card-text">
                   I thought the complete procedure was very good. 
                   Far better than any I have seen previously with other books.
                  </p>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">Tom Shipley</cite>
                  </footer>
                  <footer className="testimonials-book-title blockquote">
                    <cite title="Source Title">The United States of America: The Most Successful Nation and People of All</cite>
                  </footer>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 sp">
            <div className="card border-light bg-light text-center">
              {/* <i className="fa fa-quote-left card-img-top rounded-circle" aria-hidden="true"></i> */}
              <QuoteAltRight
                size={45}
                className="card-img-top rounded-circle"
                aria-hidden="true"
                color="orange"  
              />
              <div className="card-body blockquote">
                {/* <img src={userIcon} width="100" height="100" alt="..." /> */}
               {/* <UserCircle size={65} color="gray" /> */}
               <div className="">
                        <img src={jerry} alt="Avatar" />
                    </div>
                  <p className="card-text">
                  Stratton Press has taken the rough road to publication and 
                  smoothed it out. As an author, I feel grateful to each and 
                  every member of their team. It's almost like being part of a family.
                  </p>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">Jerry Crossley</cite>
                  </footer>
                  <footer className="testimonials-book-title blockquote">
                    <cite title="Source Title">The Seen and the Unseen</cite>
                  </footer>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 sp">
            <div className="card border-light bg-light text-center">
              {/* <i className="fa fa-quote-left card-img-top rounded-circle" aria-hidden="true"></i> */}
              <QuoteAltRight
                size={45}
                className="card-img-top rounded-circle"
                aria-hidden="true"
                color="orange"  
              />
              <div className="card-body blockquote">
                {/* <img src={userIcon} width="100" height="100" alt="..." /> */}
               {/* <UserCircle size={65} color="gray" /> */}
               <div className="">
                        <img src={cb} alt="Avatar" />
                    </div>
                  <p className="card-text">
                  For ease of working with, this publisher is one of the best. 
                  Beautiful work and done in a timely manner.
                  </p>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">CB Millien</cite>
                  </footer>
                  <footer className="testimonials-book-title blockquote">
                    <cite title="Source Title">Savage Destiny: Blood Bond</cite>
                  </footer>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 sp">
            <div className="card border-light bg-light text-center">
              {/* <i className="fa fa-quote-left card-img-top rounded-circle" aria-hidden="true"></i> */}
              <QuoteAltRight
                size={45}
                className="card-img-top rounded-circle"
                aria-hidden="true"
                color="orange"  
              />
              <div className="card-body blockquote">
                {/* <img src={userIcon} width="100" height="100" alt="..." /> */}
               {/* <UserCircle size={65} color="gray" /> */}
               <div className="">
                        <img src={clint} alt="Avatar" />
                    </div>
                  <p className="card-text">
                  They did an amazing job on my novel, Rebirth of the Dark Ones.
                   Check it out! I would recommend them.
                  </p>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">Clint Charles Fryer</cite>
                  </footer>
                  <footer className="testimonials-book-title blockquote">
                    <cite title="Source Title">Rebirth of the Dark Ones</cite>
                  </footer>
              </div>
            </div>
          </div>

        </Slider>
      </div>
      <div className="bookexpo-section">
        <div className="bookexpo-rightsfair">
          <div className="bookexpo-logo">
            <img src={BookExpoImage} alt="..." />
          </div>
          <div className="bookexpo-content">
            <h3>NEW YORK RIGHTS FAIR &amp; BOOK EXPO!</h3>
            <p>
              Stratton Press joined the 2019 New York Rights Fair and Book Expo.
              A big thank you to all the authors who visited our booth. Til the
              next one!
            </p>
          </div>
        </div>
        <div className="bookexpo-picture">
          <img src={BookExpoFair} alt="..." />
        </div>
      </div>
      <div className="channels-section">
        <div className="channel-header">
          <p>AUTHORS' BOOKS ARE DISTRIBUTED IN THESE AMAZING CHANNELS</p>
        </div>
        <div className="channels-body">
          <div className="amazon-kindle">
            <Image src={AmazonKindle} alt="..." />
          </div>
          <div className="barnes-noble">
            <Image src={barnesNoble} alt="..." />
          </div>
          <div className="chapters">
            <Image src={Chapters} alt="..." />
          </div>
          <div className="indigo">
            <Image src={Indigo} alt="..." />
          </div>
          <div className="ingram">
            <Image src={Ingram} alt="..." />
          </div>
          <div className="lightning-source">
            <Image src={LightningSource} alt="..." />
          </div>
        </div>
      </div>
      <FooterComp />
    </div>
  );
};

export default DashbaordContainer;
