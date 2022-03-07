import * as React from "react";
import { HashLink } from "react-router-hash-link";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import $ from "jquery";
import Swal from "sweetalert2";
import HeaderSection from "../../common/Navigation/header.component";
import Navigation from "../../common/Navigation/navigation.component";
import FooterComp from "../../common/Footer/footer.component";
import Image from "../../common/Image/image.component";
import Rectangle from "../../assets/images/backgrounds/Rounded Rectangle white.png";
import Carousel from "nuka-carousel";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BookLayer from "../../assets/images/icon-image/booklayers.png";
import BookMark from "../../assets/images/icon-image/bookmark.png";
import BookPencil from "../../assets/images/icon-image/bookpencil.png";
import Camera from "../../assets/images/icon-image/camera.png";
import OpenBook from "../../assets/images/icon-image/openbook.png";
import Papers from "../../assets/images/icon-image/papers.png";
import Radio from "../../assets/images/icon-image/radio.png";
import Screen from "../../assets/images/icon-image/screen.png";
import SocialMeida from "../../assets/images/icon-image/socialmedia.png";
import WorldWide from "../../assets/images/icon-image/worldwide.png";
import Youtube from "../../assets/images/icon-image/youtube.png";
import BBBRating from "../../assets/images/icon-image/bbb logo.png";
import AmazonKindle from "../../assets/images/logo/Amazon Kindle.png";
import barnesNoble from "../../assets/images/logo/barnes & noble.png";
import Chapters from "../../assets/images/logo/chapters.png";
import Indigo from "../../assets/images/logo/indigo.png";
import Ingram from "../../assets/images/logo/ingram.png";
import LightningSource from "../../assets/images/logo/lightning source.png";
import PublishBg from "../../assets/images/backgrounds/publish-bg.png";

import customized from "../../assets/images/icon-image/Customized Cover Design.png";
import advanced from "../../assets/images/icon-image/Advanced Editing.png";
import interior from "../../assets/images/icon-image/Interior Design and Book.png";
import paperback from "../../assets/images/icon-image/Paperback, Hardback, Ebook Formatting.png";
import worldwide  from "../../assets/images/icon-image/Worldwide Distribution.png";
import social from "../../assets/images/icon-image/Social media_website creation.png";
import radio from "../../assets/images/icon-image/Radio INterview.png";
import  youtube from "../../assets/images/icon-image/yt campaign.png";
import screenplay from "../../assets/images/icon-image/Screenplay.png";
import translation from "../../assets/images/icon-image/Translation Services_B.png";



import intlTelInput from "intl-tel-input";

interface Props {}

const PublishContainer: React.FC<Props> = () => {
  const history = useHistory();

  React.useEffect(() => {
    document.title = "Stratton Press";

    var input = document.getElementById("phone") as HTMLCanvasElement;
    intlTelInput(input, {
      geoIpLookup: function (callback) {
        $.get("http://ipinfo.io", function () {}, "jsonp").always(function (
          resp
        ) {
          var countryCode = resp && resp.country ? resp.country : "";
          callback(countryCode);
        });
      },

      hiddenInput: "full_number",
      nationalMode: true,
      separateDialCode: true,
      utilsScript: "intl-tel-input/build/js/utils.js",
    });
  }, []);

  const goToPolicy = () => {
    history.push("/privacy");
    window.scrollTo(0, 0);
    behavior: "smooth";
  };
  //Uncomment when ready to use, just call function
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    $(".send1").addClass("hidden");
    $(".loader").addClass("display");
    // emailjs.sendForm('gmail', 'contact_template', e.currentTarget, 'user_norNgT0B71lOeGvDG16ph') FOR GMAIL
    emailjs
      .sendForm(
        "sender",
        "publish/aboutUs_template",
        e.currentTarget,
        "user_norNgT0B71lOeGvDG16ph"
      )
      .then(
        (result) => {
          $(".send1").removeClass("hidden");
          $(".loader").removeClass("display");
          Swal.fire(
            "EMAIL SENT",
            "Thank you for reaching out to us, our representative will reach out to you soon",
            "success"
          );
        },
        (error) => {
          $(".send1").removeClass("hidden");
          $(".loader").removeClass("display");
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      );
    e.currentTarget.reset();
  };
 
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
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    // adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <HeaderSection bgcolor="#043439" />
      <Navigation />
      <div className="publish-1" id="publish-1">
        <div className="loader"></div>
        <div className="w-100">    {/* <img src={PublishBg} alt="" /> */}
    
          <div className="flex">
            <div className="left">
              <h1>
                <span>PUBLISHING</span> made accessible
              </h1>
              <h2>"Can I really get my book published?"</h2>

              <p>
                For aspiring authors, publishing a book seems daunting. And yes,
                such a concern is Understandable. It takes a whole team to
                publish a book, after all. But before it gets into your nerves,
                let us assure you that we can take that load off you. We have a
                complete set of publishing services and a publishing team that
                sets you up from book cover, to distribution at Amazon, to radio
                interviews. So, just focus on writing and finishing your
                beautiful story. Once you're ready, we'll get you out there.
              </p>

              <p>For the world to see.</p>
            </div>
            <div className="right">
            
            </div>
          </div>
        </div>
      </div>
      <div className="publish-2">
        <div className="w-100">
          <div className="flex">
            <div className="left">
              <h1>Come on, take that leap of faith.</h1>
            </div>
            <div className="right">
              <HashLink to="/publish#contactus">
                {" "}
                <button>Check the possibilities.</button>{" "}
              </HashLink>
            </div>
          </div>
        </div>
      </div>
      <div className="publish-3">
        <div className="w-100">
          <div className="container">
            <div className="left">
              <img src={customized} alt="..." />
            </div>
            <div className="right">
              <h1>Customized Cover Design</h1>
              <p>
                You have your manuscript ready but you have no idea how to
                design a book cover. Don't worry, we got this. Stratton Press
                offers unlimited book cover consultation to make sure the
                designer and you will collaboratively create the artwork you
                envision for your book cover. You need not provide for the
                images too, we got that COVERed (pun intended). Some of our book
                covers have garnered awards, so you're in good hands.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="left">
              <img src={advanced} alt="..." />
            </div>
            <div className="right">
              <h1>Advanced Editing</h1>
              <p>
                Even the best of writers need good copyeditors. We do a 3-step
                rigorous process that include development editing, copy editing
                and proofreading. If you have supplied some citations,
                footnotes, or end notes, we can properly lay those out too, into
                your book.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="left">
              <img src={interior} alt="..." />
            </div>
            <div className="right">
              <h1>Interior Design and Book Layout</h1>
              <p>
                Preparing your book's interior, entail professional work. We
                will ensure your pages are correctly arranged, your images
                properly positioned, your text in the best format - all to
                effect a great experience for your readers. Your content is
                kind, so let's make is shine. Leave the nitty gritty to us.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="left">
              <img src={paperback} alt="..." />
            </div>
            <div className="right">
              <h1>Paperback, Hardback, Ebook Formatting</h1>
              <p>
                For an easy read, do you want your book accessible as an e-book?
                Or a hardback copy shippable by Amazon? Be it paperback,
                hardback, or an electronic book form - we can offer all these
                options for ease and varying preference of your potential
                readers.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="left">
              <img src={worldwide} alt="..." />
            </div>
            <div className="right">
              <h1>Worldwide Distribution</h1>
              <p>
                When your book is ready, we’ll assign a unique ISBN for your
                title. This now allows your work to be showcased for the world
                to access. Have an international distribution through Amazon,
                Barnes and Noble, Lightning Source, Chapters, Indigo and other
                online retailers.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="left">
              <img src={social} alt="..." />
            </div>
            <div className="right">
              <h1>Social Media Marketing and Website Creation</h1>
              <p>
                It’s a new world now and the internet has become a global
                marketplace. Having your own website and creating a social media
                presence for you and your book gets you “out there”. Don’t
                worry, we can set them up for you, and if you need so, we can
                manage it too.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="left">
              <img src={radio} alt="..." />
            </div>
            <div className="right">
              <h1>Radio Interview and Book Reviews</h1>
              <p>
                Take that wonderful opportunity to be heard and talk about your
                book, your inspiration when writing it, and your future plans.
                Ric Bratton always skillfully brings out the best parts of your
                book as well as beautifully presents You and Your story, to his
                audience in This Week in America.
                <br />
                <br />
                Widely-known US Review of Books can also give an unbiased review
                of your book
                <br />– which you may add into your book’s back cover and your
                website.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="left">
              <img src={youtube} alt="..." />
            </div>
            <div className="right">
              <h1>Youtube Campaign</h1>
              <p>
                Your book trailer will be featured like an advertisement within
                various, related Youtube video content. Surely a cool way to
                reach your target market.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="left">
              <img src={screenplay} alt="..." />
            </div>
            <div className="right">
              <h1>Screenplay</h1>
              <p>
                Do you feel that your book can be the next movie success? Let
                Stratton Press improve your chances by transposing your book
                into screenplay form that agents, movie writers, producers and
                directors would appreciate
              </p>
            </div>
          </div>
          <div className="container">
            <div className="left">
              <img src={translation} alt="..." />
            </div>
            <div className="right">
              <h1>Translation Services</h1>
              <p>
                Do you think your book has a special niche with a foreign
                market? We can have your book translated into German and French.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="publish-4">
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
      <div></div>
      <div className="publish-5" id="publish-5">
        <div className="w-100">
          <div className="flex">
            <div className="left">
              <img src={BBBRating} alt="..." />
            </div>
            <div className="right">
              <Slider {...settings}>
                <div>
                  <h3>August 25,2021</h3>
                  <p>
                    To whom it may concern,I am writing this review with
                    gratitude toward Stratton Press Publishing. Last fall, I
                    received a phone call from a project manager from Stratton.
                    It became more of a friendly call than a request for a
                    business arrangement. He mentioned a book that I had
                    recently published with another publisher.Of course, I was
                    skeptical about republishing and spent a good deal of time
                    investigating Stratton. I was soon convinced that it was
                    fair, and I took the offer.<p className="toHide"> I am now under contract for six
                    books. One has been released and is available for sale. Two
                    are in the editing process, one I am working on daily and is
                    near completion and two are in the wings. Working with
                    Stratton has been one of the pleasures of my life. My
                    project manager has inspired me to write and paint and do
                    all the creative endeavors I used to do. He calls several
                    times a week and inspires me. Everyone from the company that
                    I have dealt with have been professional and timely with
                    projects, and our association has only been since last
                    November. I cannot believe we have accomplished so much in
                    such a short time. I couldn't be more pleased.
                    </p>
                    </p>
                    <a className="readMore" id="readMore">Read More</a>
                  <span>Jean I.</span>
                </div>

                <div>
                  <h3>August 31,2020</h3>
                  <p>
                    To whom it may concern, To be sure, more than not, TheS
                    Better Business Bureau receives more negative reviews than
                    positive compliments. Well, this one surely is a positive
                    one! I recommend Stratton Press because they have gone
                    through the rough times of the pandemic and managed to
                    adjust and conduct business as regularly as possible which
                    is a compliment of its own especially in publishing my book,
                    **** ** *** ********. <p className="toHide">
                    I want to give special commendation to
                    Jem G*****, Senior Acquisition Specialist at Stratton Press,
                    for her excellent expertise. Clearly, she went above and
                    beyond the call of duty in the personable way she treated me
                    throughout the whole process of editing, proofing and
                    coordinating her team. Her consistency and persistence were
                    so very much appreciated. Then on top of all this, her
                    personality traits put a finishing touch on all of the
                    above. In short, Jem has a professional style with a
                    personal touch. Therefore, I heartily recommend Stratton
                    Press to anyone needing to have his/her book published. By
                    the way, their fee is $999.00 for the entire production of
                    the book. So, I recommend that you contact Jem G***** and
                    she will professionally and promptly guide you through the
                    process. Moreover, Stratton Press has already gotten me
                    positive results through their marketing program, even to
                    the extent of letters of positive feedback about my book
                    before it is printed!
                    </p>
                  </p>
                  <a className="readMore" id="readMore">Read More</a>
                  <span>Dr. Donald H. S.</span>
                </div>

                <div>
                  <h3>August 06,2020</h3>
                  <p>
                    A couple of years after publishing my first book with
                    another self-publisher, I had gotten a flurry of calls from
                    other publishers wanting me to re-publish it with them. I
                    did end up re-publishing with yet another self-publisher,
                    but the calls kept coming. One day I was contacted by a
                    young lady named Razie from Stratton Press. There was a
                    sense of honesty and professionalism coming from her and as
                    I would normally quickly dismiss any other caller, I felt
                    compelled to hear her out. I did explain that I wasn't
                    interested in re-publishing my first book yet again, but
                    that I was engaged in writing my second book and hadn't yet
                    committed to any particular publisher. She took her time and
                    told me what they could provide for me and asked if I'd be
                    comfortable sending a few pages that they may access to see
                    if my material would be acceptable.<p className="toHide"> So, needless to say,
                    they liked what I had and I felt comfortable with what they
                    offered. Not to mention that Razie was top notch and ended
                    up overseeing things for me all the way through even when my
                    manuscript was with other team members like Jerry and
                    Bradlee, who were also very quick to respond and
                    professional with what they were charged to do. I was
                    impressed with the cover design team and design layout of
                    the book itself. I will say that the editing took a little
                    longer than they had originally told me, but that was
                    primarily due to the world crisis, causing layoffs and
                    disruptions everywhere. They did work through it and kept me
                    up to date. If I had any questions or concerns, everyone
                    starting from Razie on down always encouraged me to contact
                    them. As of this writing my book is live and I have my
                    author copies and am very happy with them. They still have a
                    few more things to do for me per my contract, but I'm
                    confident that everything will be fulfilled in a timely and
                    professional manor. I have two more books that I will be
                    writing and wouldn't hesitate to let Stratton Press handle
                    them. And, maybe even re-publish my first book again down
                    the road.
                    </p>
                  </p>
                  <a className="readMore" id="readMore">Read More</a>
                  <span>Dr. Ron</span>
                </div>

                <div>
                  <h3>May 5,2021</h3>
                  <p>
                    So far Stratton is wonderful to work with-so far everyone I
                    have talked to has been extremely polite and sympathetic to
                    my goals. Only probables..they need to have a Fax available.
                    Lots of people still use it. **** ***** *******
                  </p>
                  <span>Roland T.</span>
                </div>

                <div>
                  <h3>May 5,2020</h3>
                  <p>
                    Stratton Press had a superb team that walked with me through
                    the process of publishing my book. Jerry, Steve and
                    Christine were very professional and did not sacrifice the
                    quality for the sake of time. Jerry has been very patience
                    and available whenever I had questions or concerns. Steve
                    and Christine were equally helpful, and interacting with
                    Dean has been very enriching. It has always been my prayer
                    that I could develop a relationship with a publishing
                    company that would see my potential and I believe Stratton
                    Press is that company. At the time of my experience with
                    Stratton Press, though the Country and World were
                    experiencing unprecedented challenges in life, yet they
                    continued to communicate and work with me. I highly
                    recommended them to any serious author. Thanks a lot. **
                    *****
                  </p>
                  <span>Rufus R.</span>
                </div>

                <div>
                  <h3>September 5,2019</h3>
                  <p>
                    I had published three books, before I began work with
                    Stratton Press. So far, I have been very satisfied with the
                    work its people have done. They have done everything
                    promised, and done it well. And my sales contact, Razie, has
                    kept me informed on what was happening and has answered all
                    of my questions. I am very happy, at this point, that I
                    chose Stratton Press to publish what was to be my last book.
                    And now, three others are in the process of being updated
                    and reprinted.. *** *******
                  </p>
                  <span>Shanna E.</span>
                </div>

                <div>
                  <h3>December 12,2019</h3>
                  <p>
                    I am very pleased with the staff of Stratton Press. I'm a
                    new author and this is a new experience for me. Jerry
                    T******* guided me through all the processes necessary to
                    publish my book.. I highly recommend Stratton Press for all
                    writers, old or new.
                  </p>
                  <span>Shanna E</span>
                </div>

                <div>
                  <h3>August 20,2020</h3>
                  <p>
                    I have worked with publishing companies before and I am
                    really happy that I chose Stratton Press to complete my book
                    project. I especially wish to thank Ricardo M*** and Edward
                    P***** for their help in completing this book. Ricardo was
                    very helpful and was in constant contact with me concerning
                    every stage of the book. He took a special interest is me as
                    an author and in the book. Edward was very helpful in
                    finalizing my project. There was some problems with the
                    illustrations, but we finally got what was needed. I am
                    looking forward to seeing my book in 6 to 8 weeks. Thanks
                    again for a job well done.
                  </p>
                  <span>Robert M. P.</span>
                </div>
                <div>
                  <h3>July 10,2019</h3>
                  <p>
                    Stratton Press has been a very kind and professional partner
                    throughout the cover design, editing, and interior layout
                    processes. The publishing managers, customer service reps.,
                    and their editor have been attentive and enthusiastic.
                    Compared to other self-publishers, they seem to be a very
                    good value for the services received. But, as my first book
                    published through them has yet to be released and sold, I
                    will have to withhold my final reviews.
                  </p>
                  <span>Erik D.J. O'Brien</span>
                </div>

                <div>
                  <h3>August 20,2020</h3>
                  <p>
                    I have been working with Stratton Press for a little more
                    than 6 months and I find their customer service to be
                    excellent. They are in constant contact with me and I am in
                    the process of getting a second book published with them.
                  </p>
                  <span>Paul D.</span>
                </div>

                <div>
                  <h3>October 29, 2021</h3>
                  <p>
                    I am grateful for the time and cooperation over the past few
                    years of writing and publishing 3 books with Stratton Press.
                    I know that during the pandemic, it has been a hard time due
                    to quarantine and lockdowns but it’s great to know all
                    progressed efficiently and the team certainly did make an
                    excellent job of producing my books live! In the future, it
                    will be a pleasure to submit some of my manuscripts and
                    receive such spontaneous and great customer service via
                    email contact. I really recommend this publisher to new
                    authors who are testing the waters to write and publish more
                    novels! Thank you ***** and **** for your encouragement and
                    time during a period of self publishing, and to yourselves
                    and to your team. Wish you all success in your publishing
                    services. Blessings and much appreciation for such great
                    team work!
                  </p>
                  <span>Angela H.</span>
                </div>
              </Slider>
              <div className="rating">
                <h2>Showing our 4 and 5 star reviews</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contactus" id="contactus">
        <div className="w-100">
          <div className="flex">
            <form className="learn-form" onSubmit={sendEmail}>
              <span className="head">
                <h1>Want to Learn More?</h1>
                <h3>Request Your Free Publishing Consultation Below</h3>
                <label>
                  Fill our form to learn more about publishing with Stratton
                  Press
                </label>
              </span>
              <span className="form">
                <div className="manus">
                  <label>
                    Do you have a manuscript that is ready to publish *
                  </label>
                  {/* <input type="text" placeholder="Yes, I am ready to publish today" name="manuscript"/> */}
                  <select name="subject" id="cars">
                    <option value="Yes, I am ready to publish today">
                      Yes, I am ready to publish today
                    </option>
                    <option value="Yes. I am ready to publish today.">
                      Yes. I am ready to publish today.
                    </option>
                    <option value="Yes. I am ready to publish 1-3 months.">
                      Yes. I am ready to publish 1-3 months.
                    </option>
                    <option value="Yes. I am ready to publish 4-6 months.">
                      Yes. I am ready to publish 4-6 months.
                    </option>
                    <option value="Yes. I will be ready in more than 6 months.">
                      Yes. I will be ready in more than 6 months.
                    </option>
                    <option value="No. I do not have a book or manuscript.">
                      No. I do not have a book or manuscript.
                    </option>
                  </select>
                </div>
                <div className="fname">
                  <label>First Name</label>
                  <input type="text" name="FName" required={true} />
                </div>
                <div className="lname">
                  <label>Last Name</label>
                  <input type="text" name="LName" required={true} />
                </div>
                <div className="email">
                  <label>E-mail Address</label>
                  <input type="text" name="email" required={true} />
                </div>
                <div className="phone">
                  <label>Phone</label>
                  <input type="text" name="phone" id="phone" required={true} />
                </div>
                <div className="foot">
                  <button type="submit" className="send1">
                    Request Free Consultation
                  </button>
                  <p className="privacy">
                    By clicking “Request My Free Consultation”, you are
                    providing your electronic signature, voluntarily authorizing
                    Stratton Publishing and its affiliates to contact you using
                    a manual or automated telephone dialing system and send you
                    advertisement or telemarketing messages by email or
                    text/SMS/MMS message to the address and phone number you
                    have provided above. You are not required to agree to this
                    in order to buy products or services from Stratton
                    Publishing. You certify that you are over the age of
                    eighteen (18). You’ll get up to ten (10) messages per month.
                    Standard message and data rates may apply. Click here to
                    view our{" "}
                    <Link to="/privacy" onClick={() => goToPolicy()}>
                      privacy policy{" "}
                    </Link>
                    .
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

export default PublishContainer;
