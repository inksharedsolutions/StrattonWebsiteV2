import * as React from "react";
import HeaderSection from "../../common/Navigation/header.component";
import Navigation from "../../common/Navigation/navigation.component";
import FooterComp from "../../common/Footer/footer.component";
import Image from "../../common/Image/image.component";

import banner from "../../assets/images/backgrounds/Privacy-Policy.jpg";

import AmazonKindle from "../../assets/images/logo/Amazon Kindle.png";
import barnesNoble from "../../assets/images/logo/barnes & noble.png";
import Chapters from "../../assets/images/logo/chapters.png";
import Indigo from "../../assets/images/logo/indigo.png";
import Ingram from "../../assets/images/logo/ingram.png";
import LightningSource from "../../assets/images/logo/lightning source.png";

interface Props {}

const faq: React.FC<Props> = () => {
  React.useEffect(() => {
    document.title = "Stratton Press";
  }, []);

  return (
    <div className="privacy-Component">
      <HeaderSection bgcolor="#043439" />
      <Navigation />
      <div className="privacy-section">
        <div className="w-100">
          <div className="left">
            <Image
              src={banner}
              className="images"
              width="550"
              height="650"
              alt="..."
            />
          </div>

          <div className="right">
            <div className="body">
              <p>
                Stratton Press Inc. website is committed to safeguarding and
                preserving the privacy of our visitors.
              </p>
              <p>
                This Policy explains what happens to any personal data that you
                provide to us, or that we collect from you whilst you visit our
                site and how we use cookies on this website.
              </p>
              <p>
                This Policy changes from time to time so please do review this
                Policy regularly.
              </p>
              <div className="header">
                <div className="box"></div>
                <h1>Information That We Collect</h1>
              </div>
              <p>
                In running and maintaining our website Stratton Press Inc.
                website may collect and process the following data about you:
              </p>
              <p>
                Information about your use of our site including details of your
                visits such as pages viewed and the resources that you access.
                Such information includes traffic data, location data and other
                communication data.
              </p>
              <p>
                Information provided voluntarily by you. For example, when you
                register for information or make a purchase.
              </p>
              <p>
                Information that you provide when you communicate with us by any
                means.
              </p>
              <div className="header">
                <div className="box"></div>
                <h1>Use of cookies</h1>
              </div>
              <p>
                Cookies provide information regarding the computer used by a
                visitor. We may use cookies where appropriate to gather
                information about your computer in order to assist us in
                improving our website.
              </p>
              <p>
                We may gather information about your general internet use by
                using the cookie. Where used, these cookies are downloaded to
                your computer and stored on the computer’s hard drive. Such
                information will not identify you personally; it is statistical
                data which does not identify any personal details whatsoever.
              </p>
              <p>
                Our advertisers may also use cookies, over which we have no
                control. Such cookies (if used) would be downloaded once you
                click on advertisements on our website.
              </p>
              <p>
                You can adjust the settings on your computer to decline any
                cookies if you wish. This can be done within the “settings”
                section of your computer.
              </p>
              <div className="header">
                <div className="box"></div>
                <h1>Use of Your Information</h1>
              </div>
              <p>
                We use the information that we collect from you to provide our
                services to you. In addition to this we may use the information
                for one or more of the following purposes:
              </p>
              <p>
                To provide information to you that you request from us relating
                to our products or services.
              </p>
              <p>
                To provide information to you relating to other products that
                may be of interest to you. Such additional information will only
                be provided where you have consented to receive such
                information.
              </p>
              <p>
                To inform you of any changes to our website, services or goods
                and products.
              </p>
              <p>
                If you have previously purchased goods or services from us we
                may provide to you details of similar goods or services, or
                other goods and services, that you may be interested in.
              </p>
              <p>
                We never give your details to third parties to use your data to
                enable them to provide you with information regarding Stratton
                Press Inc. and/or goods or services.
              </p>
              <div className="header">
                <div className="box"></div>
                <h1>Storing Your Personal Data</h1>
              </div>
              <p>
                In operating our website it may become necessary to transfer
                data that we collect from you to locations outside the United
                States of America for processing and storing. By providing your
                personal data to us, you agree to this transfer, storing and
                processing. We do our utmost to ensure that all reasonable steps
                are taken to make sure that your data is stored securely.
              </p>
              <p>
                Sending of information via the internet is not totally secure
                and on occasion such information can be intercepted. We cannot
                guarantee the security of data that you choose to send us
                electronically, sending such information is entirely at your own
                risk.
              </p>
              <div className="header">
                <div className="box"></div>
                <h1>Disclosing Your Information</h1>
              </div>
              <p>
                We will not disclose your personal information to any other
                party other than in accordance with this Privacy Policy and in
                the circumstances detailed below:
              </p>
              <p>
                In the event that we sell any or all of our business to the
                buyer.
              </p>
              <p>
                Where we are legally required by law to disclose your personal
                information.
              </p>
              <p>To further fraud protection and reduce the risk of fraud.</p>
              <div className="header">
                <div className="box"></div>
                <h1>Third Party Links</h1>
              </div>
              <p>
              
                On occasion we include links to third parties on this website.
                Where we provide a link it does not mean that we endorse or
                approve that site’s policy towards visitor privacy. You should
                review their privacy policy before sending them any personal
                data.
              </p>
              <div className="header">
                <div className="box"></div>
                <h1>Contacting Us</h1>
              </div>
              <p>
                Please do not hesitate to contact us regarding any matter
                relating to this Privacy and Cookies Policy via our Contact
                Form.
              </p>
            </div>
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
