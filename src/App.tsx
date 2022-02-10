import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import LoginContainer from "./pages/Login/login.container";
import DashboardContainer from "./pages/Dashboard/dashboard.container";
import AboutUsContainer from "./pages/AboutUs/aboutus.container";
import PublishContainer from "./pages/publish/publish.container";
import ServicesContainer from "./pages/services/services.container";
import ContactUs from "./pages/contactus/contactus.container";
import privacy from "./pages/PrivacyPolicy/PrivacyPolicy.container";
import faq from "./pages/FAQ/faq";
import LibraryContainer from "./pages/library/library.container";


import './assets/scss/main.scss';

export const App = () => {

    const [showButton, setShowButton] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.pageYOffset > 300){
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        })
    },[])

    const backToTop = () => {
        window.scrollTo(0,0);
    }

    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route exact={true} path="/" component={DashboardContainer} />
                    <Route path="/login" component={LoginContainer} />
                    <Route path="/about-us" component={AboutUsContainer} />
                    <Route path="/publish" exact component={PublishContainer} />
                    <Route path="/PackageAndServices" component={ServicesContainer} />
                    <Route path="/contact-us" component={ContactUs} />
                    <Route path="/faq" component={faq} />
                    <Route path="/privacy" component={privacy} />
                    <Route path="/library" component={LibraryContainer} />
                   
                </Switch>
            </HashRouter>   
            {
                showButton && (
                    <button onClick={backToTop} className="backtotop">
                        &#8679;
                    </button>
                )
            }
        </div>
    )
}