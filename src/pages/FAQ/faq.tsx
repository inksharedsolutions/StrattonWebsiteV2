import * as React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import * as $ from "jquery";
import HeaderSection from "../../common/Navigation/header.component";
import Navigation from "../../common/Navigation/navigation.component";
import FooterComp from "../../common/Footer/footer.component";
import Image from "../../common/Image/image.component";

import AmazonKindle from "../../assets/images/logo/Amazon Kindle.png";
import barnesNoble from "../../assets/images/logo/barnes & noble.png";
import Chapters from "../../assets/images/logo/chapters.png";
import Indigo from "../../assets/images/logo/indigo.png";
import Ingram from "../../assets/images/logo/ingram.png";
import LightningSource from "../../assets/images/logo/lightning source.png";

import * as intlTelInput from "intl-tel-input";

import FaqItems from "./FaqItems";

interface Props {}

const faq: React.FC<Props> = () => {

  // Fetch all the details element.
  const details = document.querySelectorAll("details");
// Add the onclick listeners.
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        // Close all the details that are not targetDetail.
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open"); 
          }
        });
      });
  });;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); 
      
      $(".sub_button").addClass("hidden");
      $(".loader").addClass("display");
       
      emailjs.sendForm('sender', 'faq_template', e.currentTarget, 'user_norNgT0B71lOeGvDG16ph')
      .then((result) => {
        $(".sub_button").removeClass("hidden");
        $(".loader").removeClass("display");
        Swal.fire(
          'EMAIL SENT',
          'Thank you for reaching out to us, our representative will reach out to you soon',
          'success'
        );
      }, (error) => {
        $(".sub_button").removeClass("hidden");
        $(".loader").removeClass("display");
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Please contact us regarding this issue why you are getting this.</a>'
          })
      });
      e.currentTarget.reset();
  }

  const FaqList = [
    {
      title: "Who is Stratton Press?",
      summary: "Stratton Press is an Author Service Provider dedicated to helping authors with their publishing and marketing needs. We have a team of talented professionals committed to creating professionally-laid out books. We have author-clients awarded and recognized for their beautiful, customized cover designs and excellent content.",
    },
    {
      title: "What is an Author Service Provider?",
      summary: "An Author Service Provider offers the author a range of services needed in the design, production, distribution and marketing of his book, that normally he would have difficulty doing on his own. Imagine having to look for your own cover designer, interior designer, copy editor, developmental editor, proofreader, social media specialist, or marketing specialist. An Author Services Provider has experienced staff with varying competencies, who can support your specific needs. The author takes control of his work and decides which services he’d utilize. An Author Services Provider is like a one-stop shop for authors. You get to pick the services you need and have a team back you up.An Author Services Provider produces a professional, finished product created by both the author and an experienced group of publishing professionals. Stratton Press not only helps you create a beautiful, published book, we also help you distribute and market it.",
    },
    {
      title: "Are you a Vanity Press",
      summary: "No. Vanity publishers take ownership of the author’s work. Once a manuscript is published, it becomes the vanity publisher’s intellectual property. The author forfeits all rights to his book. Stratton Press ensures the authors assume control in the creative and production process and retain his rights and ownership when published.",
    },
    {
      title: "Would you own the rights to my book",
      summary: "Absolutely not. You own the rights to your book 100%. You have full control over your work, including how you wish to proceed at each step of the publishing process.",
    },
    {
      title: "What types of books do you publish?",
      summary: "We publish both fiction and non-fiction books. We can have them available in ebook, paperback and hardback format.",
    },
    {
      title: "Do you accept an already published book",
      summary: "Yes. As long as you retain full ownership to the rights of your books, we can help you re-publish it.",
    },
    {
      title: "How much are your fees?",
      summary: "Our services are varied. We may suggest a tailor-made program designed to address your needs and the direction you want to go with your book. Our marketing services can also be customized for you.  Stratton Press utilizes a wide array of platforms you can use to reach your market. It is best you consult this with your Author Specialist.",
    },
    {
      title: "How does the process start?",
      summary: "A Client Services Officer will gather all the materials needed to have a seamless publication process of your book. These are your manuscript, your photo, images, illustrations, and other necessary information for your book launch. The Project Management Officer will also guide you throughout the whole publication process. He/she will serve as your main point of contact to your artist and editors.? ",
    },
    {
      title: "Do you publish all book formats",
    summary: "Yes, we can publish in various formats including paperback, hardcover, eBook, and audiobook form.",
    },
    {
      title: "I am not good with design. Can you help me with your book cover?",
      summary: "Yes. Some of our authors have received Cover Design awards for the beautiful work we do. Our talented artists will capture the spirit of your book in a beautiful art form. You would also be part of the process. Cover designs will undergo your direction and approval.",
    },
    {
      title: "What kind of editing services do you do?",
      summary: "We can do different types of editing:Developmental Editing – It focuses mainly on improving the big picture story elements such as character development, improving the settings, enhancing the plot, and proper transitioning of the chapters. Our developmental editor will provide you some notes regarding your content and your book’s structure in an effort to bring out the best version of your manuscript. Copyediting – It is the process of checking for mistakes, inconsistencies, and repetition. No matter how many times you read your book, there are tendencies that you would overlooked some items that only the eyes of a meticulous copyeditor can catch. After the copyediting, your book will be proofread. This is where your book is being polished for publication. Line Editing – It is the process of checking your book line-by-line, tightening up sentence structure so the language is sharp and clear. A line editor looks closely at how a writer's word choice and syntax contributes to the tone or emotion of a piece of writing. The main concern of the line editor revolves around the overall pacing and logical flow of a piece.",
    },
    {
      title: "Where are you going to distribute my book?",
      summary: "We work with trusted and preferred partners to distribute your book worldwide. Your book will be distributed in major outlets and online retailers such as Amazon, Barnes and Noble, BooksAMillion, Chapters, Indigo, Kobo, and a lot more.",
    },
    {
      title: "Do you use Social Media for marketing?",
      summary: "Yes, our Social Media Branding Campaign is widely requested by authors. We study social media demographics and factor in your book genre, to ensure your book reaches the right audience. We can create and manage your online presence in different social media platforms. Talk to your Author Specialist to discuss more about this service.",
    },
    {
      title: "What file types do you accept for a manuscript?",
      summary: "We accept Microsoft World file. There are cases that we prefer a PDF copy especially if your book was previously published. However, some PDF, when converted may have formatting distortions. Don’t worry, Customer Support Group will guide you on this matter.",
    },
    {
      title: "What is the Author Review Process? Why do I need it?",
      summary: "Before your book proceeds with the Interior Layout Phase, your book undergoes Editing. This includes copyediting and developmental editing.  The editor meticulously checks your manuscript, word for word and page by page. It is during the Author Review Process where you may express your agreement or disagreement to each change or suggestion the editor has made. Our editors are undeniably capable and skilled but in the end, you know your book best.",
    },
    {
      title: "How may I reach my editor?",
      summary: "To streamline all communications and services, authors convey to the Customer Support Group their feedback, questions, and concerns. The Customer Service Group liase between authors and departments, including the editorial team. Streamlining communications is crucial to make sure each step done for your book is documented. This allows for better tracking of the status of work done for each book. The editing process is basically a back-and-forth exchange of documents, using a professionally-laid out-system that allows for your easy use and feedback. You can readily see comments and suggestions as it pertains to each page of your manuscript.  This is both an easy-to-follow and enriching process, and recording these is crucial to ensure a smooth continuity to the editing work, before the Interior Layout Phase can commence. ",
    },
  ];

  React.useEffect(() => {
    document.title = "Stratton Press";

    var input = document.getElementById("phone") as HTMLCanvasElement;
    intlTelInput(input, {
      geoIpLookup: function(callback) {
        $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
          var countryCode = (resp && resp.country) ? resp.country : "";
          callback(countryCode);
    
        });
  
      },
     
      hiddenInput: "full_number",
      nationalMode: true,
      separateDialCode: true,
      utilsScript: "intl-tel-input/build/js/utils.js",
    });
  }, []);

  return (
    <div className="faq-section">
      <HeaderSection bgcolor="#043439" />
      <Navigation />
      <div className="faq-1" id="faq-1">
        <div className="faq-banner">
        <div className="loader"></div>
        <div className="con">
        <div className="faq-header">
            {" "}
            <h1> FREQUENTLY ASKED QUESTIONS </h1>{" "}
          </div>
          <div className="faq-footer"> 
            <h2>Stratton Press FAQs quick links</h2>
            <p>To help you navigate our frequently asked questions page, you can click on the links below to 
              quickly get the answer you need.
            </p>

              <div className="faq-lists">
                  {FaqList.map((faqItem) => (
                     <FaqItems data={faqItem} />
                  ))}
                  <details>
                    <summary>
                    My manuscript is in multiple files. Does Stratton Press merge them into one file for me?
                    </summary>
                    <p>
                      Stratton Press requires authors to merge their own files prior to submitting them 
                      to the Project Management Officer. This is to ensure the sequence of the manuscript 
                      is accurate. <br/><br/>
                      Microsoft Word makes it very easy to merge multiple documents into one 
                      file. Just follow these steps: <br/> 
                      1. Open the first word document of your manuscript. <br/> 
                      2. Place the text cursor at the end of the document, or that space where you would like the next file to start. <br/> 
                      3. At the top of your opened Microsoft Word document is a toolbar. Find the “Insert” menu and select “File”. <br/> 
                      4. Browse for and select the next file to be merged. <br/> 
                      5. Repeat as necessary.
                    </p>
                  </details>
              </div>

          </div> 

        </div>
          <div className="faq-bg">
            <div className="w-100">
              <div className="faq-container">
                <div className="left">
                  <div className="faq-main">
                    <h2>Ask Client Support</h2>
                    <p>
                      If you have any questions that we haven't been able to
                      answer, we would love to hear from you! Please complete
                      this form and someone from the Client Support Group will
                      be in touch.
                    </p>

                    <form onSubmit={sendEmail}>
                    <div className="input-con">
                      <input
                      type="hidden" 
                      value="FAQ" 
                      name="page"
                      />  
                      <input
                        type="text"
                        className="name"
                        required={true}
                        placeholder="Full Name"
                        name="name"
                      />
                      <div className="flex">
                        
                        <input
                          id="phone"
                          type="tel"
                          className="phone"
                          placeholder="Phone"
                          name="phone"
                          required={true}
                        />

                        <input
                          type="text"
                          className="email"
                          placeholder="Email"
                          name="email"
                          required={true}
                        />
                      </div>

                      <input
                        type="text"
                        className="subject"
                        placeholder="Subject"
                        name="subject"
                        required={true}
                      />

                      <textarea
                        className="textarea"
                        id=""
                        placeholder="Your Message"
                        name="message"
                        required={true}
                      ></textarea>
                      <br />
                      <button type="submit" className="sub_button">Send</button>
                    </div>
                    </form>

                  </div>
                </div>

                <div className="right"></div>
              </div>
            </div>

            <div className="p100"></div>
          </div>
        </div>
      </div>

      <div className="channels-section">
        <div className="channel-header">
          <p>AUTHORS' BOOKS ARE DISTRIBUTED IN THESE AMAZING CHANNELS</p>
        </div>
        <div className="channels-body">
          <div className="amazon-kindle">
            <Image src={AmazonKindle} alt="..." />
          </div>
          <div className="barnes-noble">
            <Image src={barnesNoble} alt="..." />
          </div>
          <div className="chapters">
            <Image src={Chapters} alt="..." />
          </div>
          <div className="indigo">
            <Image src={Indigo} alt="..." />
          </div>
          <div className="ingram">
            <Image src={Ingram} alt="..." />
          </div>
          <div className="lightning-source">
            <Image src={LightningSource} alt="..." />
          </div>
        </div>
      </div>
      <FooterComp />
    </div>
  );
};

export default faq;
