import * as React from 'react';
import HeaderSection from "../../common/Navigation/header.component";
import Navigation from "../../common/Navigation/navigation.component";
import FooterComp from "../../common/Footer/footer.component";
import Image from "../../common/Image/image.component";

import publishing from "../../assets/images/backgrounds/thinking.png";
import booktrailer from "../../assets/images/backgrounds/booktrailer.png";
import bookGroup from "../../assets/images/books/bookgroup.png";
import Rectangle from "../../assets/images/backgrounds/Rounded Rectangle.png";
import radioint from "../../assets/images/backgrounds/radioint.png";
import Website from "../../assets/images/backgrounds/websites.png";
import usreview from "../../assets/images/backgrounds/usreview.png";
import bookreview1 from "../../assets/images/books/book-review1.png";
import AmazonKindle from "../../assets/images/logo/Amazon Kindle.png";
import barnesNoble from "../../assets/images/logo/barnes & noble.png";
import Chapters from "../../assets/images/logo/chapters.png";
import Indigo from "../../assets/images/logo/indigo.png";
import Ingram from "../../assets/images/logo/ingram.png";
import LightningSource from "../../assets/images/logo/lightning source.png";
import Book1 from "../../assets/images/books/Hampton.png";
import Web1 from "../../assets/images/books/web1.png";


interface Props{}

const ServicesContainer:React.FC<Props> = () => {

    const [path, setPath] = React.useState('');
    
    React.useEffect(() => {
        document.title = "Stratton Press";
        setPath(window.location.hash);
    }, [])
    // let strs = path.toString().split("");
    // let res = '';
    // for(var i = strs.length - 1; i>0 ; i--){
    //     if(strs[i] != '#'){
    //         res += strs[i];
    //     }else{
    //         break;
    //     }
    // }
    // let sult = res.split("");
    // let id = '';
    // for(var j = sult.length -1 ; j>=0 ; j--){
    //     id += sult[j];
    // }

    // if(id === 'book-covers'){
    //     return window.scrollTo(0,160);
    // }else if(id === 'book-trailer'){
    //     return window.scrollTo(0,2440);
    // }else if(id === 'radio-interview'){
    //     return console.log(id);
    // }else if(id === 'website'){
    //     return console.log(id);
    // }

    return(
        <div className="services-section">
            <HeaderSection bgcolor="#043439" />
            <Navigation />
            <div className="service-1" id="book-covers">
                <div className="w-100">
                    <div className="flex">
                        <div className="left">
                            <Image src={bookGroup} alt="..." />
                        </div>
                        <div className="right">
                            <h1>CUSTOMIZED BOOK COVERS</h1>
                            <p>We take pride in creating book gagagagacovers that mirror your book’s soul.  Our team of artists are of high calibre and award-winning.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-2">
                <div className="w-100">
                    <div className="container">
                        <div className="left">
                            <img src={Book1} alt="..."/>
                        </div>
                        <div className="right">
                            <img src={Book1} alt="..."/>
                        </div>
                    </div>
                    <div className="container">
                        <div className="left">
                            <img src={Book1} alt="..."/>
                        </div>
                        <div className="right">
                            <img src={Book1} alt="..."/>
                        </div>
                    </div>
                    <div className="container">
                        <div className="left">
                            <img src={Book1} alt="..."/>
                        </div>
                        <div className="right">
                            <img src={Book1} alt="..."/> 
                        </div>
                    </div>
                    <div className="container">
                        <div className="left">
                            <img src={Book1} alt="..."/>
                        </div>
                        <div className="right">
                            <img src={Book1} alt="..."/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-3" id="book-trailer">
                <div className="w-100">
                    <div className="flex">
                        <div className="left">
                            <h1>BOOK TRAILER</h1>
                            <p>What if we can add color to your story and basically bring your book to life? We will create beautiful trailers that show a glimpse of your story through images and sounds</p>
                        </div>
                        <div className="right">
                            <Image src={booktrailer} alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-4">
                <div className="w-100">
                    <div className="service-container">
                        <div className="left">
                            <iframe src="https://www.youtube.com/embed/TuhAb-6AJ3Q" frameBorder="0"></iframe>
                        </div>
                        <div className="middle">
                            <iframe src="https://www.youtube.com/embed/TuhAb-6AJ3Q" frameBorder="0"></iframe>
                        </div>
                        <div className="right">
                            <iframe src="https://www.youtube.com/embed/TuhAb-6AJ3Q" frameBorder="0"></iframe>
                        </div>
                    </div>
                    <div className="service-container">
                        <div className="left">
                            <iframe src="https://www.youtube.com/embed/TuhAb-6AJ3Q" frameBorder="0"></iframe>
                        </div>
                        <div className="middle">
                            <iframe src="https://www.youtube.com/embed/TuhAb-6AJ3Q" frameBorder="0"></iframe>
                        </div>
                        <div className="right">
                            <iframe src="https://www.youtube.com/embed/TuhAb-6AJ3Q" frameBorder="0"></iframe>
                        </div>
                    </div>
                    <div className="service-container">
                        <div className="left">
                            <iframe src="https://www.youtube.com/embed/TuhAb-6AJ3Q" frameBorder="0"></iframe>
                        </div>
                        <div className="middle">
                            <iframe src="https://www.youtube.com/embed/TuhAb-6AJ3Q" frameBorder="0"></iframe>
                        </div>
                        <div className="right">
                            <iframe src="https://www.youtube.com/embed/TuhAb-6AJ3Q" frameBorder="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-5" id="radio-interview">
                <div className="w-100">
                    <div className="flex">
                        <div className="left">
                            <Image src={radioint} alt="..." />
                        </div>
                        <div className="right">
                            <h1>RADIO INTERVIEW</h1>
                            <p>Take the Wonderful opportunity to talk about your story,
                                your characters, your inspiration in a very insightful
                                interview with Ric Bratton in This Week in America.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-6">
                <div className="w-100">
                    <div className="service-container">
                        <div className="left">
                            <iframe src="https://www.youtube.com/embed/TuhAb-6AJ3Q" frameBorder="0"></iframe>
                        </div>
                        <div className="middle">
                            <iframe src="https://www.youtube.com/embed/TuhAb-6AJ3Q" frameBorder="0"></iframe>
                        </div>
                        <div className="right">
                            <iframe src="https://www.youtube.com/embed/TuhAb-6AJ3Q" frameBorder="0"></iframe>
                        </div>
                    </div>
                    <div className="service-container">
                        <div className="left">
                            <iframe src="https://www.youtube.com/embed/TuhAb-6AJ3Q" frameBorder="0"></iframe>
                        </div>
                        <div className="middle">
                            <iframe src="https://www.youtube.com/embed/TuhAb-6AJ3Q" frameBorder="0"></iframe>
                        </div>
                        <div className="right">
                            <iframe src="https://www.youtube.com/embed/TuhAb-6AJ3Q" frameBorder="0"></iframe>
                        </div>
                    </div>
                    <div className="service-container">
                        <div className="left">
                            <iframe src="https://www.youtube.com/embed/TuhAb-6AJ3Q" frameBorder="0"></iframe>
                        </div>
                        <div className="middle">
                            <iframe src="https://www.youtube.com/embed/TuhAb-6AJ3Q" frameBorder="0"></iframe>
                        </div>
                        <div className="right">
                            <iframe src="https://www.youtube.com/embed/TuhAb-6AJ3Q" frameBorder="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-7" id="website">
                <div className="w-100">
                    <div className="flex">
                        <div className="left">
                            <h1>YOUR OWN WEBSITE</h1>
                            <p>Do you want to have your own marketing took,
                                with your own content? A website customized
                                for you, will do just that. Put in your books,
                                your videos, testimonials, etc - with our
                                talented website creators.
                            </p>
                        </div>
                        <div className="right">
                            <Image src={Website} alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-8">
                <div className="w-100">
                    <div className="service-container">
                        <div className="left">
                            <img src={Web1} alt="..."/>
                        </div>
                        <div className="right">
                            <img src={Web1} alt="..."/>
                        </div>
                    </div>
                    <div className="service-container">
                        <div className="left">
                            <img src={Web1} alt="..."/>
                        </div>
                        <div className="right">
                            <img src={Web1} alt="..."/>
                        </div>
                    </div>
                    <div className="service-container">
                        <div className="left">
                            <img src={Web1} alt="..."/>
                        </div>
                        <div className="right">
                            <img src={Web1} alt="..."/>
                        </div>
                    </div>
                    <div className="service-container">
                        <div className="left">
                            <img src={Web1} alt="..."/>
                        </div>
                        <div className="right">
                            <img src={Web1} alt="..."/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="channels-section">
                <div className="channel-header">
                    <p>AUTHORS' BOOKS ARE DISTRIBUTED IN THESE AMAZING CHANNELS</p>
                </div>
                <div className="channels-body">
                    <div className="amazon-kindle"><Image src={AmazonKindle} alt="..." /></div>
                    <div className="barnes-noble"><Image src={barnesNoble} alt="..." /></div>
                    <div className="chapters"><Image src={Chapters} alt="..." /></div>
                    <div className="indigo"><Image src={Indigo} alt="..." /></div>
                    <div className="ingram"><Image src={Ingram} alt="..." /></div>
                    <div className="lightning-source"><Image src={LightningSource} alt="..." /></div>
                </div>
            </div>
            <FooterComp />
        </div>
    )
}

export default ServicesContainer;