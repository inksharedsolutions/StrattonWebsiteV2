import * as React from "react";
import emailjs from "emailjs-com";
import $ from "jquery";
import Swal from "sweetalert2";
import HeaderSection from "../../common/Navigation/header.component";
import Navigation from "../../common/Navigation/navigation.component";
import FooterComp from "../../common/Footer/footer.component";
import MainOffice from "../../assets/images/icon-image/mainoffice.png";
import BranchOffice from "../../assets/images/icon-image/branchoffice.png";
import Production from "../../assets/images/icon-image/production.png";
import Image from "../../common/Image/image.component";


import BBBRating from "../../assets/images/icon-image/bbb logo.png";
import AmazonKindle from "../../assets/images/logo/Amazon Kindle.png";
import barnesNoble from "../../assets/images/logo/barnes & noble.png";
import Chapters from "../../assets/images/logo/chapters.png";
import Indigo from "../../assets/images/logo/indigo.png";
import Ingram from "../../assets/images/logo/ingram.png";
import LightningSource from "../../assets/images/logo/lightning source.png";
import Carousel from "nuka-carousel";

import intlTelInput from 'intl-tel-input';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Telephone from "../../assets/images/backgrounds/contact-telephone.png";
import Email from "../../assets/images/backgrounds/contact-email.png";
import FAQ from "../../assets/images/backgrounds/contact-faq.png";
import BBBReviews from "../publish/bbbReviews";
interface Props {}

const contactUs: React.FC<Props> = () => {
  const history = useHistory();

  

  //FOR SENDING TO EMAIL
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();

    $(".send").addClass("hidden");
    $(".loader").addClass("display");
    
    emailjs.sendForm('sender', 'faq_template', e.currentTarget, 'user_norNgT0B71lOeGvDG16ph')
    .then((result) => {
      $(".send").removeClass("hidden");
      $(".loader").removeClass("display");
      Swal.fire(
        'EMAIL SENT',
        'Thank you for reaching out to us, our representative will reach out to you soon',
        'success'
      );
    }, (error) => {
      $(".send").removeClass("hidden");
      $(".loader").removeClass("display");
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    });
    e.currentTarget.reset();
    
}

const goToFAQ = () => {
  history.push("/faq");
  window.scrollTo(0, 0);
  behavior: "smooth";
};


  React.useEffect(() => {
    document.title = "Stratton Press";

  



    
  var input = document.querySelector("#phone")  as HTMLCanvasElement;
       intlTelInput(input, {

    // allowDropdown: false,
    // autoHideDialCode: false,
    // autoPlaceholder: "off",
    // dropdownContainer: document.body,z
    // excludeCountries: ["us"],
    // formatOnDisplay: false,
    geoIpLookup: function(callback) {
      $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
        var countryCode = (resp && resp.country) ? resp.country : "";
        callback(countryCode);
     
      });

    },
   
    hiddenInput: "full_number",
    // localizedCountries: { 'de': 'Deutschland' },
    nationalMode: true,   
    // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
    // placeholderNumberType: "MOBILE",
    // preferredCountries: ['cn', 'jp'],
    separateDialCode: true,
    utilsScript: "intl-tel-input/build/js/utils.js",
  
    
  });
  
  },[]);

    
  $(".slick-arrow ").click(function(){
    $(".toHide").hide();
  });
  $(".toHide").hide();
  
  $(".readMore").click(function(){
    var text :any = document.getElementById("readMore")
    
    $(".toHide").toggle();
    if (text.innerHTML === "Read More") {
      text.innerHTML = "Read Less";
    } else {
      text.innerHTML = "Read More";
    }
    
  })


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,
    
  };

  return (
    <div className="contactus-section">
      <HeaderSection bgcolor="#043439" />
      <Navigation />
      <div className="contact-1" id="contact-1">
      <div className="loader"></div>
        <div className="contact-banner">
          <div className="contact-bg">
            <div className="w-100">
              <div className="contact-container">
                <div className="left">
                  <div className="logo">
                  <a href="tel:+833.323.7009">  <img src={Telephone} alt="Telephone" /> </a>  
                  <a href="mailto:publish@stratton-press.com"><img src={Email} alt="Email" /></a>  
                  <Link to="faq"  onClick={() => goToFAQ()}><img src={FAQ} alt="FAQ" /></Link>
               
                  </div>

                  <div className="contact-main">
                    <h1>CONTACT US</h1>
                    <h2>How may we help you?</h2>
                    <p>
                      Do you have questions or concerns about self-publishing?
                      Just leave a message and we’ll get back to you the
                      soonest.
                    </p>

                    <form onSubmit={sendEmail}>
                    <div className="input-con">
                    <input
                      type="hidden" 
                      value="Contact Us" 
                      name="page"
                      /> 
                      
                      <input
                        type="text"
                        name="name"
                        className="name"
                        placeholder="Full Name"
                        required={true}
                      />
                      <div className="flex">
                      
                      <input
                        name = "phone"
                        id="phone"
                        type="tel"  
                        className="phone"
                        required={true}
                      />
            
                        <input
                          type="text"
                          name="email"
                          className="email"
                          placeholder="Email"
                          required={true}
                        />
                    </div>
                

                      <input
                        type="text"
                        className="dropdown"
                        name="subject"
                        id="cars"
                        placeholder="Subject"
                        required={true}
                      />

                      <textarea
                        className="textarea"
                        name="message"
                        id=""
                        placeholder="Your Message"
                        required={true}
                      ></textarea>
                      <br />
                      <button type="submit" className="send">Send</button>
                    </div>
                    </form>

                  </div>
                </div>
                <div className="right"></div>
              </div>
            </div>
            <div className="bottom-content">
              <div className="location">
                <div className="place">
                  <h1>Delware</h1>
                  <p>
                    831 N Tatnall Street, Suite M #188, Wilmington, DE 19801
                  </p>
                </div>
                <div className="place">
                  <h1>New York</h1>
                  <p>928 Hillside Blvd., New Hyde Park, New York, NY 11040</p>
                </div>
                <div className="place">
                  <h1>Philippines</h1>
                  <p>608, 6F, Jesa-ITC Bldg., Mango Avenue, Cebu City, 6000</p>
                </div>
              </div>
            </div>
            <div className="p100"></div>
          </div>
        </div>
      </div>
    <BBBReviews></BBBReviews>
   
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

export default contactUs;