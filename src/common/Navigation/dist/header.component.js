"use strict";
exports.__esModule = true;
var React = require("react");
var HeaderSection = function (_a) {
    var bgcolor = _a.bgcolor;
    return (React.createElement("div", { className: "contactHeader", style: { backgroundColor: bgcolor } },
        React.createElement("div", { className: "w-100" },
            React.createElement("div", { className: "flex" },
                React.createElement("label", { className: "callSection" },
                    React.createElement("span", { className: "spanTag" },
                        " ",
                        React.createElement("a", { href: "tel:+833.323.7009" }, "Call 833.323.7009"))),
                React.createElement("label", { className: "searchSection", style: { cursor: 'pointer' } },
                    React.createElement("span", { className: "spanTag" },
                        " ",
                        React.createElement("a", { href: "mailto:publish@stratton-press.com" }, " Email: publish@stratton-press.com "),
                        " "))))));
};
exports["default"] = HeaderSection;
