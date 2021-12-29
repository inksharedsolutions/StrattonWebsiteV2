"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var react_router_hash_link_1 = require("react-router-hash-link");
var emailjs_com_1 = require("emailjs-com");
var sweetalert2_1 = require("sweetalert2");
var header_component_1 = require("../../common/Navigation/header.component");
var navigation_component_1 = require("../../common/Navigation/navigation.component");
var footer_component_1 = require("../../common/Footer/footer.component");
var image_component_1 = require("../../common/Image/image.component");
var react_slick_1 = require("react-slick");
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");
var booklayers_png_1 = require("../../assets/images/icon-image/booklayers.png");
var bookmark_png_1 = require("../../assets/images/icon-image/bookmark.png");
var bookpencil_png_1 = require("../../assets/images/icon-image/bookpencil.png");
var camera_png_1 = require("../../assets/images/icon-image/camera.png");
var openbook_png_1 = require("../../assets/images/icon-image/openbook.png");
var papers_png_1 = require("../../assets/images/icon-image/papers.png");
var radio_png_1 = require("../../assets/images/icon-image/radio.png");
var socialmedia_png_1 = require("../../assets/images/icon-image/socialmedia.png");
var worldwide_png_1 = require("../../assets/images/icon-image/worldwide.png");
var youtube_png_1 = require("../../assets/images/icon-image/youtube.png");
var bbb_logo_png_1 = require("../../assets/images/icon-image/bbb logo.png");
var Amazon_Kindle_png_1 = require("../../assets/images/logo/Amazon Kindle.png");
var barnes___noble_png_1 = require("../../assets/images/logo/barnes & noble.png");
var chapters_png_1 = require("../../assets/images/logo/chapters.png");
var indigo_png_1 = require("../../assets/images/logo/indigo.png");
var ingram_png_1 = require("../../assets/images/logo/ingram.png");
var lightning_source_png_1 = require("../../assets/images/logo/lightning source.png");
var publish_bg_png_1 = require("../../assets/images/backgrounds/publish-bg.png");
var intlTelInput = require("intl-tel-input");
var PublishContainer = function () {
    React.useEffect(function () {
        document.title = "Stratton Press";
        var input = document.getElementById("phone");
        intlTelInput(input, {
            // allowDropdown: false,
            // autoHideDialCode: false,
            // autoPlaceholder: "off",
            // dropdownContainer: document.body,z
            // excludeCountries: ["us"],
            // formatOnDisplay: false,
            // geoIpLookup: function(callback) {
            //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
            //     var countryCode = (resp && resp.country) ? resp.country : "";
            //     callback(countryCode);
            //   });
            // },   
            // hiddenInput: "full_number",
            // localizedCountries: { 'de': 'Deutschland' },
            // nationalMode: false,
            // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
            // placeholderNumberType: "MOBILE",
            // preferredCountries: ['cn', 'jp'],
            separateDialCode: true,
            utilsScript: "build/js/utils.js"
        });
    }, []);
    //Uncomment when ready to use, just call function
    var sendEmail = function (e) {
        e.preventDefault();
        // emailjs.sendForm('gmail', 'contact_template', e.currentTarget, 'user_norNgT0B71lOeGvDG16ph') FOR GMAIL
        emailjs_com_1["default"].sendForm('outlook1', 'publish/aboutUs_template', e.currentTarget, 'user_norNgT0B71lOeGvDG16ph')
            .then(function (result) {
            sweetalert2_1["default"].fire('EMAIL SENT', 'Thank you for reaching out to us, our representative will reach out to you soon', 'success');
        }, function (error) {
            sweetalert2_1["default"].fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            });
        });
        e.currentTarget.reset();
    };
    var responsive = {
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
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
    return (React.createElement("div", null,
        React.createElement(header_component_1["default"], { bgcolor: "#043439" }),
        React.createElement(navigation_component_1["default"], null),
        React.createElement("div", { className: "publish-1", id: "publish-1" },
            React.createElement("div", { className: "w-100" },
                React.createElement("div", { className: "flex" },
                    React.createElement("div", { className: "left" },
                        React.createElement("h1", null,
                            React.createElement("span", null, "PUBLISHING"),
                            " made accessible"),
                        React.createElement("p", null, "\"Can I really get my book published\""),
                        React.createElement("p", null, "Far aspiring authors, publishing a book seems daunting. And  yes, such a concern is Understandable. It takes a whole team to publish a book, after all. But before it gets into your nerves, let us assure you that we can take that load off you. We have a complete set of publishing services and a publishing team that sets you up from book cover, to distribution at Amazon, to radio interviews. So, just focus on writing and finishing your beautiful story. Once you're ready, we'll get you out there."),
                        React.createElement("p", null, "For the world to see.")),
                    React.createElement("div", { className: "right" },
                        React.createElement("img", { src: publish_bg_png_1["default"], alt: "" }))))),
        React.createElement("div", { className: "publish-2" },
            React.createElement("div", { className: "w-100" },
                React.createElement("div", { className: "flex" },
                    React.createElement("div", { className: "left" },
                        React.createElement("h1", null, "Come on, take that leap of faith.")),
                    React.createElement("div", { className: "right" },
                        React.createElement(react_router_hash_link_1.HashLink, { to: "/publish#contactus" },
                            " ",
                            React.createElement("button", null, "Check the possibilities."),
                            " "))))),
        React.createElement("div", { className: "publish-3" },
            React.createElement("div", { className: "w-100" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "left" },
                        React.createElement("img", { src: bookmark_png_1["default"], alt: "..." })),
                    React.createElement("div", { className: "right" },
                        React.createElement("h1", null, "Customized Cover Design"),
                        React.createElement("p", null, "You have your manuscript ready but you have no idea how to design a book cover. Don't worry, we got this. Stratton Press offers unlimited book cover consultation to make sure the designer and you will collaboratively create the artwork you envision for your book cover. You need not provide for the images too, we got that COVERed (pun intended). Some of our book covers have garnered awards, so you're in good hands."))),
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "left" },
                        React.createElement("img", { src: openbook_png_1["default"], alt: "..." })),
                    React.createElement("div", { className: "right" },
                        React.createElement("h1", null, "Advanced Editing"),
                        React.createElement("p", null, "Even the best of writers need good copyeditors. We do a 3-step rigorous process that include development editing, copy editing and proofreading. If you have supplied some citations, footnotes, or end notes, we can properly lay those out too, into your book."))),
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "left" },
                        React.createElement("img", { src: bookpencil_png_1["default"], alt: "..." })),
                    React.createElement("div", { className: "right" },
                        React.createElement("h1", null, "Interior Design and Book Layout"),
                        React.createElement("p", null, "Preparing your book's interior, entail professional work. We will ensure your pages are correctly arranged, your images properly positioned, your text in the best format - all to effect a great experience for your readers. Your content is kind, so let's make is shine. Leave the nitty gritty to us."))),
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "left" },
                        React.createElement("img", { src: booklayers_png_1["default"], alt: "..." })),
                    React.createElement("div", { className: "right" },
                        React.createElement("h1", null, "Paperback, Hardback, Ebook Formatting"),
                        React.createElement("p", null, "For an easy read, do you want your book accessible as an e-book? Or a hardback copy shippable by Amazon? Be it paperback, hardback, or an electronic book form - we can offer all these options for ease and varying preference of your potential readers."))),
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "left" },
                        React.createElement("img", { src: worldwide_png_1["default"], alt: "..." })),
                    React.createElement("div", { className: "right" },
                        React.createElement("h1", null, "Worldwide Distribution"),
                        React.createElement("p", null, "When your book is ready, we\u2019ll assign a unique ISBN for your title. This now allows your work to be showcased for the world to access. Have an international distribution through Amazon, Barnes and Noble, Lightning Source, Chapters, Indigo and other online retailers."))),
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "left" },
                        React.createElement("img", { src: socialmedia_png_1["default"], alt: "..." })),
                    React.createElement("div", { className: "right" },
                        React.createElement("h1", null, "Social Media Marketing and Website Creation"),
                        React.createElement("p", null, "It\u2019s a new world now and the internet has become a global marketplace. Having your own website and creating a social media presence for you and your book gets you \u201Cout there\u201D. Don\u2019t worry, we can set them up for you, and if you need so, we can manage it too."))),
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "left" },
                        React.createElement("img", { src: radio_png_1["default"], alt: "..." })),
                    React.createElement("div", { className: "right" },
                        React.createElement("h1", null, "Radio Interview and Book Reviews"),
                        React.createElement("p", null,
                            "Take that wonderful opportunity to be heard and talk about your book, your inspiration when writing it, and your future plans. Ric Bratton always skillfully brings out the best parts of your book as well as beautifully presents You and Your story, to his audience in This Week in America.",
                            React.createElement("br", null),
                            React.createElement("br", null),
                            "Widely-known US Review of Books can also give an unbiased review of your book",
                            React.createElement("br", null),
                            "\u2013 which you may add into your book\u2019s back cover and your website."))),
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "left" },
                        React.createElement("img", { src: youtube_png_1["default"], alt: "..." })),
                    React.createElement("div", { className: "right" },
                        React.createElement("h1", null, "Youtube Campaign"),
                        React.createElement("p", null, "Your book trailer will be featured like an advertisement within various, related Youtube video content. Surely a cool way to reach your target market."))),
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "left" },
                        React.createElement("img", { src: camera_png_1["default"], alt: "..." })),
                    React.createElement("div", { className: "right" },
                        React.createElement("h1", null, "Screenplay"),
                        React.createElement("p", null, "Do you feel that your book can be the next movie success? Let Stratton Press improve your chances by transposing your book into screenplay form that agents, movie writers, producers and directors would appreciate"))),
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "left" },
                        React.createElement("img", { src: papers_png_1["default"], alt: "..." })),
                    React.createElement("div", { className: "right" },
                        React.createElement("h1", null, "Translation Services"),
                        React.createElement("p", null, "Do you think your book has a special niche with a foreign market? We can have your book translated into German and French."))))),
        React.createElement("div", null),
        React.createElement("div", { className: "publish-5", id: "publish-5" },
            React.createElement("div", { className: "w-100" },
                React.createElement("div", { className: "flex" },
                    React.createElement("div", { className: "left" },
                        React.createElement("img", { src: bbb_logo_png_1["default"], alt: "..." })),
                    React.createElement("div", { className: "right" },
                        React.createElement(react_slick_1["default"], __assign({}, settings),
                            React.createElement("div", null,
                                React.createElement("h3", null, "August 25,2021"),
                                React.createElement("p", null, "To whom it may concern,I am writing this review with gratitude toward Stratton Press Publishing. Last fall, I received a phone call from a project manager from Stratton. It became more of a friendly call than a request for a business arrangement. He mentioned a book that I had recently published with another publisher. Of course, I was skeptical about republishing and spent a good deal of time investigating Stratton. I was soon convinced that it was fair, and I took the offer. I am now under contract for six books. One has been released and is available for sale. Two are in the editing process, one I am working on daily and is near completion and two are in the wings. Working with Stratton has been one of the pleasures of my life. My project manager has inspired me to write and paint and do all the creative endeavors I used to do. He calls several times a week and inspires me. Everyone from the company that I have dealt with have been professional and timely with projects, and our association has only been since last November. I cannot believe we have accomplished so much in such a short time. I couldn't be more pleased."),
                                React.createElement("span", null, "Jean I.")),
                            React.createElement("div", null,
                                React.createElement("h3", null, "August 31,2020"),
                                React.createElement("p", null, "To whom it may concern, To be sure, more than not, The Better Business Bureau receives more negative reviews than positive compliments. Well, this one surely is a positive one! I recommend Stratton Press because they have gone through the rough times of the pandemic and managed to adjust and conduct business as regularly as possible which is a compliment of its own especially in publishing my book, **** ** *** ********. I want to give special commendation to Jem G*****, Senior Acquisition Specialist at Stratton Press, for her excellent expertise. Clearly, she went above and beyond the call of duty in the personable way she treated me throughout the whole process of editing, proofing and coordinating her team. Her consistency and persistence were so very much appreciated. Then on top of all this, her personality traits put a finishing touch on all of the above. In short, Jem has a professional style with a personal touch. Therefore, I heartily recommend Stratton Press to anyone needing to have his/her book published. By the way, their fee is $999.00 for the entire production of the book. So, I recommend that you contact Jem G***** and she will professionally and promptly guide you through the process. Moreover, Stratton Press has already gotten me positive results through their marketing program, even to the extent of letters of positive feedback about my book before it is printed!"),
                                React.createElement("span", null, "Dr. Donald H. S.")),
                            React.createElement("div", null,
                                React.createElement("h3", null, "August 06,2020"),
                                React.createElement("p", null, "A couple of years after publishing my first book with another self-publisher, I had gotten a flurry of calls from other publishers wanting me to re-publish it with them. I did end up re-publishing with yet another self-publisher, but the calls kept coming. One day I was contacted by a young lady named Razie from Stratton Press. There was a sense of honesty and professionalism coming from her and as I would normally quickly dismiss any other caller, I felt compelled to hear her out. I did explain that I wasn't interested in re-publishing my first book yet again, but that I was engaged in writing my second book and hadn't yet committed to any particular publisher. She took her time and told me what they could provide for me and asked if I'd be comfortable sending a few pages that they may access to see if my material would be acceptable. So, needless to say, they liked what I had and I felt comfortable with what they offered. Not to mention that Razie was top notch and ended up overseeing things for me all the way through even when my manuscript was with other team members like Jerry and Bradlee, who were also very quick to respond and professional with what they were charged to do. I was impressed with the cover design team and design layout of the book itself. I will say that the editing took a little longer than they had originally told me, but that was primarily due to the world crisis, causing layoffs and disruptions everywhere. They did work through it and kept me up to date. If I had any questions or concerns, everyone starting from Razie on down always encouraged me to contact them. As of this writing my book is live and I have my author copies and am very happy with them. They still have a few more things to do for me per my contract, but I'm confident that everything will be fulfilled in a timely and professional manor. I have two more books that I will be writing and wouldn't hesitate to let Stratton Press handle them. And, maybe even re-publish my first book again down the road."),
                                React.createElement("span", null, "Dr. Ron")),
                            React.createElement("div", null,
                                React.createElement("h3", null, "May 5,2021"),
                                React.createElement("p", null, "So far Stratton is wonderful to work with-so far everyone I have talked to has been extremely polite and sympathetic to my goals. Only probables..they need to have a Fax available. Lots of people still use it. **** ***** *******"),
                                React.createElement("span", null, "Roland T.")),
                            React.createElement("div", null,
                                React.createElement("h3", null, "May 5,2020"),
                                React.createElement("p", null, "Stratton Press had a superb team that walked with me through the process of publishing my book. Jerry, Steve and Christine were very professional and did not sacrifice the quality for the sake of time. Jerry has been very patience and available whenever I had questions or concerns. Steve and Christine were equally helpful, and interacting with Dean has been very enriching. It has always been my prayer that I could develop a relationship with a publishing company that would see my potential and I believe Stratton Press is that company. At the time of my experience with Stratton Press, though the Country and World were experiencing unprecedented challenges in life, yet they continued to communicate and work with me. I highly recommended them to any serious author. Thanks a lot. ** *****"),
                                React.createElement("span", null, "Rufus R.")),
                            React.createElement("div", null,
                                React.createElement("h3", null, "September 5,2019"),
                                React.createElement("p", null, "I had published three books, before I began work with Stratton Press. So far, I have been very satisfied with the work its people have done. They have done everything promised, and done it well. And my sales contact, Razie, has kept me informed on what was happening and has answered all of my questions. I am very happy, at this point, that I chose Stratton Press to publish what was to be my last book. And now, three others are in the process of being updated and reprinted.. *** *******"),
                                React.createElement("span", null, "Shanna E.")),
                            React.createElement("div", null,
                                React.createElement("h3", null, "December 12,2019"),
                                React.createElement("p", null, "I am very pleased with the staff of Stratton Press. I'm a new author and this is a new experience for me. Jerry T******* guided me through all the processes necessary to publish my book.. I highly recommend Stratton Press for all writers, old or new."),
                                React.createElement("span", null, "Shanna E")),
                            React.createElement("div", null,
                                React.createElement("h3", null, "August 20,2020"),
                                React.createElement("p", null, "I have worked with publishing companies before and I am really happy that I chose Stratton Press to complete my book project. I especially wish to thank Ricardo M*** and Edward P***** for their help in completing this book. Ricardo was very helpful and was in constant contact with me concerning every stage of the book. He took a special interest is me as an author and in the book. Edward was very helpful in finalizing my project. There was some problems with the illustrations, but we finally got what was needed. I am looking forward to seeing my book in 6 to 8 weeks. Thanks again for a job well done."),
                                React.createElement("span", null, "Robert M. P.")),
                            React.createElement("div", null,
                                React.createElement("h3", null, "July 10,2019"),
                                React.createElement("p", null, "Stratton Press has been a very kind and professional partner throughout the cover design, editing, and interior layout processes. The publishing managers, customer service reps., and their editor have been attentive and enthusiastic. Compared to other self-publishers, they seem to be a very good value for the services received. But, as my first book published through them has yet to be released and sold, I will have to withhold my final reviews."),
                                React.createElement("span", null, "Erik D.J. O'Brien")),
                            React.createElement("div", null,
                                React.createElement("h3", null, "August 20,2020"),
                                React.createElement("p", null, "I have been working with Stratton Press for a little more than 6 months and I find their customer service to be excellent. They are in constant contact with me and I am in the process of getting a second book published with them."),
                                React.createElement("span", null, "Paul D.")),
                            React.createElement("div", null,
                                React.createElement("h3", null, "October 29, 2021"),
                                React.createElement("p", null, "I am grateful for the time and cooperation over the past few years of writing and publishing 3 books with Stratton Press. I know that during the pandemic, it has been a hard time due to quarantine and lockdowns but it\u2019s great to know all progressed efficiently and the team certainly did make an excellent job of producing my books live! In the future, it will be a pleasure to submit some of my manuscripts and receive such spontaneous and great customer service via email contact.  I really recommend this publisher to new authors who are testing the waters to write and publish more novels! Thank you ***** and **** for your encouragement and time during a period of self publishing, and to yourselves and to your team. Wish you all success in your publishing services. Blessings and much appreciation for such great team work!"),
                                React.createElement("span", null, "Angela H."))),
                        React.createElement("div", { className: "rating" },
                            React.createElement("h2", null, "Showing our 4 and 5 star reviews")))))),
        React.createElement("div", { className: "contactus", id: "contactus" },
            React.createElement("div", { className: "w-100" },
                React.createElement("div", { className: "flex" },
                    React.createElement("form", { className: "learn-form", onSubmit: sendEmail },
                        React.createElement("span", { className: "head" },
                            React.createElement("h1", null, "Want to Learn More?"),
                            React.createElement("h3", null, "Request Your Free Publishing Consultation Below"),
                            React.createElement("label", null, "Fill our form to learn more about publishing with Stratton Press")),
                        React.createElement("span", { className: "form" },
                            React.createElement("div", { className: "manus" },
                                React.createElement("label", null, "Do you have a manuscript that is ready to publish *"),
                                React.createElement("select", { name: "subject", id: "cars" },
                                    React.createElement("option", { value: "Yes, I am ready to publish today" }, "Yes, I am ready to publish today"),
                                    React.createElement("option", { value: "Yes. I am ready to publish today." }, "Yes. I am ready to publish today."),
                                    React.createElement("option", { value: "Yes. I am ready to publish 1-3 months." }, "Yes. I am ready to publish 1-3 months."),
                                    React.createElement("option", { value: "Yes. I am ready to publish 4-6 months." }, "Yes. I am ready to publish 4-6 months."),
                                    React.createElement("option", { value: "Yes. I will be ready in more than 6 months." }, "Yes. I will be ready in more than 6 months."),
                                    React.createElement("option", { value: "No. I do not have a book or manuscript." }, "No. I do not have a book or manuscript."))),
                            React.createElement("div", { className: "fname" },
                                React.createElement("label", null, "First Name"),
                                React.createElement("input", { type: "text", name: "FName", required: true })),
                            React.createElement("div", { className: "lname" },
                                React.createElement("label", null, "Last Name"),
                                React.createElement("input", { type: "text", name: "LName", required: true })),
                            React.createElement("div", { className: "email" },
                                React.createElement("label", null, "E-mail Address"),
                                React.createElement("input", { type: "text", name: "email", required: true })),
                            React.createElement("div", { className: "phone" },
                                React.createElement("label", null, "Phone"),
                                React.createElement("input", { type: "text", name: "phone", id: "phone", required: true })),
                            React.createElement("div", { className: "foot" },
                                React.createElement("button", { type: "submit" }, "Request Free Consultation"),
                                React.createElement("p", { className: "privacy" },
                                    "By clicking \u201CRequest My Free Consultation\u201D, you are providing your electronic signature, voluntarily authorizing Stratton Publishing and its affiliates to contact you using a manual or automated telephone dialing system and send you advertisement or telemarketing messages by email or text/SMS/MMS message to the address and phone number you have provided above. You are not required to agree to this in order to buy products or services from Stratton Publishing. You certify that you are over the age of eighteen (18). You\u2019ll get up to ten (10) messages per month. Standard message and data rates may apply. Click here to view our ",
                                    React.createElement("a", { href: "javascript(0);" }, "privacy policy"),
                                    "."))))))),
        React.createElement("div", { className: "channels-section" },
            React.createElement("div", { className: "channel-header" },
                React.createElement("p", null, "AUTHORS' BOOKS ARE DISTRIBUTED IN THESE AMAZING CHANNELS")),
            React.createElement("div", { className: "channels-body" },
                React.createElement("div", { className: "amazon-kindle" },
                    React.createElement(image_component_1["default"], { src: Amazon_Kindle_png_1["default"], alt: "..." })),
                React.createElement("div", { className: "barnes-noble" },
                    React.createElement(image_component_1["default"], { src: barnes___noble_png_1["default"], alt: "..." })),
                React.createElement("div", { className: "chapters" },
                    React.createElement(image_component_1["default"], { src: chapters_png_1["default"], alt: "..." })),
                React.createElement("div", { className: "indigo" },
                    React.createElement(image_component_1["default"], { src: indigo_png_1["default"], alt: "..." })),
                React.createElement("div", { className: "ingram" },
                    React.createElement(image_component_1["default"], { src: ingram_png_1["default"], alt: "..." })),
                React.createElement("div", { className: "lightning-source" },
                    React.createElement(image_component_1["default"], { src: lightning_source_png_1["default"], alt: "..." })))),
        React.createElement(footer_component_1["default"], null)));
};
exports["default"] = PublishContainer;
