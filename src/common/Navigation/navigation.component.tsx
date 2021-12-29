import * as React from "react";
import * as $ from "jquery";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import logo from "../../assets/images/logo/Logo.png";
import logo from "../../assets/images/logo/Company_Logo3.png";


interface Props {}

const Navigation: React.FC<Props> = () => {

  const [details, setDetails] = React.useState<any>([]);
  const history = useHistory();

  const getUserGeolocationDetails = () => {
    alert(details);
  };
  // SIDEBAR function
  const goToMenu = () => {
      $(".container-menu").toggleClass("hidden");
      $(".bar-1").toggleClass("change-1");
      $(".bar-3").toggleClass("change-3");
      $(".sidenav").toggleClass("changewidth");
  
    $(".navbar-menu").click(function () {
      $(".container-menu").show();
    });

  };
  // OVERLAY MENU function for android
  const goToOverlay = () => {
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
  const goToHome = () => {
    history.push("/");
    window.scrollTo(0, 0);
    behavior: "smooth";
  };

  const goToPublish = () => {
    history.push("/publish");
    window.scrollTo(0, 0);
    behavior: "smooth"; 
  };

  const goToAboutUs = () => {
    history.push("/about-us");
    window.scrollTo(0, 0);
    behavior: "smooth";
  };

  const goToContactUs = () => {
    history.push("/contact-us");
    window.scrollTo(0, 0);
    behavior: "smooth";
  };

  const goToFAQ = () => {
    history.push("/faq");
    window.scrollTo(0, 0);
    behavior: "smooth";
  };

  // const goToPolicy = () => {
  //   history.push("/privacy");
  //   window.scrollTo(0, 0);
  //   behavior: "smooth";
  // };
  // NavagationBar Function HideOnScroll
  const [scrollDir, setScrollDir] = React.useState("scrolling down");

  React.useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;
  
    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
  
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
  
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };
  0
    window.addEventListener("scroll", onScroll);

    if(scrollDir == "scrolling down")
    {
      $(".navbar").addClass("nav-down");
      $(".navbar").removeClass("nav-up");

      $(".container-menu").removeClass("hidden"); 
      $(".bar-1").removeClass("change-1");
      $(".bar-3").removeClass("change-3");
      $(".sidenav").removeClass("changewidth");

    }
    else{
      $(".navbar").addClass("nav-up");
      $(".navbar").removeClass("nav-down");
      $(".sidenav").addClass("nav-down1");
    }
  
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop < 5) {

    $(".navbar").addClass("top");
    $(".sidenav").addClass("top1");
  
  } else {
   
    $(".navbar").removeClass("top");
    $(".sidenav").removeClass("top1");
   
  }
}

  return (

    //  
    <nav className="navbar navbar-light navbar-expand-md justify-content-center shadow-sm mb-0 top">
      
      {/* OVERLAY MENU */}
              <div className="overlay">
                <div className="container-sp">
                  <ul className="menu">
                    <li className="line" onClick={() => goToHome()}>
                      <Link to="">Home</Link>
                    </li>
                    <li className="line" onClick={() => goToAboutUs()}>
                      <Link to="">About Us</Link>
                    </li>
                    <li className="line" onClick={() => goToPublish()}>
                      <Link to="">Publish your book</Link>
                    </li>
                    {/* <li className="line">
                      <Link to="/">Library</Link>
                    </li> */}
                    <li className="line">
                        
                    </li>
                    <li className="line">
                      <Link to="faq"  onClick={() => goToFAQ()}>FAQ</Link>
                    </li>
                    <li className="line">
                      <Link to="contact-us"  onClick={() => goToContactUs()}>Contact Us</Link>
                    </li>
                    <li className="line">
                      <HashLink to="/#testimonials1"> Reviews </HashLink>
                    </li>
                    {/* <li className="line">
                      <Link to="/privacy"  onClick={() => goToPolicy()}>Privacy&Policy</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
      {/* END OF OVERLAY MENU */}

      <div className="container-fluid navbar-section">
        <a href="./index.html" className="navbar-brand d-flex w-50 me-auto">
          <Link to="" onClick={() => goToHome()}> 
            <img src={logo} className="logo-img" alt="" />
          </Link>
        </a>

       {/* SideBar */}
       <div className="sidenav">
            <Link to="faq"  onClick={() => goToFAQ()}>FAQ</Link>
            {/* <Link to="contact-us"  onClick={() => goToContactUs()}>Contact Us</Link> */}
            <HashLink to="/#testimonials"> Reviews </HashLink>
            {/* <Link to="/privacy"  onClick={() => goToPolicy()}>Privacy&Policy</Link> */}
        </div>
        {/* End of SideBar */}
        {/* MENU BUTTON FOR PHONES */}
        <div className="navbar-sp" onClick={() => goToOverlay()}>
          <div className="container">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
        {/* END OF MENU BUTTON */}
        {/* COLLAPSABLE ON RESPONSIVE */}
        <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">     
          
          <ul className="nav navbar-nav ms-auto w-100 justify-content-end">
          <li className="nav-item active" onClick={() => goToAboutUs()}>
              <Link to="/about-us"
                className="nav-link text-uppercase fw-bolder"
              >
                About Us
              </Link>
            </li>
            
            <li className="nav-item"  onClick={() => goToPublish()}> 
              <Link to="" className="nav-link text-uppercase fw-bolder">
                Publish your book
              </Link>
            </li>
            <li className="nav-item" onClick={() => goToContactUs()}> 
              <Link to="" className="nav-link text-uppercase fw-bolder">
                Contact Us
              </Link>
            </li>
           
            {/* <li className="nav-item">
              <Link  to="" className="nav-link text-uppercase fw-bolder">
                Library
              </Link>
            </li> */}

            {/* Menu */}
              <li onClick={() => goToMenu()}>
                  <div className="navbar-menu" >
                    <div className="container">
                      <div className="bar-1"></div>
                      <div className="container-menu">MENU</div>
                      <div className="bar-3"></div>
                    </div>
                  </div>
              </li>
             {/* END OF MENU */}
          </ul>

        </div>
        {/* END FOR COLLAPSABLE */}
      </div>
      
    </nav>
    
  );
};

export default Navigation;
