"use strict";
exports.__esModule = true;
var React = require("react");
var header_component_1 = require("../../common/Navigation/header.component");
var navigation_component_1 = require("../../common/Navigation/navigation.component");
var image_component_1 = require("../../common/Image/image.component");
var banner2_jpg_1 = require("../../assets/images/backgrounds/banner2.jpg");
var footer_component_1 = require("../../common/Footer/footer.component");
var library_png_1 = require("../../assets//images/backgrounds/library.png");
var Amazon_Kindle_png_1 = require("../../assets/images/logo/Amazon Kindle.png");
var barnes___noble_png_1 = require("../../assets/images/logo/barnes & noble.png");
var chapters_png_1 = require("../../assets/images/logo/chapters.png");
var indigo_png_1 = require("../../assets/images/logo/indigo.png");
var ingram_png_1 = require("../../assets/images/logo/ingram.png");
var lightning_source_png_1 = require("../../assets/images/logo/lightning source.png");
var AboutUs = function () {
    return (React.createElement("div", { className: "library-Component" },
        React.createElement(header_component_1["default"], { bgcolor: "#043439" }),
        React.createElement(navigation_component_1["default"], null),
        React.createElement("div", { className: "bg-lib" },
            React.createElement("img", { className: "img", src: library_png_1["default"], alt: "" })),
        React.createElement("div", { className: "searchBar" },
            React.createElement("div", { className: "w-100" },
                React.createElement("input", { type: "text", placeholder: "search" }),
                React.createElement("label", null, "Sort By:"),
                React.createElement("select", { name: "sort", id: "sort" },
                    React.createElement("option", { value: "Relevance" }, "Relevance"),
                    React.createElement("option", { value: "Date" }, "Date")),
                React.createElement("button", { className: "searchBar__btn" }, " SEARCH "))),
        React.createElement("div", { className: "library-banner-section" },
            React.createElement("div", { className: "w-100" },
                React.createElement("div", { className: "left" },
                    React.createElement(image_component_1["default"], { src: banner2_jpg_1["default"], className: "images", width: "550", height: "650", alt: "..." })),
                React.createElement("div", { className: "right" },
                    React.createElement("div", { className: "header" },
                        React.createElement("div", { className: "support" }, "~~~~~~"),
                        React.createElement("div", { className: "celebrate" }, "~~~~~~")),
                    React.createElement("div", { className: "body" },
                        React.createElement("p", null, "Many writers have dreamt to be authors. But not all writers get to fulfill this dream. We understand how difficult the road to publishing can get. With thousands of manuscripts written every day, not all get picked up by a publisher. But this may change when you have your manuscript ready in professional book form."),
                        React.createElement("p", null, "Stratton Press is an Author Service Provider. Our mission is help you take the brave, first steps and to press on, throughout your publishing journey."),
                        React.createElement("p", null, "We\u2019ll give you the tools and the team you need. From book cover design to editing, to distribution and marketing.  Imagine having your own professional team dedicated to work on your book."),
                        React.createElement("p", null, "We are here to support you. To get you Your space so that the world can see Your story. And yes, should a traditional publisher discover the wonder that you truly are, we will be as joyful as you. And in each step closer, for every success you\u2019d make, we will celebrate You."))))),
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
