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
var $ = require("jquery");
var emailjs_com_1 = require("emailjs-com");
var sweetalert2_1 = require("sweetalert2");
var header_component_1 = require("../../common/Navigation/header.component");
var navigation_component_1 = require("../../common/Navigation/navigation.component");
var image_component_1 = require("../../common/Image/image.component");
var banner2_png_1 = require("../../assets/images/backgrounds/banner2.png");
var footer_component_1 = require("../../common/Footer/footer.component");
var react_router_dom_1 = require("react-router-dom");
var react_slick_1 = require("react-slick");
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");
require("react-multi-carousel/lib/styles.css");
var book_review1_png_1 = require("../../assets/images/books/book-review1.png");
var book_review2_png_1 = require("../../assets/images/books/book-review2.png");
var book_review3_png_1 = require("../../assets/images/books/book-review3.png");
var book_review4_png_1 = require("../../assets/images/books/book-review4.png");
var blueberry_png_1 = require("../../assets/images/books/blueberry.png");
var designated_survivor_png_1 = require("../../assets/images/books/designated survivor.png");
var dont_work_png_1 = require("../../assets/images/books/dont work.png");
var greasy_cove_png_1 = require("../../assets/images/books/greasy cove.png");
var ice_moon_png_1 = require("../../assets/images/books/ice moon.png");
var mutton_decadece_png_1 = require("../../assets/images/books/mutton decadece.png");
var up_north_png_1 = require("../../assets/images/books/up north.png");
var wasted_youth_png_1 = require("../../assets/images/books/wasted youth.png");
var web1_1_png_1 = require("../../assets/images/books/web1.1.png");
var web2_png_1 = require("../../assets/images/books/web2.png");
var web3_png_1 = require("../../assets/images/books/web3.png");
var web4_png_1 = require("../../assets/images/books/web4.png");
var web5_png_1 = require("../../assets/images/books/web5.png");
var web6_png_1 = require("../../assets/images/books/web6.png");
var bg_review1_png_1 = require("../../assets//images/backgrounds/bg-review1.png");
var bg_review2_png_1 = require("../../assets//images/backgrounds/bg-review2.png");
var bg_review3_png_1 = require("../../assets//images/backgrounds/bg-review3.png");
var bg_review4_png_1 = require("../../assets//images/backgrounds/bg-review4.png");
var mobile2_png_1 = require("../../assets//images/backgrounds/sp/mobile2.png");
var mobile1_png_1 = require("../../assets//images/backgrounds/sp/mobile1.png");
var mobile4_png_1 = require("../../assets//images/backgrounds/sp/mobile4.png");
var mobile5_png_1 = require("../../assets//images/backgrounds/sp/mobile5.png");
var booktrailer_png_1 = require("../../assets/images/backgrounds/booktrailer.png");
var bookgroup_png_1 = require("../../assets/images/books/bookgroup.png");
var radioint_png_1 = require("../../assets/images/backgrounds/radioint.png");
var websites_png_1 = require("../../assets/images/backgrounds/websites.png");
var Amazon_Kindle_png_1 = require("../../assets/images/logo/Amazon Kindle.png");
var barnes___noble_png_1 = require("../../assets/images/logo/barnes & noble.png");
var chapters_png_1 = require("../../assets/images/logo/chapters.png");
var indigo_png_1 = require("../../assets/images/logo/indigo.png");
var ingram_png_1 = require("../../assets/images/logo/ingram.png");
var lightning_source_png_1 = require("../../assets/images/logo/lightning source.png");
var intlTelInput = require("intl-tel-input");
var AboutUs = function () {
    var _a = React.useState([]), state = _a[0], setstate = _a[1];
    var history = react_router_dom_1.useHistory();
    //For Sending Emails
    var sendEmail = function (e) {
        e.preventDefault();
        // emailjs.sendForm('gmail', 'contact_template', e.currentTarget, 'user_norNgT0B71lOeGvDG16ph') FOR GMAIL

        emailjs_com_1["default"].sendForm('outlook', 'publish/aboutUs_template', e.currentTarget, 'user_norNgT0B71lOeGvDG16ph')
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
    //END
    var fullScreen = function () {
        // let i = document.querySelector(".vid1");
        // i.requestFullscreen();
    };
    var toAboutUs2 = function (name) {
        switch (name) {
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
    };
    // PHONE on side input
    React.useEffect(function () {
        document.title = "Stratton Press";
        var input = document.getElementById("phone");
        intlTelInput(input, {
            separateDialCode: true,
            utilsScript: "build/js/utils.js"
        });
    }, []);
    // END
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
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };
    return (React.createElement("div", { className: "AboutUs-Component", id: "aboutus-1" },
        React.createElement(header_component_1["default"], { bgcolor: "#043439" }),
        React.createElement(navigation_component_1["default"], null),
        React.createElement("div", { className: "container-fluid aboutus-header" },
            React.createElement("div", { className: "hero" }, "About Us")),
        React.createElement("div", { className: "aboutus-banner-section" },
            React.createElement("div", { className: "w-100" },
                React.createElement("div", { className: "left" },
                    React.createElement(image_component_1["default"], { src: banner2_png_1["default"], className: "images", width: "550", height: "650", alt: "..." })),
                React.createElement("div", { className: "right" },
                    React.createElement("div", { className: "header" },
                        React.createElement("div", { className: "support" }, "We Support You."),
                        React.createElement("div", { className: "celebrate" }, "We Celebrate You.")),
                    React.createElement("div", { className: "body" },
                        React.createElement("p", null, "Many writers have dreamt to be authors. But not all writers get to fulfill this dream. We understand how difficult the road to publishing can get. With thousands of manuscripts written every day, not all get picked up by a publisher. But this may change when you have your manuscript ready in professional book form."),
                        React.createElement("p", null, "Stratton Press is an Author Service Provider. Our mission is help you take the brave, first steps and to press on, throughout your publishing journey."),
                        React.createElement("p", null, "We\u2019ll give you the tools and the team you need. From book cover design to editing, to distribution and marketing.  Imagine having your own professional team dedicated to work on your book."),
                        React.createElement("p", null, "We are here to support you. To get you Your space so that the world can see Your story. And yes, should a traditional publisher discover the wonder that you truly are, we will be as joyful as you. And in each step closer, for every success you\u2019d make, we will celebrate You."))))),
        React.createElement("div", { className: "publishing-sect" },
            React.createElement("div", { className: "w-100" },
                React.createElement("div", { className: "text-container" },
                    React.createElement("h1", null,
                        "Publishing with ",
                        React.createElement("span", null, "Stratton Press means YOU:")),
                    React.createElement("ul", null,
                        React.createElement("li", null, "Retain ownership of your work."),
                        React.createElement("li", null, "Can expect to have amazing book covers!"),
                        React.createElement("li", null, "Have an entire team to support you in copyediting and interior design."),
                        React.createElement("li", null, "Have your book available in paperback, hardback, and e-book formats."),
                        React.createElement("li", null, "Can have your book printed at 1 copy or more! And you won't go out of print."),
                        React.createElement("li", null, "Earn royalties for every sale."),
                        React.createElement("li", null, "Have online distribution channels worldwide!"))))),
        React.createElement("div", { className: "section-2" },
            React.createElement("div", { className: "w-100" },
                React.createElement("div", { className: "flex" },
                    React.createElement("div", { className: "left" },
                        React.createElement(image_component_1["default"], { src: bookgroup_png_1["default"], alt: "..." })),
                    React.createElement("div", { className: "right" },
                        React.createElement("h1", null, "CUSTOMIZED BOOK COVERS"),
                        React.createElement("p", null, "We take pride in creating book covers that mirror your book\u2019s soul.  Our team of artists are of high calibre and award-winning."),
                        React.createElement(react_router_hash_link_1.HashLink, { to: "#book-cover1" },
                            " ",
                            React.createElement("button", { onClick: function () { return toAboutUs2('book-covers'); } }, "  See Samples "),
                            " "))))),
        React.createElement("div", { className: "book-cover1", id: "book-cover1" },
            React.createElement("div", { className: "w100" },
                React.createElement("div", { className: "books book-pc" },
                    React.createElement("img", { src: blueberry_png_1["default"], alt: "b" }),
                    React.createElement("img", { src: designated_survivor_png_1["default"], alt: "b" }),
                    React.createElement("img", { src: dont_work_png_1["default"], alt: "b" }),
                    React.createElement("img", { src: greasy_cove_png_1["default"], alt: "b" }),
                    React.createElement("img", { src: ice_moon_png_1["default"], alt: "b" }),
                    React.createElement("img", { src: mutton_decadece_png_1["default"], alt: "b" }),
                    React.createElement("img", { src: up_north_png_1["default"], alt: "b" }),
                    React.createElement("img", { src: wasted_youth_png_1["default"], alt: "b" })),
                React.createElement("div", { className: "books book-sp" },
                    React.createElement(react_slick_1["default"], __assign({}, settings),
                        React.createElement("div", { className: "" },
                            React.createElement("img", { src: blueberry_png_1["default"], alt: "b" }),
                            React.createElement("img", { src: designated_survivor_png_1["default"], alt: "b" })),
                        React.createElement("div", { className: "" },
                            React.createElement("img", { src: dont_work_png_1["default"], alt: "b" }),
                            React.createElement("img", { src: greasy_cove_png_1["default"], alt: "b" })),
                        React.createElement("div", { className: "" },
                            React.createElement("img", { src: ice_moon_png_1["default"], alt: "b" }),
                            React.createElement("img", { src: mutton_decadece_png_1["default"], alt: "b" })),
                        React.createElement("div", { className: "" },
                            React.createElement("img", { src: up_north_png_1["default"], alt: "b" }),
                            React.createElement("img", { src: wasted_youth_png_1["default"], alt: "b" })))))),
        React.createElement("div", { className: "section-3" },
            React.createElement("div", { className: "w-100" },
                React.createElement("div", { className: "flex" },
                    React.createElement("div", { className: "left" },
                        React.createElement("h1", null, "BOOK TRAILER"),
                        React.createElement("p", null, "What if we can add color to your story and basically bring your book to life? We will create beautiful trailers that show a glimpse of your story through images and sounds"),
                        React.createElement(react_router_hash_link_1.HashLink, { to: "#book-cover2" },
                            " ",
                            React.createElement("button", { onClick: function () { return toAboutUs2('book-trailer'); } }, "See Samples"))),
                    React.createElement("div", { className: "right" },
                        React.createElement(image_component_1["default"], { src: booktrailer_png_1["default"], alt: "..." }))))),
        React.createElement("div", { className: "book-cover2", id: "book-cover2" },
            React.createElement("div", { className: "w100" },
                React.createElement("div", { className: "books book-pc" },
                    React.createElement("iframe", { onClick: function () { return fullScreen(); }, className: "vid1", src: "https://www.youtube.com/embed/X6MbhiCF4fI", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }),
                    React.createElement("iframe", { src: "https://www.youtube.com/embed/54kl1TKNFjc", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }),
                    React.createElement("iframe", { src: "https://www.youtube.com/embed/xj4V60xXRug", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }),
                    React.createElement("iframe", { src: "https://www.youtube.com/embed/3PpE0sxomM4", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }),
                    React.createElement("iframe", { src: "https://www.youtube.com/embed/w-OkABdPGfU", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }),
                    React.createElement("iframe", { src: "https://www.youtube.com/embed/BVisD_0kv14", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true })),
                React.createElement("div", { className: "books book-sp" },
                    React.createElement(react_slick_1["default"], __assign({}, settings),
                        React.createElement("iframe", { src: "https://www.youtube.com/embed/X6MbhiCF4fI", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }),
                        React.createElement("iframe", { src: "https://www.youtube.com/embed/54kl1TKNFjc", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }),
                        React.createElement("iframe", { src: "https://www.youtube.com/embed/xj4V60xXRug", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }),
                        React.createElement("iframe", { src: "https://www.youtube.com/embed/3PpE0sxomM4", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }),
                        React.createElement("iframe", { src: "https://www.youtube.com/embed/w-OkABdPGfU", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }),
                        React.createElement("iframe", { src: "https://www.youtube.com/embed/BVisD_0kv14", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }))))),
        React.createElement("div", { className: "section-4" },
            React.createElement("div", { className: "w-100" },
                React.createElement("div", { className: "flex" },
                    React.createElement("div", { className: "left" },
                        React.createElement(image_component_1["default"], { src: radioint_png_1["default"], alt: "..." })),
                    React.createElement("div", { className: "right" },
                        React.createElement("h1", null, "RADIO INTERVIEW"),
                        React.createElement("p", null, "Take the Wonderful opportunity to talk about your story, your characters, your inspiration in a very insightful interview with Ric Bratton in This Week in America."),
                        React.createElement(react_router_hash_link_1.HashLink, { to: "#book-cover3" },
                            " ",
                            React.createElement("button", { onClick: function () { return toAboutUs2('radio-interview'); } }, "See Samples"),
                            " "))))),
        React.createElement("div", { className: "book-cover3", id: "book-cover3" },
            React.createElement("div", { className: "w100" },
                React.createElement("div", { className: "books book-pc" },
                    React.createElement("iframe", { src: "https://www.youtube.com/embed/mSnqWHs4K24", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }),
                    React.createElement("iframe", { src: "https://www.youtube.com/embed/LN3wQmPbVEs", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }),
                    React.createElement("iframe", { src: "https://www.youtube.com/embed/Qitg8fyB1F0", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }),
                    React.createElement("iframe", { src: "https://www.youtube.com/embed/Gv9c3Es3snc", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }),
                    React.createElement("iframe", { src: "https://www.youtube.com/embed/wwtMnoy7lSI", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }),
                    React.createElement("iframe", { src: "https://www.youtube.com/embed/wqYCiwU8hy4", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true })),
                React.createElement("div", { className: "books book-sp" },
                    React.createElement(react_slick_1["default"], __assign({}, settings),
                        React.createElement("iframe", { src: "https://www.youtube.com/embed/mSnqWHs4K24", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }),
                        React.createElement("iframe", { src: "https://www.youtube.com/embed/LN3wQmPbVEs", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }),
                        React.createElement("iframe", { src: "https://www.youtube.com/embed/Qitg8fyB1F0", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }),
                        React.createElement("iframe", { src: "https://www.youtube.com/embed/Gv9c3Es3snc", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }),
                        React.createElement("iframe", { src: "https://www.youtube.com/embed/wwtMnoy7lSI", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }),
                        React.createElement("iframe", { src: "https://www.youtube.com/embed/wqYCiwU8hy4", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }))))),
        React.createElement("div", { className: "section-5" },
            React.createElement("div", { className: "w-100" },
                React.createElement("div", { className: "flex" },
                    React.createElement("div", { className: "left" },
                        React.createElement("h1", null, "YOUR OWN WEBSITE"),
                        React.createElement("p", null, "Do you want to have your own marketing took, with your own content? A website customized for you, will do just that. Put in your books, your videos, testimonials, etc - with our talented website creators."),
                        React.createElement(react_router_hash_link_1.HashLink, { to: "#book-cover4" },
                            " ",
                            React.createElement("button", { onClick: function () { return toAboutUs2('website'); } }, " See Samples "),
                            " ")),
                    React.createElement("div", { className: "right" },
                        React.createElement(image_component_1["default"], { src: websites_png_1["default"], alt: "..." }))))),
        React.createElement("div", { className: "book-cover4", id: "book-cover4" },
            React.createElement("div", { className: "w100 book-pc" },
                React.createElement("div", { className: "websites" },
                    React.createElement("img", { src: web1_1_png_1["default"], alt: "" }),
                    React.createElement("div", { className: "hover" },
                        React.createElement("a", { href: "https://www.perrywrites.com/", target: "blank" }, "Live Preview"))),
                React.createElement("div", { className: "websites" },
                    React.createElement("img", { src: web2_png_1["default"], alt: "" }),
                    React.createElement("div", { className: "hover" },
                        React.createElement("a", { href: "https://www.author-williamhoy.com/", target: "blank" }, "Live Preview"))),
                React.createElement("div", { className: "websites" },
                    React.createElement("img", { src: web3_png_1["default"], alt: "" }),
                    React.createElement("div", { className: "hover" },
                        React.createElement("a", { href: "https://www.poemsfromtheedge.com/", target: "blank" }, "Live Preview"))),
                React.createElement("div", { className: "websites" },
                    React.createElement("img", { src: web4_png_1["default"], alt: "" }),
                    React.createElement("div", { className: "hover" },
                        React.createElement("a", { href: "https://www.ava-phillips.com/", target: "blank" }, "Live Preview"))),
                React.createElement("div", { className: "websites" },
                    React.createElement("img", { src: web5_png_1["default"], alt: "" }),
                    React.createElement("div", { className: "hover" },
                        React.createElement("a", { href: "https://www.mollymcgintybooks.com/", target: "blank" }, "Live Preview"))),
                React.createElement("div", { className: "websites" },
                    React.createElement("img", { src: web6_png_1["default"], alt: "" }),
                    React.createElement("div", { className: "hover" },
                        React.createElement("a", { href: "https://www.authorstaceyjohnston.com/", target: "blank" }, "Live Preview")))),
            React.createElement("div", { className: "w100 book-sp" },
                React.createElement(react_slick_1["default"], __assign({}, settings),
                    React.createElement("div", { className: "websites" },
                        React.createElement("img", { src: web1_1_png_1["default"], alt: "" }),
                        React.createElement("div", { className: "hover" },
                            React.createElement("a", { href: "https://www.perrywrites.com/", target: "blank" }, "Live Preview"))),
                    React.createElement("div", { className: "websites" },
                        React.createElement("img", { src: web2_png_1["default"], alt: "" }),
                        React.createElement("div", { className: "hover" },
                            React.createElement("a", { href: "https://www.author-williamhoy.com/", target: "blank" }, "Live Preview"))),
                    React.createElement("div", { className: "websites" },
                        React.createElement("img", { src: web3_png_1["default"], alt: "" }),
                        React.createElement("div", { className: "hover" },
                            React.createElement("a", { href: "https://www.poemsfromtheedge.com/", target: "blank" }, "Live Preview"))),
                    React.createElement("div", { className: "websites" },
                        React.createElement("img", { src: web4_png_1["default"], alt: "" }),
                        React.createElement("div", { className: "hover" },
                            React.createElement("a", { href: "https://www.ava-phillips.com/", target: "blank" }, "Live Preview"))),
                    React.createElement("div", { className: "websites" },
                        React.createElement("img", { src: web5_png_1["default"], alt: "" }),
                        React.createElement("div", { className: "hover" },
                            React.createElement("a", { href: "https://www.mollymcgintybooks.com/", target: "blank" }, "Live Preview"))),
                    React.createElement("div", { className: "websites" },
                        React.createElement("img", { src: web6_png_1["default"], alt: "" }),
                        React.createElement("div", { className: "hover" },
                            React.createElement("a", { href: "https://www.authorstaceyjohnston.com/", target: "blank" }, "Live Preview")))))),
        React.createElement("div", { className: "bookreviews" },
            React.createElement("div", { className: "w-100" },
                React.createElement("div", { className: "content" },
                    React.createElement("h1", null, "THE US REVIEW OF BOOKS")))),
        React.createElement("div", { className: "bookreviews-2" },
            React.createElement(react_slick_1["default"], __assign({}, settings),
                React.createElement("div", { className: "bg-review" },
                    React.createElement("img", { className: "img pc", src: bg_review1_png_1["default"], alt: "" }),
                    React.createElement("img", { className: "img sp", src: mobile2_png_1["default"], alt: "" }),
                    React.createElement("div", { className: "flex" },
                        React.createElement("div", { className: "book" },
                            React.createElement("img", { src: book_review1_png_1["default"], alt: "" })),
                        React.createElement("div", { className: "desc white" },
                            React.createElement("div", { className: "ttl" }, "THE SAINT JAMES CONSPIRACY"),
                            React.createElement("div", { className: "author" }, "by Jessica Murphy"),
                            React.createElement("div", { className: "content" }, "The alternating narrative structure keeps readers guessing because of unpredictable shifts, turns, and switches. The fusion of a modern thriller with the often controversial and highly debated Gnostic beliefs regarding Jesus Christ almost reminds one of Angels and Demons. Readers who enjoy historical fiction with a sprinkle of spiritual enlightening and those who thrive an action thrillers will likely enjoy this book.")))),
                React.createElement("div", { className: "bg-review" },
                    React.createElement("img", { className: "img pc", src: bg_review2_png_1["default"], alt: "" }),
                    React.createElement("img", { className: "img sp", src: mobile1_png_1["default"], alt: "" }),
                    React.createElement("div", { className: "flex" },
                        React.createElement("div", { className: "book black" },
                            React.createElement("img", { src: book_review2_png_1["default"], alt: "" })),
                        React.createElement("div", { className: "desc" },
                            React.createElement("div", { className: "ttl" }, "THE NATURE OF GOOD GOVERNMENT"),
                            React.createElement("div", { className: "author" }, "by H. Doyle Smith"),
                            React.createElement("div", { className: "content" }, "Though books concerning government, politics, and economics can sometimes be hard to comprehend, Smith's use of analogies to explain these elements makes some of his more difficult subjects accessible to all readers. This drawing upon life experience, such as his interest in how people interact and his work as a certified public accountant, gives Smith his unique view of effective government. Those wishing to understand how government works, or how it should work, will find much to contemplate in this offering.")))),
                React.createElement("div", { className: "bg-review" },
                    React.createElement("img", { className: "img pc", src: bg_review3_png_1["default"], alt: "" }),
                    React.createElement("img", { className: "img sp", src: mobile4_png_1["default"], alt: "" }),
                    React.createElement("div", { className: "flex" },
                        React.createElement("div", { className: "book " },
                            React.createElement("img", { src: book_review3_png_1["default"], alt: "" })),
                        React.createElement("div", { className: "desc white" },
                            React.createElement("div", { className: "ttl" }, "THROUGH THE RAINY SEASON: OUT OF THE FLOODS OF ADDICTION"),
                            React.createElement("div", { className: "author" }, "by Dylan Ward"),
                            React.createElement("div", { className: "content" }, "With vivid descriptions, Martinez paints another part of the world as exotic as he seeks to rid his body of poison. His story is relatable, hypnotic, and unique as he articulates the mental and physical anguish of addiction that is harrowing to witness. Readers are made richer by Martinez's experience in this compelling read.")))),
                React.createElement("div", { className: "bg-review" },
                    React.createElement("img", { className: "img pc", src: bg_review4_png_1["default"], alt: "" }),
                    React.createElement("img", { className: "img sp", src: mobile5_png_1["default"], alt: "" }),
                    React.createElement("div", { className: "flex" },
                        React.createElement("div", { className: "book" },
                            React.createElement("img", { src: book_review4_png_1["default"], alt: "" })),
                        React.createElement("div", { className: "desc white" },
                            React.createElement("div", { className: "ttl" }, "POEMS FROM THE EDGE"),
                            React.createElement("div", { className: "author" }, "by Ginny Worley"),
                            React.createElement("div", { className: "content" }, "Throughout these pages, a strong theme is the poet's emphatic insistence for any reader who might be struggling with seemingly insurmountable circumstances to never give up. This is more than a book of poems. It can also be seen as an encouraging self-help guide and motivational testament directly from author to reader. Furthermore, Worley's work is a perfect example of the therapeutic healing nature that the writing process can and does provide for so many individuals")))))),
        React.createElement("div", { className: "contactus" },
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
                                React.createElement("select", { name: "subject", id: "cars", placeholder: "Want to know more" },
                                    React.createElement("option", { value: "Yes, I am ready to publish today.", disabled: true, selected: true }, "Yes, I am ready to publish today."),
                                    React.createElement("option", { value: "Yes. I am ready to publish today." }, "Yes. I am ready to publish today."),
                                    React.createElement("option", { value: "Yes. I am ready to publish 1-3 months." }, "Yes. I am ready to publish 1-3 months."),
                                    React.createElement("option", { value: "Yes. I am ready to publish 4-6 months" }, "Yes. I am ready to publish 4-6 months."),
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
exports["default"] = AboutUs;
