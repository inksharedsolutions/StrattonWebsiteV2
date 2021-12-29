"use strict";
exports.__esModule = true;
var React = require("react");
var emailjs_com_1 = require("emailjs-com");
var sweetalert2_1 = require("sweetalert2");
// import * as $ from "jquery";
var header_component_1 = require("../../common/Navigation/header.component");
var navigation_component_1 = require("../../common/Navigation/navigation.component");
var footer_component_1 = require("../../common/Footer/footer.component");
var image_component_1 = require("../../common/Image/image.component");
var Amazon_Kindle_png_1 = require("../../assets/images/logo/Amazon Kindle.png");
var barnes___noble_png_1 = require("../../assets/images/logo/barnes & noble.png");
var chapters_png_1 = require("../../assets/images/logo/chapters.png");
var indigo_png_1 = require("../../assets/images/logo/indigo.png");
var ingram_png_1 = require("../../assets/images/logo/ingram.png");
var lightning_source_png_1 = require("../../assets/images/logo/lightning source.png");
var intlTelInput = require("intl-tel-input");
var FaqItems_1 = require("./FaqItems");
var faq = function () {
    // Fetch all the details element.
    var details = document.querySelectorAll("details");
    // Add the onclick listeners.
    details.forEach(function (targetDetail) {
        targetDetail.addEventListener("click", function () {
            // Close all the details that are not targetDetail.
            details.forEach(function (detail) {
                if (detail !== targetDetail) {
                    detail.removeAttribute("open");
                }
            });
        });
    });
    ;
    var sendEmail = function (e) {
        e.preventDefault();
        emailjs_com_1["default"].sendForm('outlook1', 'faq_template', e.currentTarget, 'user_norNgT0B71lOeGvDG16ph')
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
    var FaqList = [
        {
            title: "Who is Stratton Press?",
            summary: "Stratton Press is an Author Service Provider dedicated to helping authors with their publishing and marketing needs. We have a team of talented professionals committed to creating professionally-laid out books. We have author-clients awarded and recognized for their beautiful, customized cover designs and excellent content."
        },
        {
            title: "What is an Author Service Provider?",
            summary: "An Author Service Provider offers the author a range of services needed in the design, production, distribution and marketing of his book, that normally he would have difficulty doing on his own. Imagine having to look for your own cover designer, interior designer, copy editor, developmental editor, proofreader, social media specialist, or marketing specialist. An Author Services Provider has experienced staff with varying competencies, who can support your specific needs. The author takes control of his work and decides which services he’d utilize. An Author Services Provider is like a one-stop shop for authors. You get to pick the services you need and have a team back you up.An Author Services Provider produces a professional, finished product created by both the author and an experienced group of publishing professionals. Stratton Press not only helps you create a beautiful, published book, we also help you distribute and market it."
        },
        {
            title: "Are you a Vanity Press",
            summary: "No. Vanity publishers take ownership of the author’s work. Once a manuscript is published, it becomes the vanity publisher’s intellectual property. The author forfeits all rights to his book. Stratton Press ensures the authors assume control in the creative and production process and retain his rights and ownership when published."
        },
        {
            title: "Would you own the rights to my book",
            summary: "Absolutely not. You own the rights to your book 100%. You have full control over your work, including how you wish to proceed at each step of the publishing process."
        },
        {
            title: "What types of books do you publish?",
            summary: "We publish both fiction and non-fiction books. We can have them available in ebook, paperback and hardback format."
        },
        {
            title: "Do you accept an already published book",
            summary: "Yes. As long as you retain full ownership to the rights of your books, we can help you re-publish it."
        },
        {
            title: "How much are your fees?",
            summary: "Our services are varied. We may suggest a tailor-made program designed to address your needs and the direction you want to go with your book. Our marketing services can also be customized for you.  Stratton Press utilizes a wide array of platforms you can use to reach your market. It is best you consult this with your Author Specialist."
        },
        {
            title: "How does the process start?",
            summary: "A Client Services Officer will gather all the materials needed to have a seamless publication process of your book. These are your manuscript, your photo, images, illustrations, and other necessary information for your book launch. The Project Management Officer will also guide you throughout the whole publication process. He/she will serve as your main point of contact to your artist and editors.? "
        },
        {
            title: "Do you publish all book formats",
            summary: "Yes, we can publish in various formats including paperback, hardcover, eBook, and audiobook form."
        },
        {
            title: "I am not good with design. Can you help me with your book cover?",
            summary: "Yes. Some of our authors have received Cover Design awards for the beautiful work we do. Our talented artists will capture the spirit of your book in a beautiful art form. You would also be part of the process. Cover designs will undergo your direction and approval."
        },
        {
            title: "What kind of editing services do you do?",
            summary: "We can do different types of editing:Developmental Editing – It focuses mainly on improving the big picture story elements such as character development, improving the settings, enhancing the plot, and proper transitioning of the chapters. Our developmental editor will provide you some notes regarding your content and your book’s structure in an effort to bring out the best version of your manuscript. Copyediting – It is the process of checking for mistakes, inconsistencies, and repetition. No matter how many times you read your book, there are tendencies that you would overlooked some items that only the eyes of a meticulous copyeditor can catch. After the copyediting, your book will be proofread. This is where your book is being polished for publication. Line Editing – It is the process of checking your book line-by-line, tightening up sentence structure so the language is sharp and clear. A line editor looks closely at how a writer's word choice and syntax contributes to the tone or emotion of a piece of writing. The main concern of the line editor revolves around the overall pacing and logical flow of a piece."
        },
        {
            title: "Where are you going to distribute my book?",
            summary: "We work with trusted and preferred partners to distribute your book worldwide. Your book will be distributed in major outlets and online retailers such as Amazon, Barnes and Noble, BooksAMillion, Chapters, Indigo, Kobo, and a lot more."
        },
        {
            title: "Do you use Social Media for marketing?",
            summary: "Yes, our Social Media Branding Campaign is widely requested by authors. We study social media demographics and factor in your book genre, to ensure your book reaches the right audience. We can create and manage your online presence in different social media platforms. Talk to your Author Specialist to discuss more about this service."
        },
        {
            title: "What file types do you accept for a manuscript?",
            summary: "We accept Microsoft World file. There are cases that we prefer a PDF copy especially if your book was previously published. However, some PDF, when converted may have formatting distortions. Don’t worry, Customer Support Group will guide you on this matter."
        },
        {
            title: "What is the Author Review Process? Why do I need it?",
            summary: "Before your book proceeds with the Interior Layout Phase, your book undergoes Editing. This includes copyediting and developmental editing.  The editor meticulously checks your manuscript, word for word and page by page. It is during the Author Review Process where you may express your agreement or disagreement to each change or suggestion the editor has made. Our editors are undeniably capable and skilled but in the end, you know your book best."
        },
        {
            title: "How may I reach my editor?",
            summary: "To streamline all communications and services, authors convey to the Customer Support Group their feedback, questions, and concerns. The Customer Service Group liase between authors and departments, including the editorial team. Streamlining communications is crucial to make sure each step done for your book is documented. This allows for better tracking of the status of work done for each book. The editing process is basically a back-and-forth exchange of documents, using a professionally-laid out-system that allows for your easy use and feedback. You can readily see comments and suggestions as it pertains to each page of your manuscript.  This is both an easy-to-follow and enriching process, and recording these is crucial to ensure a smooth continuity to the editing work, before the Interior Layout Phase can commence. "
        },
    ];
    React.useEffect(function () {
        document.title = "Stratton Press";
        var input = document.getElementById("phone");
        intlTelInput(input, {
            separateDialCode: true
        });
    }, []);
    return (React.createElement("div", { className: "faq-section" },
        React.createElement(header_component_1["default"], { bgcolor: "#043439" }),
        React.createElement(navigation_component_1["default"], null),
        React.createElement("div", { className: "faq-1", id: "faq-1" },
            React.createElement("div", { className: "faq-banner" },
                React.createElement("div", { className: "faq-header" },
                    " ",
                    React.createElement("h1", null, " FREQUENTLY ASKED QUESTIONS "),
                    " "),
                React.createElement("div", { className: "faq-footer" },
                    React.createElement("h2", null, "Stratton Press FAQs quick links"),
                    React.createElement("p", null, "To help you navigate our frequently asked questions page, you can click on the links below to quickly get the answer you need."),
                    React.createElement("div", { className: "faq-lists" },
                        FaqList.map(function (faqItem) { return (React.createElement(FaqItems_1["default"], { data: faqItem })); }),
                        React.createElement("details", null,
                            React.createElement("summary", null, "My manuscript is in multiple files. Does Stratton Press merge them into one file for me?"),
                            React.createElement("p", null,
                                "Stratton Press requires authors to merge their own files prior to submitting them to the Project Management Officer. This is to ensure the sequence of the manuscript is accurate. ",
                                React.createElement("br", null),
                                React.createElement("br", null),
                                "Microsoft Word makes it very easy to merge multiple documents into one file. Just follow these steps: ",
                                React.createElement("br", null),
                                "1. Open the first word document of your manuscript. ",
                                React.createElement("br", null),
                                "2. Place the text cursor at the end of the document, or that space where you would like the next file to start. ",
                                React.createElement("br", null),
                                "3. At the top of your opened Microsoft Word document is a toolbar. Find the \u201CInsert\u201D menu and select \u201CFile\u201D. ",
                                React.createElement("br", null),
                                "4. Browse for and select the next file to be merged. ",
                                React.createElement("br", null),
                                "5. Repeat as necessary.")))),
                React.createElement("div", { className: "faq-bg" },
                    React.createElement("div", { className: "w-100" },
                        React.createElement("div", { className: "faq-container" },
                            React.createElement("div", { className: "left" },
                                React.createElement("div", { className: "faq-main" },
                                    React.createElement("h2", null, "Ask Client Support"),
                                    React.createElement("p", null, "If you have any questions that we haven't been able to answer, we would love to hear from you! Please complete this for  m and someone from the Client Support Group will be in touch."),
                                    React.createElement("form", { onSubmit: sendEmail },
                                        React.createElement("div", { className: "input-con" },
                                            React.createElement("input", { type: "hidden", value: "FAQ", name: "page" }),
                                            React.createElement("input", { type: "text", className: "name", required: true, placeholder: "Full Name", name: "name" }),
                                            React.createElement("div", { className: "flex" },
                                                React.createElement("input", { id: "phone", type: "tel", className: "phone", placeholder: "Phone", name: "phone", required: true }),
                                                React.createElement("input", { type: "text", className: "email", placeholder: "Email", name: "email", required: true })),
                                            React.createElement("input", { type: "text", className: "subject", placeholder: "Subject", name: "subject", required: true }),
                                            React.createElement("textarea", { className: "textarea", id: "", placeholder: "Your Message", name: "message", required: true }),
                                            React.createElement("br", null),
                                            React.createElement("button", { type: "submit" }, "Send"))))),
                            React.createElement("div", { className: "right" }))),
                    React.createElement("div", { className: "p100" })))),
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
exports["default"] = faq;
