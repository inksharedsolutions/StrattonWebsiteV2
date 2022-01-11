import * as React from "react";
import HeaderSection from "../../common/Navigation/header.component";
import Navigation from "../../common/Navigation/navigation.component";
import Image from "../../common/Image/image.component";
import banner from "../../assets/images/backgrounds/banner2.jpg";
import FooterComp from "../../common/Footer/footer.component";

import libraryBG from "../../assets//images/backgrounds/library.png";

import AmazonKindle from "../../assets/images/logo/Amazon Kindle.png";
import barnesNoble from "../../assets/images/logo/barnes & noble.png";
import Chapters from "../../assets/images/logo/chapters.png";
import Indigo from "../../assets/images/logo/indigo.png";
import Ingram from "../../assets/images/logo/ingram.png";
import LightningSource from "../../assets/images/logo/lightning source.png";

interface Props { }

const AboutUs: React.FC<Props> = () => {

    return (

        <div className="library-Component">
            <HeaderSection bgcolor="#043439" />
            <Navigation />

            <div className="bg-lib">
                <img className="img" src={libraryBG} alt="" />
            </div>

            <div className="searchBar">
                <div className="w-100">
                    <input type="text"  placeholder="search"/>

                    <label>Sort By:</label>

                    <select name="sort" id="sort">
                        <option value="Relevance">
                            Relevance
                        </option>
                        <option value="Date">
                            Date
                        </option>
                    </select>

                    <button> SEARCH </button>
                </div>
            </div>

            <div className="library-banner-section">
                <div className="w-100">
                    <div className="left">
                        <Image src={banner} className="images" width="550" height="650" alt="..." />
                    </div>
                    <div className="right">
                        <div className="header">
                            <div className="support">~~~~~~</div>
                            <div className="celebrate">~~~~~~</div>
                        </div>
                        <div className="body">
                            <p>
                                Many writers have dreamt to be authors. But not all writers get to fulfill this dream. We understand how difficult the road to publishing can get. With thousands of manuscripts written every day, not all get picked up by a publisher. But this may change when you have your manuscript ready in professional book form.
                            </p>
                            <p>
                                Stratton Press is an Author Service Provider. Our mission is help you take the brave, first steps and to press on, throughout your publishing journey.
                            </p>
                            <p>
                                We’ll give you the tools and the team you need. From book cover design to editing, to distribution and marketing.  Imagine having your own professional team dedicated to work on your book.
                            </p>
                            <p>
                                We are here to support you. To get you Your space so that the world can see Your story. And yes, should a traditional publisher discover the wonder that you truly are, we will be as joyful as you. And in each step closer, for every success you’d make, we will celebrate You.
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

    );
};

export default AboutUs;