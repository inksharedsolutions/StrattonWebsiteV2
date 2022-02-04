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
import Blueberry from "../../assets/images/books/bluedreams.png";
import Amazon from "../../assets/images/logo/amazon-lib.png";

import JSONData from "../../books.json";

interface Props { }

const AboutUs: React.FC<Props> = () => {

    return (

        <div className="library-Component">
            <HeaderSection bgcolor="#043439" />
            <Navigation />
            <div className="temp"></div>
            <div className="bg-lib">
              <h2>STRATTON PRESS  <span>PUBLISHING</span></h2>
              <h3>Search any books of our Stratton Press Authors.</h3>
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
                        
                    <h3>Genres</h3>
                        <div className="flex">
                            <input type="checkbox" name="" id="" />
                            <div className="text">All</div>
                        </div>
                        <div className="flex">
                            <input type="checkbox" name="" id="" />
                            <div className="text">Arts & Photography</div>
                        </div>
                        <div className="flex">
                            <input type="checkbox" name="" id="" />
                            <div className="text">Biographies & Memoirs</div>
                        </div>
                        <div className="flex">
                            <input type="checkbox" name="" id="" />
                            <div className="text">Business Money</div>
                        </div>
                        <div className="flex">
                            <input type="checkbox" name="" id="" />
                            <div className="text">Christian Books & Bibles</div>
                        </div>
                        <div className="flex">
                            <input type="checkbox" name="" id="" />
                            <div className="text">Cookbooks, Food & Wine</div>
                        </div>
                        <div className="flex">
                            <input type="checkbox" name="" id="" />
                            <div className="text">Education & Teaching</div>
                        </div>
                        <div className="flex">
                            <input type="checkbox" name="" id="" />
                            <div className="text">History</div>
                        </div>
                        <div className="flex">
                            <input type="checkbox" name="" id="" />
                            <div className="text">Kindle Ebooks</div>
                        </div>
                        <div className="flex">
                            <input type="checkbox" name="" id="" />
                            <div className="text">Literature & Fiction</div>
                        </div>
                        <div className="flex">
                            <input type="checkbox" name="" id="" />
                            <div className="text">Medical Books</div>
                        </div>
                        <div className="flex">
                            <input type="checkbox" name="" id="" />
                            <div className="text">Mystery, Thriller & Suspense</div>
                        </div>
                        <div className="flex">
                            <input type="checkbox" name="" id="" />
                            <div className="text">Parenting & Relationship</div>
                        </div>
                        <div className="flex">
                            <input type="checkbox" name="" id="" />
                            <div className="text">Politics & Social Sciences</div>
                        </div>
                        <div className="flex">
                            <input type="checkbox" name="" id="" />
                            <div className="text">Reference</div>
                        </div>
                        <div className="flex">
                            <input type="checkbox" name="" id="" />
                            <div className="text">Religion & Spirituality</div>
                        </div>
                        <div className="flex">
                            <input type="checkbox" name="" id="" />
                            <div className="text">Romance</div>
                        </div>
                        <div className="flex">
                            <input type="checkbox" name="" id="" />
                            <div className="text">Science Fiction & Fantasy</div>
                        </div>
                        <div className="flex">
                            <input type="checkbox" name="" id="" />
                            <div className="text">Self-Help</div>
                        </div>
                        
                    </div>
                    <div className="right">
                       
                        <div className="book-con">

                            {JSONData.map((data, index) => { 
                               return( 
                                    <div className="book" key={index}>
                                        <div className="lib-flex">
                                            <div className="book-left">
                                                <img src={data.thumbnail} alt=""/>
                                            </div>
                                            <div className="book-right">
                                                        <div className="genre">
                                                            <p>{data.genre}</p> 
                                                        </div>
                                                        <div className="title">
                                                            <h2>{data.title}</h2>
                                                            <h3>{data.subtitle}</h3>
                                                        </div>
                                                        <div className="author">
                                                            <p>{data.author}</p>
                                                        </div>
                                                        <div className="amazon">
                                                            <a href={data.amazon_link} rel="noreferrer noopener" target="_blank"><img src={Amazon} alt={data.title}  /></a>
                                                        </div>
                                            </div>
                                        </div>
                                    </div>
                                 ) 
                             })}  


                                  {/*    <div className="book">
                                    <div className="lib-flex">
                                            <div className="book-left">
                                                <img src={Blueberry} alt=""/>
                                            </div>
                                            <div className="book-right">
                                                        <div className="genre">
                                                            <p>Self-Help</p>
                                                        </div>
                                                        <div className="title">
                                                            <h2>Blueberry Dreams</h2>
                                                            <h3>Stimulate The Inner You</h3>
                                                        </div>
                                                        <div className="author">
                                                            <p>Charles Pope</p>
                                                        </div>
                                                        <div className="amazon">
                                                            <img src={Amazon} alt=""  />
                                                        </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="book">
                                        <div className="lib-flex">
                                                <div className="book-left">
                                                    <img src={Blueberry} alt=""/>
                                                </div>
                                                <div className="book-right">
                                                            <div className="genre">
                                                                <p>Self-Help</p>
                                                            </div>
                                                            <div className="title">
                                                                <h2>Blueberry Dreams</h2>
                                                                <h3>Stimulate The Inner You</h3>
                                                            </div>
                                                            <div className="author">
                                                                <p>Charles Pope</p>
                                                            </div>
                                                            <div className="amazon">
                                                                <img src={Amazon} alt=""  />
                                                        </div>
                                                </div>
                                            </div>
                                     </div> */}
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