"use strict";
exports.__esModule = true;
exports.App = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var login_container_1 = require("./pages/Login/login.container");
var dashboard_container_1 = require("./pages/Dashboard/dashboard.container");
var aboutus_container_1 = require("./pages/AboutUs/aboutus.container");
var publish_container_1 = require("./pages/publish/publish.container");
var services_container_1 = require("./pages/services/services.container");
var contactus_container_1 = require("./pages/contactus/contactus.container");
var PrivacyPolicy_container_1 = require("./pages/PrivacyPolicy/PrivacyPolicy.container");
var faq_1 = require("./pages/FAQ/faq");
var library_container_1 = require("./pages/library/library.container");
require("./assets/scss/main.scss");
exports.App = function () {
    var _a = React.useState(false), showButton = _a[0], setShowButton = _a[1];
    React.useEffect(function () {
        window.addEventListener("scroll", function () {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            }
            else {
                setShowButton(false);
            }
        });
    }, []);
    var backToTop = function () {
        window.scrollTo(0, 0);
    };
    return (React.createElement("div", null,
        React.createElement(react_router_dom_1.HashRouter, null,
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: dashboard_container_1["default"] }),
                React.createElement(react_router_dom_1.Route, { path: "/login", component: login_container_1["default"] }),
                React.createElement(react_router_dom_1.Route, { path: "/about-us", component: aboutus_container_1["default"] }),
                React.createElement(react_router_dom_1.Route, { path: "/publish", exact: true, component: publish_container_1["default"] }),
                React.createElement(react_router_dom_1.Route, { path: "/PackageAndServices", component: services_container_1["default"] }),
                React.createElement(react_router_dom_1.Route, { path: "/contact-us", component: contactus_container_1["default"] }),
                React.createElement(react_router_dom_1.Route, { path: "/faq", component: faq_1["default"] }),
                React.createElement(react_router_dom_1.Route, { path: "/privacy", component: PrivacyPolicy_container_1["default"] }),
                React.createElement(react_router_dom_1.Route, { path: "/library", component: library_container_1["default"] }))),
        showButton && (React.createElement("button", { onClick: backToTop, className: "backtotop" }, "\u21E7"))));
};
