import * as React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import * as $ from "jquery";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import ButtonComp from "../../common/Button/button.component";
import HeaderSection from "../../common/Navigation/header.component";
import Navigation from "../../common/Navigation/navigation.component";
import Image from "../../common/Image/image.component";
import banner from "../../assets/images/backgrounds/banner2.jpg";
import FooterComp from "../../common/Footer/footer.component";

import { useHistory } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import bookreview1 from "../../assets/images/books/book-review1.png";
import bookreview2 from "../../assets/images/books/book-review2.png";
import bookreview3 from "../../assets/images/books/book-review3.png";
import bookreview4 from "../../assets/images/books/book-review4.png";

import booksample1 from "../../assets/images/books/blueberry.png";
import booksample2 from "../../assets/images/books/unsealed.png";
import booksample3 from "../../assets/images/books/designated.png";
import booksample4 from "../../assets/images/books/fun.png";
import booksample5 from "../../assets/images/books/listening.png";
import booksample6 from "../../assets/images/books/different.png";
import booksample7 from "../../assets/images/books/ice.png";
import booksample8 from "../../assets/images/books/key.png";
import booksample9 from "../../assets/images/books/greasy.png";

import web1 from "../../assets/images/books/avaphillips.png";
import web2 from "../../assets/images/books/lois1.png";
import web3 from "../../assets/images/books/steve.png";
import web4 from "../../assets/images/books/william3.png";
import web5 from "../../assets/images/books/thomas.png";
import web6 from "../../assets/images/books/jesse.png";

import BGreview1 from "../../assets//images/backgrounds/bg-review1.png";
import BGreview2 from "../../assets//images/backgrounds/bg-review2.png";
import BGreview3 from "../../assets//images/backgrounds/bg-review3.png";
import BGreview4 from "../../assets//images/backgrounds/bg-review4.png";

import BGreview1sp from "../../assets//images/backgrounds/sp/mobile2.png";
import BGreview2sp from "../../assets//images/backgrounds/sp/mobile1.png";
import BGreview3sp from "../../assets//images/backgrounds/sp/mobile4.png";
import BGreview4sp from "../../assets//images/backgrounds/sp/mobile5.png";

import publishing from "../../assets/images/backgrounds/thinking.jpg";
import booktrailer from "../../assets/images/backgrounds/booktrailer.png";
import bookGroup from "../../assets/images/books/bookgroup.png";
import Rectangle from "../../assets/images/backgrounds/Rounded Rectangle.png";
import radioint from "../../assets/images/backgrounds/radioint.png";
import Website from "../../assets/images/backgrounds/websites.png";
import usreview from "../../assets/images/backgrounds/usreview.png";
import AmazonKindle from "../../assets/images/logo/Amazon Kindle.png";
import barnesNoble from "../../assets/images/logo/barnes & noble.png";
import Chapters from "../../assets/images/logo/chapters.png";
import Indigo from "../../assets/images/logo/indigo.png";
import Ingram from "../../assets/images/logo/ingram.png";
import LightningSource from "../../assets/images/logo/lightning source.png";

import * as intlTelInput from 'intl-tel-input';


interface Props { }

const AboutUs: React.FC<Props> = () => {

    const [state, setstate] = React.useState<any>([]);
    const history = useHistory();
    

    //For Sending Emails
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        $(".send1").addClass("hidden");
        $(".loader").addClass("display");

        emailjs.sendForm('sender', 'publish/aboutUs_template', e.currentTarget, 'user_norNgT0B71lOeGvDG16ph')
        .then((result) => {
            $(".send1").removeClass("hidden");
            $(".loader").removeClass("display");
            Swal.fire(
                'EMAIL SENT',
                'Thank you for reaching out to us, our representative will reach out to you soon',
                'success'
              );
        }, (error) => {
            $(".send1").removeClass("hidden");
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
    //END

 const fullScreen = () =>{
    // let i = document.querySelector(".vid1");
    // i.requestFullscreen();
     
 }
    
 const goToPolicy = () => {
    history.push("/privacy");
    window.scrollTo(0, 0);
    behavior: "smooth";
  };
    

    const toAboutUs2 = (name: string) => {
        switch(name){
            case 'book-covers':
                $(".book-cover1").toggleClass('display');
                $(".book-cover2").removeClass('display');
                $(".book-cover3").removeClass('display');
                $(".book-cover4").removeClass('display');
                break;
            case 'book-trailer':
                $(".book-cover2").toggleClass('display');
                $(".book-cover1").removeClass('display');
                $(".book-cover4").removeClass('display');
                $(".book-cover3").removeClass('display');
                break;
            case 'radio-interview':
                $(".book-cover3").toggleClass('display');
                $(".book-cover1").removeClass('display');
                $(".book-cover4").removeClass('display');
                $(".book-cover2").removeClass('display');
                break;
            case 'website':
                $(".book-cover4").toggleClass('display');
                $(".book-cover2").removeClass('display');
                $(".book-cover1").removeClass('display');
                $(".book-cover3").removeClass('display');
                break;
        }
    } 

    // PHONE on side input
    React.useEffect(() => {
        document.title = "Stratton Press";

        var input = document.getElementById("phone")  as HTMLCanvasElement;
            intlTelInput(input, {
                geoIpLookup: function(callback) {
                    $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
                      var countryCode = (resp && resp.country) ? resp.country : "";
                      callback(countryCode);
                
                    });
              
                  },
                 
                  hiddenInput: "full_number",
                  nationalMode: true,
                  separateDialCode: true,
                  utilsScript: "intl-tel-input/build/js/utils.js",
        });

    }, [])
    // END
    
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    
    };
    
        
    return (
        
        <div className="AboutUs-Component" id="aboutus-1">
            <HeaderSection bgcolor="#043439" />
            <Navigation />
            <div className="container-fluid aboutus-header">
                <div className="hero">About Us</div>
            </div>
            <div className="aboutus-banner-section">
                    <div className="w-100">
                        <div className="left">
                            <Image src={banner} className="images" width="550" height="650" alt="..." />
                        </div>
                        <div className="right">
                            <div className="header">
                                <div className="support">We Support You.</div>
                                <div className="celebrate">We Celebrate You.</div>
                            </div>
                                <div className="body">
                                        <p>                
                                        Many writers have dreamt to be authors. But not all writers get to fulfill this dream. We understand how difficult the road to publishing can get. With thousands of manuscripts written every day, not all get picked up by a publisher. But this may change when you have your manuscript ready in professional book form.
                                        </p>
                                        <p>
                                        Stratton Press is an Author Service Provider. Our mission is help you take the brave, first steps and to press on, throughout your publishing journey.  
                                        </p>
                                        <p>
                                        We’ll give you the tools and the team you need. From book cover design to editing, to distribution and marketing.  Imagine having your own professional team dedicated to work on your book. 
                                        </p>
                                        <p>
                                        We are here to support you. To get you Your space so that the world can see Your story. And yes, should a traditional publisher discover the wonder that you truly are, we will be as joyful as you. And in each step closer, for every success you’d make, we will celebrate You.
                                        </p>
                                </div>
                        </div>
                    </div>
            </div>
                <div className="publishing-sect">
                <div className="w-100">
                    <div className="temp">
                    </div>
                    <div className="text-container">
                        <h1>Publishing with Stratton Press means YOU:</h1>
                        <ul>
                            <li>Retain ownership of your work.</li>
                            <li>Can expect to have amazing book covers!</li>
                            <li>Have an entire team to support you in copyediting and interior design.</li>
                            <li>Have your book available in paperback, hardback, and e-book formats.</li>
                            <li>Can have your book printed at 1 copy or more! And you won't go out of print.</li>
                            <li>Earn royalties for every sale.</li>
                            <li>Have online distribution channels worldwide!</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* UNUSED SECTION PLEASE DON'T DELETE BRUCE */}
                {/* <div className="section-1">
                    <div className="w-100">
                        <div className="flex">
                            <div className="left">
                                <h1>HOW IT <span>WORKS</span></h1>
                                <p>How the Publishing Process Comes Together</p>
                            </div>
                            <div className="right">
                                <Image src={Rectangle} alt="..." />
                            </div>
                        </div>
                    </div>
                </div> */}
            {/* END OF SECTION */}

            <div className="section-2">
                <div className="w-100">
                    <div className="flex">
                        <div className="left">
                            <Image src={bookGroup} alt="..." />
                        </div>
                        <div className="right">
                            <h1>CUSTOMIZED BOOK COVERS</h1>
                            <p>We take pride in creating book covers that mirror your book’s soul.  Our team of artists are of high calibre and award-winning.</p>
                            <HashLink to="#book-cover1"> <button onClick={() => toAboutUs2('book-covers')}>  See Samples </button> </HashLink> 
                        </div>
                    </div>
                </div>
            </div>

            <div className="book-cover1" id="book-cover1">
                    <div className="w100">
                    <div className="books book-pc">
                                <img src={booksample1} alt="b" />
                                 <img src={booksample2} alt="b" />
                                <img src={booksample3} alt="b" />
                                <img src={booksample4} alt="b" />
                                <img src={booksample5} alt="b" />
                                <img src={booksample6} alt="b" />
                               <img src={booksample7} alt="b" />
                                <img src={booksample8} alt="b" />
                                <img src={booksample9} alt="b" />
                            
                        </div>

                        <div className="books book-sp">
                           <Slider {...settings}>
                             <div className=""> 
                                <img src={booksample1} alt="b" />
                                 <img src={booksample2} alt="b" />
                            </div>

                            <div className="">
                                <img src={booksample3} alt="b" />
                                <img src={booksample4} alt="b" />
                            </div>
                           
                            <div className="">
                                <img src={booksample5} alt="b" />
                                <img src={booksample6} alt="b" />
                            </div>
                            <div className="">
                                <img src={booksample7} alt="b" />
                                <img src={booksample8} alt="b" />
                            </div>
                           </Slider>
                            
                        </div>
                    </div>
            </div>

            <div className="section-3">
                <div className="w-100">
                    <div className="flex">
                        <div className="left">
                            <h1>BOOK TRAILER</h1>
                            <p>What if we can add color to your story and basically bring your book to life? We will create beautiful trailers that show a glimpse of your story through images and sounds</p>
                            <HashLink to="#book-cover2"> <button onClick={() => toAboutUs2('book-trailer')}>See Samples</button></HashLink>
                        </div>
                        <div className="right">
                            <Image src={booktrailer} alt="..." />
                        </div>
                    </div>
                </div>
            </div>

            <div className="book-cover2" id="book-cover2">
                  <div className="w100">
                        <div className="books book-pc">
                            <iframe onClick={() => fullScreen()} className ="vid1" src="https://www.youtube.com/embed/X6MbhiCF4fI" title="YouTube video player" frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <iframe src="https://www.youtube.com/embed/54kl1TKNFjc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <iframe src="https://www.youtube.com/embed/xj4V60xXRug" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <iframe src="https://www.youtube.com/embed/3PpE0sxomM4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <iframe src="https://www.youtube.com/embed/w-OkABdPGfU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <iframe src="https://www.youtube.com/embed/7JQxo1Sx1Ts"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>               
                        </div>

                        <div className="books book-sp">
                        <Slider {...settings}>
                            <iframe src="https://www.youtube.com/embed/X6MbhiCF4fI" title="YouTube video player" frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <iframe src="https://www.youtube.com/embed/54kl1TKNFjc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <iframe src="https://www.youtube.com/embed/xj4V60xXRug" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <iframe src="https://www.youtube.com/embed/3PpE0sxomM4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <iframe src="https://www.youtube.com/embed/w-OkABdPGfU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <iframe src="https://www.youtube.com/embed/7JQxo1Sx1Ts"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>               
                        </Slider>
                            
                        </div>
                    </div>
            </div>
   
            <div className="section-4">
                <div className="w-100">
                    <div className="flex">
                        <div className="left">
                            <Image src={radioint} alt="..." />
                        </div>
                        <div className="right">
                            <h1>RADIO INTERVIEW</h1>
                            <p>Take the Wonderful opportunity to talk about your story,
                                your characters, your inspiration in a very insightful
                                interview with Ric Bratton in This Week in America.
                            </p>
                            <HashLink to="#book-cover3"> <button onClick={() => toAboutUs2('radio-interview')}>See Samples</button> </HashLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="book-cover3" id="book-cover3">
            <div className="w100">
                        <div className="books book-pc">
                            <iframe src="https://drive.google.com/file/d/1SZ1D4nt7PCQk9t1LZhTXdZTHw210GwPZ/preview"  title="YouTube video player" frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <iframe src="https://drive.google.com/file/d/1zUPSylh02gTVEdHJYZr_KZT9VjCtj5la/preview"title="YouTube video player" frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <iframe src="https://drive.google.com/file/d/1QyfgkLLj4WsoNKJtMD--dKkrQH675OLJ/preview" title="YouTube video player" frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <iframe src="https://drive.google.com/file/d/1NcOmbH7qcvZzDCGUSphRJzxbG3rxAdSP/preview"  title="YouTube video player" frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <iframe src="https://drive.google.com/file/d/1tFtv-LIzrEOzWalrZ3fWZDrj-aDDSorh/preview" title="YouTube video player" frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <iframe src="https://drive.google.com/file/d/1dGbi5uc3mMRIWzcc2Yqs5KV4bxds0kJj/preview" title="YouTube video player" frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                                  
                            <iframe src="https://drive.google.com/file/d/1zVN6q_MHT5K1uuddpbiO90tK6MUU7V_d/preview" title="YouTube video player" frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                                  
                            <iframe src="https://drive.google.com/file/d/1QyfgkLLj4WsoNKJtMD--dKkrQH675OLJ/preview" title="YouTube video player" frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                                  
                        </div>
                        <div className="books book-sp">
                        <Slider {...settings}>
                            
                             <iframe src="https://drive.google.com/file/d/1SZ1D4nt7PCQk9t1LZhTXdZTHw210GwPZ/preview"  title="YouTube video player" frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <iframe src="https://drive.google.com/file/d/1zUPSylh02gTVEdHJYZr_KZT9VjCtj5la/preview" title="YouTube video player" frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <iframe src="https://drive.google.com/file/d/1QyfgkLLj4WsoNKJtMD--dKkrQH675OLJ/preview" title="YouTube video player" frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <iframe src="https://drive.google.com/file/d/1NcOmbH7qcvZzDCGUSphRJzxbG3rxAdSP/preview"  title="YouTube video player" frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <iframe src="https://drive.google.com/file/d/1tFtv-LIzrEOzWalrZ3fWZDrj-aDDSorh/preview" title="YouTube video player" frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <iframe src="https://drive.google.com/file/d/1dGbi5uc3mMRIWzcc2Yqs5KV4bxds0kJj/preview" title="YouTube video player" frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                                  
                            <iframe src="https://drive.google.com/file/d/1zVN6q_MHT5K1uuddpbiO90tK6MUU7V_d/preview" title="YouTube video player" frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                                  
                            <iframe src="https://drive.google.com/file/d/1QyfgkLLj4WsoNKJtMD--dKkrQH675OLJ/preview" title="YouTube video player" frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                                  
               
                           </Slider>

                        </div>

                    </div>
            </div>

            <div className="section-5">
                <div className="w-100">
                    <div className="flex">
                        <div className="left">
                            <h1>YOUR OWN WEBSITE</h1>
                            <p>Do you want to have your own marketing took,
                                with your own content? A website customized
                                for you, will do just that. Put in your books,
                                your videos, testimonials, etc - with our
                                talented website creators.
                            </p>
                            <HashLink to="#book-cover4"> <button onClick={() => toAboutUs2('website')}> See Samples </button> </HashLink>
                        </div>
                        <div className="right">
                            <Image src={Website} alt="..." />
                        </div>
                    </div>
                </div>
            </div>

            <div className="book-cover4" id="book-cover4">
              <div className="w100 book-pc">
                    <div className="websites">
                        <img src = {web1} alt="" />
                        <div className="hover">
                            <a href="https://www.ava-phillips.com/" target="blank">Live Preview</a>
                        </div>
                    </div>  
                    <div className="websites">
                        <img src = {web2} alt="" />
                        <div className="hover">
                            <a href="https://www.paulettemarshall.com/" target="blank">Live Preview</a>
                        </div>
                    </div>  
                    <div className="websites">
                        <img src = {web3} alt="" />
                        <div className="hover">
                            <a href="https://www.21dvmm.com/" target="blank">Live Preview</a>
                        </div>
                    </div>  
                    <div className="websites">
                        <img src = {web4} alt="" />
                        <div className="hover">
                            <a href="https://www.author-williamhoy.com/" target="blank">Live Preview</a>
                        </div>
                    </div>  
                    <div className="websites">
                        <img src = {web5} alt="" />
                        <div className="hover">
                            <a href="https://www.thomasshipleyjr.com/" target="blank">Live Preview</a>
                        </div>
                    </div>  
                    <div className="websites">
                        <img src = {web6} alt="" />
                        <div className="hover">
                            <a href="https://www.proudrosalinda.com/" target="blank">Live Preview</a>
                        </div>
                    </div>  
    
              </div>

              <div className="w100 book-sp">
              <Slider {...settings}>
                            
                    <div className="websites">
                        <img src = {web1} alt="" />
                        <div className="hover">
                            <a href="https://www.ava-phillips.com/" target="blank">Live Preview</a>
                        </div>
                    </div>  
                    <div className="websites">
                        <img src = {web2} alt="" />
                        <div className="hover">
                            <a href="https://www.paulettemarshall.com/" target="blank">Live Preview</a>
                        </div>
                    </div>  
                    <div className="websites">
                        <img src = {web3} alt="" />
                        <div className="hover">
                            <a href="https://www.21dvmm.com/" target="blank">Live Preview</a>
                        </div>
                    </div>  
                    <div className="websites">
                        <img src = {web4} alt="" />
                        <div className="hover">
                            <a href="https://www.author-williamhoy.com/" target="blank">Live Preview</a>
                        </div>
                    </div>  
                    <div className="websites">
                        <img src = {web5} alt="" />
                        <div className="hover">
                            <a href="https://www.thomasshipleyjr.com/" target="blank">Live Preview</a>
                        </div>
                    </div>  
                    <div className="websites">
                        <img src = {web6} alt="" />
                        <div className="hover">
                            <a href="https://www.proudrosalinda.com/" target="blank">Live Preview</a>
                        </div>
                    </div>  
                    </Slider>
              </div>
            </div>

            <div className="bookreviews">
                <div className="w-100">
                    <div className="content">
                        <h1>THE US REVIEW OF BOOKS</h1>
                        <img src={usreview} alt="..." />    
                    </div>
                </div>
            </div>

            <section className="bookreviews-2">
            <Slider {...settings}>
                <div className="bg-review">
                    <img className="img pc" src={BGreview1} alt=""  />
                    <img className="img sp" src={BGreview1sp} alt=""  />
                    <div className="flex">
                        <div className="book">
                            <img src={bookreview1} alt="" />
                        </div>
                        <div className="desc white">
                            <div className="ttl">THE SAINT JAMES CONSPIRACY</div>
                            <div className="author">by Jessica Murphy</div>
                            <div className="content">The alternating narrative structure keeps readers guessing because of unpredictable shifts, turns, and switches. The fusion of a modern thriller with the often controversial and highly debated Gnostic beliefs regarding Jesus Christ almost reminds one of Angels and Demons. Readers who enjoy historical fiction with a sprinkle of spiritual enlightening and those who thrive an action thrillers will likely enjoy this book.</div>
                        </div>
                    </div>
                </div>
                <div className="bg-review">
                    <img  className="img pc"  src={BGreview2} alt=""  />
                    <img className="img sp" src={BGreview2sp} alt=""  />
                    <div className="flex">
                    <div className="book black">
                            <img src={bookreview2} alt="" />
                        </div>
                        <div className="desc">
                            <div className="ttl">THE NATURE OF GOOD GOVERNMENT</div>
                            <div className="author">by H. Doyle Smith</div>
                            <div className="content">
                            Though books concerning government, politics, and economics can sometimes be hard to comprehend, Smith's use of analogies to explain these elements makes some of his more difficult subjects accessible to all readers. This drawing upon life experience, such as his interest in how people interact and his work as a certified public accountant, gives Smith his unique view of effective government. Those wishing to understand how government works, or how it should work, will find much to contemplate in this offering.
                            </div>
                        </div>

                    </div>
                </div>
                <div className="bg-review">
                    <img  className="img pc"  src={BGreview3} alt=""  />
                    <img className="img sp" src={BGreview3sp} alt=""  />
                    <div className="flex">
                    <div className="book ">
                            <img src={bookreview3} alt="" />
                        </div>
                        <div className="desc white">
                            <div className="ttl">THROUGH THE RAINY SEASON: OUT OF THE FLOODS OF ADDICTION</div>
                            <div className="author">by Dylan Ward</div>
                            <div className="content">
                            With vivid descriptions, Martinez paints another part of the world as exotic as he seeks to rid his body of poison. His story is relatable, hypnotic, and unique as he articulates the mental and physical anguish of addiction that is harrowing to witness. Readers are made richer by Martinez's experience in this compelling read.
                            </div>
                        </div>

                    </div>
                </div>
                <div className="bg-review">
                    <img  className="img pc"  src={BGreview4} alt=""  />
                    <img className="img sp" src={BGreview4sp} alt=""  />
                    <div className="flex">
                    <div className="book">
                            <img src={bookreview4} alt="" />
                        </div>
                        <div className="desc white">
                            <div className="ttl">POEMS FROM THE EDGE</div>
                            <div className="author">by Ginny Worley</div>
                            <div className="content">
                            Throughout these pages, a strong theme is the poet's emphatic insistence for any reader who might be struggling with seemingly insurmountable circumstances to never give up. This is more than a book of poems. It can also be seen as an encouraging self-help guide and motivational testament directly from author to reader. Furthermore, Worley's work is a perfect example of the therapeutic healing nature that the writing process can and does provide for so many individuals
                            </div>
                        </div>
                      

                    </div>
                </div>
                
            </Slider>
            </section>

            <div className="contactus">
                <div className="w-100">
                    <div className="flex">
                        <form className="learn-form"  onSubmit={sendEmail}>
                            <span className="head">
                                <h1>Want to Learn More?</h1>
                                <h3>Request Your Free Publishing Consultation Below</h3>
                                <label>Fill our form to learn more about publishing with Stratton Press</label>
                            </span>
                            <span className="form">
                                <div className="manus">
                                    <label>Do you have a manuscript that is ready to publish? *</label>
                                    {/* <input type="text" placeholder="Yes, I am ready to publish today" name="manuscript"/> */}
                                    <select name="subject" id="cars" placeholder="Want to know more">
                                       <option value="Yes, I am ready to publish today." disabled selected>
                                        Yes, I am ready to publish today.
                                        </option>
                                        <option value="Yes. I am ready to publish today.">Yes. I am ready to publish today.</option>
                                        <option value="Yes. I am ready to publish 1-3 months.">Yes. I am ready to publish 1-3 months.</option>
                                        <option value="Yes. I am ready to publish 4-6 months">Yes. I am ready to publish 4-6 months.</option>
                                        <option value="Yes. I will be ready in more than 6 months.">Yes. I will be ready in more than 6 months.</option>
                                        <option value="No. I do not have a book or manuscript.">No. I do not have a book or manuscript.</option>
                                
                                    </select>
                                </div>
                                <div className="fname">
                                    <label>First Name</label>
                                    <input type="text" name="FName" required={true}/>
                                </div>
                                <div className="lname">
                                    <label>Last Name</label>
                                    <input type="text" name="LName" required={true}/>
                                </div>
                                <div className="email">
                                    <label>E-mail Address</label>
                                    <input type="text" name="email" required={true}/>
                                </div>
                                <div className="phone">
                                    <label>Phone</label>
                                    <input type="text" name="phone" id="phone" required={true}/>
                                </div>
                                <div className="foot">
                                    <button type="submit" className="send1">Request Free Consultation</button>
                                    <p className="privacy">
                                        By clicking “Request My Free Consultation”, you are providing
                                        your electronic signature, voluntarily authorizing Stratton 
                                        Publishing and its affiliates to contact you using a manual 
                                        or automated telephone dialing system and send you advertisement 
                                        or telemarketing messages by email or text/SMS/MMS message to 
                                        the address and phone number you have provided above. You are 
                                        not required to agree to this in order to buy products or 
                                        services from Stratton Publishing. You certify that you are 
                                        over the age of eighteen (18). You’ll get up to ten (10) messages 
                                        per month. Standard message and data rates may apply. Click here 
                                        to view our. <Link to="/privacy"  onClick={() => goToPolicy()}> privacy policy. </Link>
                                    </p>
                                </div>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
            <div className="channels-section">
                <div className="channel-header">
                    <p>AUTHORS' BOOKS ARE DISTRIBUTED IN THESE AMAZING CHANNELS</p>
                </div>
                <div className="channels-body">
                    <div className="amazon-kindle"><Image src={AmazonKindle} alt="..." /></div>
                    <div className="barnes-noble"><Image src={barnesNoble} alt="..." /></div>
                    <div className="chapters"><Image src={Chapters} alt="..." /></div>
                    <div className="indigo"><Image src={Indigo} alt="..." /></div>
                    <div className="ingram"><Image src={Ingram} alt="..." /></div>
                    <div className="lightning-source"><Image src={LightningSource} alt="..." /></div>
                </div>
            </div>
            <FooterComp />
        </div>
        
    );
};

export default AboutUs;