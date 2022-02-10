import * as React from 'react';
import {useHistory} from 'react-router-dom';
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/Logo_Plain.png";
import facebook from "../../assets/images/logo/facebook.png";
import instagram from "../../assets/images/logo/instagram.png";
import twitter from "../../assets/images/logo/twitter.png";
import bbbrating from "../../assets/images/logo/BBB-Rating.png";
import youtube from "../../assets/images/logo/youtube.png";

interface Props { }

const FooterComponent: React.FC<Props> = () => {

    const [details, setDetails] = React.useState<any>([]);
    const history = useHistory();

    const goToHome = () => {
        history.push('/');
            window.scrollTo(0, 0);
            behavior: 'smooth';
    }

    const goToPublish = () => {
        history.push('/publish');
            window.scrollTo(0, 0);
            behavior: 'smooth';
    }

    const goToAboutus = () => {
        history.push('/about-us');
            window.scrollTo(0, 0);
            behavior: 'smooth';
    }

    const goToContactUs = () => {
        history.push('/contact-us');
            window.scrollTo(0, 0);
            behavior: 'smooth';
    }
    const goToPrivacy = () => {
        history.push('/privacy');
            window.scrollTo(0, 0);
            behavior: 'smooth';
    }

    const goToLibrary = () => {
        // Redirect to Library, No Library Page yet
        history.push('/library');
            window.scrollTo(0, 0);
            behavior: 'smooth';
    }

    const goToFAQ = () => {
        history.push('/faq');
            window.scrollTo(0, 0);
            behavior: 'smooth';
    }


         React.useEffect(() => {
            document.title = "Stratton Press";
            
    // BBR RATING DATE
        var d = new Date();
        var month = d.getMonth()+1;
        var day = d.getDate();
        var output ="As of "+ (month<10 ? '0' : '') + month + '/' +
        (day<10 ? '0' : '') + day  + '/' + d.getFullYear() ;
        const date =  document.querySelector("#date");
         const p = document.createElement("p");
         p.textContent = output;
         date?.append(p);
        },[]);
        

    return (    
        <footer className="site-footer">
            <div className="footer-container">
                <div className="row row-footer">
                    <div className="col-md-6">
                        <div className="footer-logo">
                            <a href="index.html"><img src={logo} className="img-fluid"
                                alt="logo" /></a>
                        </div>
                    </div>
                    <div className="flex">
                    <div className="col-md-4  footer-nav">
                        <ul className="footer-links">

                            <li onClick={() => goToPublish()}>
                                <Link to="">Publish Your Book</Link>
                            </li>
                            
                            <li  onClick={() => goToAboutus()}>
                               <Link to=""> About Us</Link>
                            </li>

                            <li onClick={() => goToPrivacy()}>
                                  <Link to="">Privacy & Policy</Link>
                            </li>

                        </ul>
                    </div>

                    <div className="col-md-4 footer-nav">
                        <ul className="footer-links">

                            <li onClick={() => goToLibrary()}>
                                <Link to="">  Library</Link>
                            </li>


                            <li onClick={() => goToFAQ()}>
                                <Link to="">  FAQs</Link>
                            </li>

                            <li onClick={() => goToContactUs()}>
                                <Link to="">   Contact Us</Link>
                            </li>

                        </ul>
                    </div>
                    </div>
                </div> 
            
            </div>
            <div className="copyright-section">
                <div className="copyright-row">
                    <div className="col-4 align-self-center copyright-tag">
                        <p className="copyright-text">Copyright &copy; 2021 Stratton Press Publishing
                        </p>
                    </div>
                    <div className="col-4 align-self-center bbbrating">
                    <div ><a className="bbb_logo" href="https://www.bbb.org/us/ny/new-hyde-park/profile/publishers/stratton-press-publishing-llc-0121-182886/#sealclick" target="_blank" rel="nofollow"><img src="https://seal-newyork.bbb.org/seals/blue-seal-293-61-bbb-182886.png" alt="Stratton Press Publishing, LLC BBB Business Review"/></a>
                    </div>
                   {/* <div className="">
                   <a href="https://bbb.org/"  target="_blank" >    <img src={bbbrating} alt="..."/> </a>
                   </div>
                    <div  id = "date"></div>  */}
                    </div>
                    <div className="col-4 align-self-center">
                        <ul className="social-icons">
                            <li><a className="facebook" href="https://www.facebook.com/StrattonPressInc/" target="_blank"><img src={facebook} alt="..."/></a></li>
                            <li><a className="instagram" href="https://www.instagram.com/strattonpress/" target="_blank"><img src={instagram} alt="..."/></a></li>
                            <li><a className="twitter" href="https://twitter.com/strattonpress/" target="_blank"><img src={twitter} alt="..."/></a></li>
                            <li><a className="youtube" href="https://www.youtube.com/channel/UCYWHfl76kxGvKxT_wb8V9zQ" target="_blank"><img src={youtube} alt="..."/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent;