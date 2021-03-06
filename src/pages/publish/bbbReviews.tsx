import React, { Component } from 'react'
import $ from "jquery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BBBRating from "../../assets/images/icon-image/bbb logo.png";

export class bbbReviews extends Component {

  render() {


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
      // React.useEffect(() => {
      //   $(".toHide").removeClass("display-block");
      // },[])
  
      
  $(".slick-arrow ").click(function(){
    $(".toHide").removeClass("display-block");
  });

  
  // $(".readMore").click(function(){
  //   var text :any = document.getElementById("readMore")
    
  //   // $(".toHide").toggle();
  //   if (text.innerHTML === "Read More") {
  //      $(".toHide").addClass("display-block");
  //     text.innerHTML = "Read Less";
  //   } else {
  //     $(".toHide").removeClass("display-block");
  //     text.innerHTML = "Read More";
  //   }
    
  // })

    return (
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
                    fair, and I took the offer. </p><p className="toHide"> I am now under contract for six
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
                    **** ** *** ********. <p className="toHide">  I want to give special commendation to
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
                    compelled to hear her out. </p><p className="toHide"> I did explain that I wasn't
                    interested in re-publishing my first book yet again, but
                    that I was engaged in writing my second book and hadn't yet
                    committed to any particular publisher. She took her time and
                    told me what they could provide for me and asked if I'd be
                    comfortable sending a few pages that they may access to see
                    if my material would be acceptable.So, needless to say,
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
                    to quarantine and lockdowns but it???s great to know all
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

    )
  }
}

export default bbbReviews

function goToPolicy(): void {
    throw new Error('Function not implemented.');
}
