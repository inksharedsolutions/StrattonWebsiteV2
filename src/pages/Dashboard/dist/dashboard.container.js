"use strict";
exports.__esModule = true;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var header_component_1 = require("../../common/Navigation/header.component");
var navigation_component_1 = require("../../common/Navigation/navigation.component");
var image_component_1 = require("../../common/Image/image.component");
var boxicons_regular_1 = require("styled-icons/boxicons-regular");
var boxicons_solid_1 = require("styled-icons/boxicons-solid");
var nuka_carousel_1 = require("nuka-carousel");
var footer_component_1 = require("../../common/Footer/footer.component");
var banner_image_png_1 = require("../../assets/images/backgrounds/banner-image.png");
var people_png_1 = require("../../assets/images/icon-image/people.png");
var pacakges_png_1 = require("../../assets/images/icon-image/pacakges.png");
var ratings_png_1 = require("../../assets/images/icon-image/ratings.png");
var _100_YEARS_OF_DECEPTION_web_jpg_1 = require("../../assets/images/backgrounds/100-YEARS-OF-DECEPTION_web.jpg");
var ALASTIANS_WEB_jpg_1 = require("../../assets/images/backgrounds/ALASTIANS_WEB.jpg");
var BLUEBERRY_DREAMS_web_jpg_1 = require("../../assets/images/backgrounds/BLUEBERRY-DREAMS_web.jpg");
var DYING_WELL_PREPARED_WEB_jpg_1 = require("../../assets/images/backgrounds/DYING-WELL-PREPARED_WEB.jpg");
var ERIC_HOFFER_AWARD_WEB_jpg_1 = require("../../assets/images/backgrounds/ERIC-HOFFER-AWARD_WEB.jpg");
var Book_Expo_png_1 = require("../../assets/images/backgrounds/Book Expo.png");
var BookExpoFair_png_1 = require("../../assets/images/backgrounds/BookExpoFair.png");
var Amazon_Kindle_png_1 = require("../../assets/images/logo/Amazon Kindle.png");
var barnes___noble_png_1 = require("../../assets/images/logo/barnes & noble.png");
var chapters_png_1 = require("../../assets/images/logo/chapters.png");
var indigo_png_1 = require("../../assets/images/logo/indigo.png");
var ingram_png_1 = require("../../assets/images/logo/ingram.png");
var lightning_source_png_1 = require("../../assets/images/logo/lightning source.png");
var haldavis_png_1 = require("../../assets/images/backgrounds/haldavis.png");
var book1_png_1 = require("../../assets/images/books/book1.png");
var book2_png_1 = require("../../assets/images/books/book2.png");

var adelia_png_1 = require("../../assets/images/authors/Adelia.png");
var jean_png_1 = require("../../assets/images/authors/Jean.png");
var ITEMS = [
    {
        img: _100_YEARS_OF_DECEPTION_web_jpg_1["default"],
        alt: 'Slide 1',
        href: "javascript:void(0)"
    },
    {
        img: ALASTIANS_WEB_jpg_1["default"],
        alt: 'Slide 2',
        href: "javascript:void(0)"
    },
    {
        img: BLUEBERRY_DREAMS_web_jpg_1["default"],
        alt: 'Slide 3',
        href: "javascript:void(0)"
    },
    {
        img: DYING_WELL_PREPARED_WEB_jpg_1["default"],
        alt: 'Slide 4',
        href: "javascript:void(0)"
    },
    {
        img: ERIC_HOFFER_AWARD_WEB_jpg_1["default"],
        alt: 'Slide 5',
        href: "javascript:void(0)"
    }
];
var styles = {
    slide: {
        padding: 15,
        minHeight: 100,
        color: '#fff'
    },
    slide1: {
        background: '#FEA900'
    },
    slide2: {
        background: '#B3DC4A'
    },
    slide3: {
        background: '#6AC0FF'
    }
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
var DashbaordContainer = function () {
    var _a = React.useState([]), details = _a[0], setDetails = _a[1];
    var history = react_router_dom_1.useHistory();
    var getUserGeolocationDetails = function () {
        alert(details);
    };
    var goToPublish = function () {
        history.push('/publish');
    };

    var goToVideo1 = function () {
        history.push('/publish');
    };
    React.useEffect(function () {
        fetch('https://geolocation-db.com/json/2c7ba9a0-fcc9-11eb-80e0-2d180bc7db04')
            .then(function (response) { return response.json(); })
            .then(function (data) { return setDetails(data); });
        document.title = "Stratton Press";
    }, []);
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
    return (React.createElement("div", null,
        React.createElement(header_component_1["default"], { bgcolor: "#043439" }),
        React.createElement(navigation_component_1["default"], null),
        React.createElement("div", { className: "banner-section" },
            React.createElement("div", { className: "my-hero" },
                React.createElement("div", { className: "container-fluid tagline-section" },
                    React.createElement("div", { className: "tagline-body" },
                        React.createElement("span", { className: "tagline" },
                            React.createElement("label", { className: "what" },
                                "What's ",
                                React.createElement("br", null),
                                "Your\u00A0"),
                            React.createElement("label", { className: "story" }, "Story?")),
                        React.createElement("br", null),
                        React.createElement("span", { className: "tagline-content" },
                            "Is there a story you wish to tell? Are there chapters you've written but not knowing the next step? Is it the story of your life, or the next step? Is it the story of your life, or of a dreamy place, or a picture collection of your travels? Whatever your story is, we'll help you launch towards the next step.",
                            React.createElement("br", null),
                            React.createElement("br", null),
                            "Be a published author and let the world know ",
                            React.createElement("span", { className: "your-story" }, "Your Story.")))),
                React.createElement("div", { className: "container-fluid banner-image" },
                    React.createElement(image_component_1["default"], { src: banner_image_png_1["default"], width: "550", height: "650", alt: "..." })))),
        React.createElement("div", { className: "publishing-section" },
            React.createElement("div", { className: "w-100" },
                React.createElement("div", { className: "left" },
                    React.createElement("h2", null,
                        React.createElement("strong", null, "How to Start"),
                        " "),
                    React.createElement("span", null, "Download our free publishing guide to learn about our self-publishing process and services.")),
                React.createElement("div", { className: "right" },
                    React.createElement("button", { onClick: function () { return goToPublish(); } }, "Publish Now")))),
        React.createElement("div", { className: "container-fluid learnmore" },
            React.createElement("div", { className: "learnmore-section" },
                React.createElement("div", { className: "row about-us" },
                    React.createElement("div", { className: "col" },
                        React.createElement("img", { src: people_png_1["default"], className: "aboutUse-img", alt: "..." }),
                        React.createElement("label", { className: "row" }, "About Us"),
                        React.createElement("p", { className: "align-middle" }, "We are and Author Services Provider committed towards helping you publish your book. We offer publishing and marketing services suited to your needs. We'll help you get published. Plus, you reserve all the rights to your work!"),
                        React.createElement("button", { type: "button", className: "btn btn-success" }, "Learn More!")),
                    React.createElement("div", { className: "col" },
                        React.createElement("img", { src: pacakges_png_1["default"], className: "packages-img", alt: "..." }),
                        React.createElement("label", { className: "" }, "Our Publishing Packages"),
                        React.createElement("p", { className: "align-middle" }, "Do you need someone to design your book cover? Do you need help in copyediting? Does your book require illustrations? Do you want your book available too, in e-book form? How about a movie trailer?Whatever you need, we are one-stop provider of services any author would dream about!"),
                        React.createElement("button", { type: "button", className: "btn btn-warning" }, "View Packages")),
                    React.createElement("div", { className: "col" },
                        React.createElement("img", { src: ratings_png_1["default"], className: "ratings-img", alt: "..." }),
                        React.createElement("label", { className: "" }, "A- BBB Rating"),
                        React.createElement("p", { className: "align-middle" }, "Better Business Reveiw(BBB) rates Stratton Press an A-, an equivalent to 90-93.99%!. Like te rest of the world, Stratton Press feels the effects of the pandemic. However, this does not stop us from contiously aspiring to be better, transparent, helpful and resopnsive. We'll be here throughout your journey!"),
                        React.createElement("button", { type: "button", className: "btn btn-primary" }, "What They Say"))))),
        React.createElement(nuka_carousel_1["default"], { autoplay: true, wrapAround: true }, ITEMS.map(function (items, i) {
            return (React.createElement("div", null,
                React.createElement("a", { href: items.href },
                    React.createElement("img", { src: items.img, alt: items.alt }))));
        })),
        React.createElement("section", { className: "spotlight" },
            React.createElement("div", { className: "w100" },
                React.createElement("div", { className: "author" },
                    React.createElement(image_component_1["default"], { src: haldavis_png_1["default"], alt: "...", className: "author-image" })),
                React.createElement("div", { className: "temp" }),
                React.createElement("div", { className: "author-spot" },
                    React.createElement("div", { className: "flex" },
                        React.createElement("div", { className: "top" },
                            React.createElement("div", { className: "flex-r" },
                                React.createElement("div", { className: "left" },
                                    React.createElement("h1", null,
                                        "AUTHOR SPOTLIGHT : ",
                                        React.createElement("span", null, "HAL DAVIS")),
                                    React.createElement("p", null, "Hal Davis is a distinguished US Marine (Ret.) with a career that spanned twenty-two years. He became a Tennessee State Trooper, FBI Special Investigator, United States Secret Service Agent to two US presidents, and a Marine and Naval Criminal Investigator. He is the author of the books, From an Out House to the White House, and Beyond the Mountains and Across the Seas")),
                                React.createElement("div", { className: "right" },
                                    React.createElement("img", { src: book1_png_1["default"], alt: "book" }),
                                    React.createElement("img", { src: book2_png_1["default"], alt: "book" }),
                                    React.createElement("img", { src: adelia_png_1["default"], alt: "author" }),
                                    React.createElement("img", { src: jean_png_1["default"], alt: "author" }),
                                    React.createElement("button", null, "Check out Hal's Website")))),
                        React.createElement("div", { className: "buttom" },
                            React.createElement("div", { className: "flex-r" },
                                React.createElement("div", { className: "temp-author" }),
                                React.createElement("div", { className: "left" },
                                    React.createElement("iframe", { src: "https://www.youtube.com/embed/TuhAb-6AJ3Q", frameBorder: "0" }),
                                    React.createElement("h2", null, "This Week In America Radio Interview :"),
                                    React.createElement("h1", null, " From an Outhouse to the White House"),
                                    React.createElement("button", null, "Check Out the Full Interview")),
                                React.createElement("div", { className: "right" },
                                    React.createElement("iframe", { src: "https://www.youtube.com/embed/qNOpjGy5Us0", frameBorder: "0" }),
                                    React.createElement("h2", null, "Book Trailer :"),
                                    React.createElement("h1", null, "Beyond the Mountains and Across the Seas"),
                                    React.createElement("button", null, "Check Out the Interview About the Book")))))))),
        React.createElement("div", { className: "testimonials text-center" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-md-6 col-lg-4" },
                        React.createElement("div", { className: "card border-light bg-light text-center" },
                            React.createElement(boxicons_solid_1.QuoteAltLeft, { size: 45, className: "card-img-top rounded-circle", "aria-hidden": "true" }),
                            React.createElement("div", { className: "card-body blockquote" },
                                React.createElement(boxicons_regular_1.UserCircle, { size: 65, color: "gray" }),
                                React.createElement("p", { className: "card-text" }, "Stratton Press has taken the rough road to publication and smoothed it out. As an author, I feel grateful to each and every member of their team. It's almost like being part of a family."),
                                React.createElement("footer", { className: "blockquote-footer" },
                                    React.createElement("cite", { title: "Source Title" }, "Jerry Crossley")),
                                React.createElement("footer", { className: "testimonials-book-title blockquote" },
                                    React.createElement("cite", { title: "Source Title" }, "The Seen and the Unseen"))))),
                    React.createElement("div", { className: "col-md-6 col-lg-4" },
                        React.createElement("div", { className: "card border-light bg-light text-center" },
                            React.createElement(boxicons_solid_1.QuoteAltLeft, { size: 45, className: "card-img-top rounded-circle", "aria-hidden": "true" }),
                            React.createElement("div", { className: "card-body blockquote" },
                                React.createElement(boxicons_regular_1.UserCircle, { size: 65, color: "gray" }),
                                React.createElement("p", { className: "card-text" }, "I learned more about my craft, and I was impressed that they market it in different countries. The staff were always friendly and willing to answer any questions I had."),
                                React.createElement("footer", { className: "blockquote-footer" },
                                    React.createElement("cite", { title: "Source Title" }, "Lilian White")),
                                React.createElement("footer", { className: "testimonials-book-title blockquote" },
                                    React.createElement("cite", { title: "Source Title" }, "Emmanuel"))))),
                    React.createElement("div", { className: "col-md-6 col-lg-4" },
                        React.createElement("div", { className: "card border-light bg-light text-center" },
                            React.createElement(boxicons_solid_1.QuoteAltLeft, { size: 45, className: "card-img-top rounded-circle", "aria-hidden": "true" }),
                            React.createElement("div", { className: "card-body blockquote" },
                                React.createElement(boxicons_regular_1.UserCircle, { size: 65, color: "gray" }),
                                React.createElement("p", { className: "card-text" }, "Stratton Press not only took their time to walk me all the way but went further by providing the editing, publishing, and marketing side. I would recommend Stratton Press for being a good, caring publishing company and the best team of professionals I grew to love and admire."),
                                React.createElement("footer", { className: "blockquote-footer" },
                                    React.createElement("cite", { title: "Source Title" }, "Adelia Goncalves")),
                                React.createElement("footer", { className: "testimonials-book-title blockquote" },
                                    React.createElement("cite", { title: "Source Title" }, "The Seen and the Unseen")))))))),
        React.createElement("div", { className: "bookexpo-section" },
            React.createElement("div", { className: "bookexpo-rightsfair" },
                React.createElement("div", { className: "bookexpo-logo" },
                    React.createElement("img", { src: Book_Expo_png_1["default"], alt: "..." })),
                React.createElement("div", { className: "bookexpo-content" },
                    React.createElement("h3", null, "NEW YORK RIGHTS FAIR & BOOK EXPO!"),
                    React.createElement("p", null, "Stratton Press joined the 2019 New York Rights Fair and Book Expo. A big thank you to all the authors who visited our booth! Til the next one!"))),
            React.createElement("div", { className: "bookexpo-picture" },
                React.createElement("img", { src: BookExpoFair_png_1["default"], alt: "..." }))),
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
exports["default"] = DashbaordContainer;
