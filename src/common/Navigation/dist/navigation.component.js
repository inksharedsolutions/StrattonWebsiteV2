"use strict";
exports.__esModule = true;
var React = require("react");
var $ = require("jquery");
var react_router_dom_1 = require("react-router-dom");
var react_router_dom_2 = require("react-router-dom");
var react_router_hash_link_1 = require("react-router-hash-link");
// import logo from "../../assets/images/logo/Logo.png";
var Company_Logo3_png_1 = require("../../assets/images/logo/Company_Logo3.png");
var Navigation = function () {
    var _a = React.useState([]), details = _a[0], setDetails = _a[1];
    var history = react_router_dom_1.useHistory();
    var getUserGeolocationDetails = function () {
        alert(details);
    };
    // SIDEBAR function
    var goToMenu = function () {
        $(".container-menu").toggleClass("hidden");
        $(".bar-1").toggleClass("change-1");
        $(".bar-3").toggleClass("change-3");
        $(".sidenav").toggleClass("changewidth");
        $(".navbar-menu").click(function () {
            $(".container-menu").show();
        });
    };
    // OVERLAY MENU function for android
    var goToOverlay = function () {
        $(".bar1").toggleClass("change1");
        $(".bar2").toggleClass("change2");
        $(".bar3").toggleClass("change3");
        $(".overlay").toggleClass("active");
        $(".close").click(function () {
            $(".overlay").removeClass("active");
            $(".bar1").removeClass("change1");
            $(".bar2").removeClass("change2");
            $(".bar3").removeClass("change3");
        });
    };
    // functions for smooth scrolls for each pages
    var goToHome = function () {
        history.push("/");
        window.scrollTo(0, 0);
        behavior: "smooth";
    };
    var goToPublish = function () {
        history.push("/publish");
        window.scrollTo(0, 0);
        behavior: "smooth";
    };
    var goToAboutUs = function () {
        history.push("/about-us");
        window.scrollTo(0, 0);
        behavior: "smooth";
    };
    var goToContactUs = function () {
        history.push("/contact-us");
        window.scrollTo(0, 0);
        behavior: "smooth";
    };
    var goToFAQ = function () {
        history.push("/faq");
        window.scrollTo(0, 0);
        behavior: "smooth";
    };
    // NavagationBar Function HideOnScroll
    var _b = React.useState("scrolling down"), scrollDir = _b[0], setScrollDir = _b[1];
    React.useEffect(function () {
        var threshold = 0;
        var lastScrollY = window.pageYOffset;
        var ticking = false;
        var updateScrollDir = function () {
            var scrollY = window.pageYOffset;
            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            setScrollDir(scrollY > lastScrollY ?
                "scrolling down" :
                "scrolling up");
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };
        var onScroll = function () {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };
        0;
        window.addEventListener("scroll", onScroll);
        if (scrollDir == "scrolling down") {
            $(".navbar").addClass("nav-down");
            $(".navbar").removeClass("nav-up");
            $(".container-menu").removeClass("hidden");
            $(".bar-1").removeClass("change-1");
            $(".bar-3").removeClass("change-3");
            $(".sidenav").removeClass("changewidth");
        }
        else {
            $(".navbar").addClass("nav-up");
            $(".navbar").removeClass("nav-down");
            $(".sidenav").addClass("nav-down1");
        }
        return function () { return window.removeEventListener("scroll", onScroll); };
    }, [scrollDir]);
    window.onscroll = function () { scrollFunction(); };
    function scrollFunction() {
        if (document.documentElement.scrollTop < 5) {
            $(".navbar").addClass("top");
            $(".sidenav").addClass("top1");
        }
        else {
            $(".navbar").removeClass("top");
            $(".sidenav").removeClass("top1");
        }
    }
    return (
    //  
    React.createElement("nav", { className: "navbar navbar-light navbar-expand-md justify-content-center shadow-sm mb-0 top" },
        React.createElement("div", { className: "overlay" },
            React.createElement("div", { className: "container-sp" },
                React.createElement("ul", { className: "menu" },
                    React.createElement("li", { className: "line", onClick: function () { return goToHome(); } },
                        React.createElement(react_router_dom_2.Link, { to: "" }, "Home")),
                    React.createElement("li", { className: "line", onClick: function () { return goToAboutUs(); } },
                        React.createElement(react_router_dom_2.Link, { to: "" }, "About Us")),
                    React.createElement("li", { className: "line", onClick: function () { return goToPublish(); } },
                        React.createElement(react_router_dom_2.Link, { to: "" }, "Publish your book")),
                    React.createElement("li", { className: "line" },
                        React.createElement(react_router_dom_2.Link, { to: "/" }, "Library")),
                    React.createElement("li", { className: "line" }),
                    React.createElement("li", { className: "line" },
                        React.createElement(react_router_dom_2.Link, { to: "faq", onClick: function () { return goToFAQ(); } }, "FAQ")),
                    React.createElement("li", { className: "line" },
                        React.createElement(react_router_dom_2.Link, { to: "contact-us", onClick: function () { return goToContactUs(); } }, "Contact Us")),
                    React.createElement("li", { className: "line" },
                        React.createElement(react_router_hash_link_1.HashLink, { to: "/#testimonials1" }, " Reviews "))))),
        React.createElement("div", { className: "container-fluid navbar-section" },
            React.createElement("a", { href: "./index.html", className: "navbar-brand d-flex w-50 me-auto" },
                React.createElement(react_router_dom_2.Link, { to: "", onClick: function () { return goToHome(); } },
                    React.createElement("img", { src: Company_Logo3_png_1["default"], className: "logo-img", alt: "" }))),
            React.createElement("div", { className: "sidenav" },
                React.createElement(react_router_dom_2.Link, { to: "faq", onClick: function () { return goToFAQ(); } }, "FAQ"),
                React.createElement(react_router_dom_2.Link, { to: "contact-us", onClick: function () { return goToContactUs(); } }, "Contact Us"),
                React.createElement(react_router_hash_link_1.HashLink, { to: "/#testimonials" }, " Reviews ")),
            React.createElement("div", { className: "navbar-sp", onClick: function () { return goToOverlay(); } },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "bar1" }),
                    React.createElement("div", { className: "bar2" }),
                    React.createElement("div", { className: "bar3" }))),
            React.createElement("div", { className: "navbar-collapse collapse w-100", id: "collapsingNavbar3" },
                React.createElement("ul", { className: "nav navbar-nav ms-auto w-100 justify-content-end" },
                    React.createElement("li", { className: "nav-item active", onClick: function () { return goToAboutUs(); } },
                        React.createElement(react_router_dom_2.Link, { to: "/about-us", className: "nav-link text-uppercase fw-bolder" }, "About Us")),
                    React.createElement("li", { className: "nav-item", onClick: function () { return goToPublish(); } },
                        React.createElement(react_router_dom_2.Link, { to: "", className: "nav-link text-uppercase fw-bolder" }, "Publish your book")),
                    React.createElement("li", { className: "nav-item" },
                        React.createElement(react_router_dom_2.Link, { to: "", className: "nav-link text-uppercase fw-bolder" }, "Library")),
                    React.createElement("li", { onClick: function () { return goToMenu(); } },
                        React.createElement("div", { className: "navbar-menu" },
                            React.createElement("div", { className: "container" },
                                React.createElement("div", { className: "bar-1" }),
                                React.createElement("div", { className: "container-menu" }, "MENU"),
                                React.createElement("div", { className: "bar-3" })))))))));
};
exports["default"] = Navigation;
