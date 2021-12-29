"use strict";
exports.__esModule = true;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_router_dom_2 = require("react-router-dom");
var Logo_Plain_png_1 = require("../../assets/images/logo/Logo_Plain.png");
var facebook_png_1 = require("../../assets/images/logo/facebook.png");
var instagram_png_1 = require("../../assets/images/logo/instagram.png");
var twitter_png_1 = require("../../assets/images/logo/twitter.png");
var BBB_Rating_png_1 = require("../../assets/images/logo/BBB-Rating.png");
var youtube_png_1 = require("../../assets/images/logo/youtube.png");
var FooterComponent = function () {
    var _a = React.useState([]), details = _a[0], setDetails = _a[1];
    var history = react_router_dom_1.useHistory();
    var goToHome = function () {
        history.push('/');
        window.scrollTo(0, 0);
        behavior: 'smooth';
    };
    var goToPublish = function () {
        history.push('/publish');
        window.scrollTo(0, 0);
        behavior: 'smooth';
    };
    var goToAboutus = function () {
        history.push('/about-us');
        window.scrollTo(0, 0);
        behavior: 'smooth';
    };
    var goToContactUs = function () {
        history.push('/contact-us');
        window.scrollTo(0, 0);
        behavior: 'smooth';
    };
    var goToLibrary = function () {
        // Redirect to Library, No Library Page yet
        // history.push('/contact-us');
        //     window.scrollTo(0, 0);
        //     behavior: 'smooth';
    };
    var goToFAQ = function () {
        history.push('/faq');
        window.scrollTo(0, 0);
        behavior: 'smooth';
    };
    React.useEffect(function () {
        document.title = "Stratton Press";
        // BBR RATING DATE
        var d = new Date();
        var month = d.getMonth() + 1;
        var day = d.getDate();
        var output = "As of " + (month < 10 ? '0' : '') + month + '/' +
            (day < 10 ? '0' : '') + day + '/' + d.getFullYear();
        var date = document.querySelector("#date");
        var p = document.createElement("p");
        p.textContent = output;
        date === null || date === void 0 ? void 0 : date.append(p);
    }, []);
    return (React.createElement("footer", { className: "site-footer" },
        React.createElement("div", { className: "footer-container" },
            React.createElement("div", { className: "row row-footer" },
                React.createElement("div", { className: "col-sm-12 col-md-6" },
                    React.createElement("div", { className: "footer-logo" },
                        React.createElement("a", { href: "index.html" },
                            React.createElement("img", { src: Logo_Plain_png_1["default"], className: "img-fluid", alt: "logo" })))),
                React.createElement("div", { className: "flex" },
                    React.createElement("div", { className: "col-xs-5 col-sm footer-nav" },
                        React.createElement("ul", { className: "footer-links" },
                            React.createElement("li", { onClick: function () { return goToPublish(); } },
                                React.createElement(react_router_dom_2.Link, { to: "" }, "Publish Your Book")),
                            React.createElement("li", { onClick: function () { return goToAboutus(); } },
                                React.createElement(react_router_dom_2.Link, { to: "" }, " About Us")),
                            React.createElement("li", { onClick: function () { return goToLibrary(); } },
                                React.createElement(react_router_dom_2.Link, { to: "" }, "Library")))),
                    React.createElement("div", { className: "col-xs-5 col-sm footer-nav" },
                        React.createElement("ul", { className: "footer-links" },
                            React.createElement("li", { onClick: function () { return goToFAQ(); } },
                                React.createElement(react_router_dom_2.Link, { to: "" }, "  FAQs")),
                            React.createElement("li", { onClick: function () { return goToContactUs(); } },
                                React.createElement(react_router_dom_2.Link, { to: "" }, "   Contact Us"))))))),
        React.createElement("div", { className: "copyright-section" },
            React.createElement("div", { className: "copyright-row" },
                React.createElement("div", { className: "col-4 align-self-center copyright-tag" },
                    React.createElement("p", { className: "copyright-text" }, "Copyright \u00A9 2021 Stratton Press Publishing")),
                React.createElement("div", { className: "col-4 align-self-center bbbrating" },
                    React.createElement("div", { className: "" },
                        React.createElement("a", { href: "https://bbb.org/", target: "_blank" },
                            "    ",
                            React.createElement("img", { src: BBB_Rating_png_1["default"], alt: "..." }),
                            " ")),
                    React.createElement("div", { id: "date" })),
                React.createElement("div", { className: "col-4 align-self-center" },
                    React.createElement("ul", { className: "social-icons" },
                        React.createElement("li", null,
                            React.createElement("a", { className: "facebook", href: "https://www.facebook.com/StrattonPressInc/", target: "_blank" },
                                React.createElement("img", { src: facebook_png_1["default"], alt: "..." }))),
                        React.createElement("li", null,
                            React.createElement("a", { className: "instagram", href: "https://www.instagram.com/strattonpress/", target: "_blank" },
                                React.createElement("img", { src: instagram_png_1["default"], alt: "..." }))),
                        React.createElement("li", null,
                            React.createElement("a", { className: "twitter", href: "https://twitter.com/strattonpress/", target: "_blank" },
                                React.createElement("img", { src: twitter_png_1["default"], alt: "..." }))),
                        React.createElement("li", null,
                            React.createElement("a", { className: "youtube", href: "https://www.youtube.com/channel/UCYWHfl76kxGvKxT_wb8V9zQ", target: "_blank" },
                                React.createElement("img", { src: youtube_png_1["default"], alt: "..." })))))))));
};
exports["default"] = FooterComponent;
