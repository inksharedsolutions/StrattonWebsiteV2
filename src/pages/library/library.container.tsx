import React, { useState, useEffect } from "react";
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
import axios from "axios";
import JSONData from "../../books.json";
import { Books } from "styled-icons/icomoon";
import BookLayout from "./books.component";
import Pagination from "./pagination.component";
import posts from "../../books.json";
import genre from "./genre.json";
interface Props {
  number: number;
}

const AboutUs: React.FC<Props> = ({ number }) => {
  const [post, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentpage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(10);
  const updateNum = (num: number): void => {
    setCurrentpage(num);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("../../books.json");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);
  //    GET Current post
  const indexOflastPost = currentPage * postPerPage;
  const indexofFirstPost = indexOflastPost - postPerPage;
  const currentPost = posts.slice(indexofFirstPost, indexOflastPost);

  //   change page

  //modified
  var temp = JSONData;

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("alphabetical");

  
  React.useEffect(() => {
    sortData('alphabetical');
},[search])

 

  const filterData = () => {
    let data = JSONData.filter(
      (d) =>
        d.author.toLowerCase().includes(search) ||
        d.title.toLowerCase().includes(search)
    );
    for (var i = 0; i < data.length; i++) {
      if (data.length > 0) {
        temp = data;
      } else temp = JSONData;
    }
    sortData(sort);
  };

  const sortData = (sort: string) => {
    switch (sort) {
      case "alphabetical":
        temp.sort((title1, title2) => {
          return title1.title
            .toLowerCase()
            .localeCompare(title2.title.toLowerCase());
        });
        break;
      case "Date":
        console.log(sort);
        break;
      default:
        temp.sort((title1, title2) => {
          return title1.title
            .toLowerCase()
            .localeCompare(title2.title.toLowerCase());
        });
        break;
    }

  };

 

  // Add/Remove checked item from list
/* tslint:disable */
  // const handleCheck = (event:any[]) => {
  //   var updatedList = [...checked];
  //   if (event.checked) {
  //     updatedList = [...checked, event.target.value];
  //   } else {
  //     updatedList.splice(checked.indexOf(event.target.value), 1);
  //   }
  //   setChecked(updatedList);
  // }; 

// const [selected, setSelected] = useState([]);
// const handleCheck = (e: ChangeEvent[]<{
//   name?: string | undefined,
//   value: unknown | number
// }>, child: React.ReactNode) => {
//   setSelected(e.target.value as number);
// };


const [checked, setChecked] = useState<any[]>([]);

const handleCheckbox =(e:any)=>{

if(e.checked)
  {setChecked([...checked,e.value])
 
}
  else
  {
    setChecked(  checked.splice(0,0, checked.indexOf(checked,e.value)));
  }
}


useEffect(() => {
  console.log(checked);
}, [checked])

  return (
    <div className="library-Component">
      <HeaderSection bgcolor="#043439" />
      <Navigation />
      <div className="temp"></div>
      <div className="bg-lib">
        <h2>
          STRATTON PRESS <span>PUBLISHING</span>
        </h2>
        <h3>Search any books of our Stratton Press Authors.</h3>
      </div>

      <div className="searchBar">
        <div className="w-100">
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearch(e.target.value)}
          />

          <label>Sort By:</label>

          <select
            name="sort"
            id="sort"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="alphabetical">Alphabetical</option>
            <option value="Relevance">Relevance</option>
            <option value="Date">Date</option>
          </select>

          <button onClick={() => filterData()}> SEARCH </button>
        </div>
      </div>

      <div className="library-banner-section">
        <div className="w-100">
          <div className="left">
            <h3>Genres</h3>
            {/* <div className="flex">
              <input type="checkbox" name="" id="" />
              <div className="text">All</div>
            </div> */}
            {
              genre.map((data,index)=>(
                <div className="flex" key={index}>
                    <input type="checkbox" 
                  onChange={(e) => handleCheckbox(e.target)}
                     name="genre" value={data.value} id={data.id} />
                    <div className="text">{data.title}</div>
                </div>
              ))
            }
            {/* <div className="flex">
              <input type="checkbox" onChange={(e) => handleCheckbox(e.target.value)} name="genre" value="Arts & Photography" id="Arts & Photography" />
              <div className="text">Arts & Photography</div>
            </div>
            <div className="flex">
              <input type="checkbox"  onChange={(e) => handleCheckbox(e.target.value)} name="genre" value="Biographies & Memoirs" id="Biographies & Memoirs" />
              <div className="text">Biograph6ies & Memoirs</div>
            </div>
            <div className="flex">
              <input type="checkbox"  onChange={(e) => handleCheckbox(e.target.value)} name="genre" value="Business Money" id="Business Money" />
              <div className="text">Business Money</div>
            </div>
            <div className="flex">
              <input type="checkbox"  onChange={(e) => handleCheckbox(e.target.value)}   name="genre" value="Christian Books & Bibles" id="Christian Books & Bibles" />
              <div className="text">Christian Books & Bibles</div>
            </div>
            <div className="flex">
              <input type="checkbox"  onChange={(e) => handleCheckbox(e.target.value)} name="genre" value="Cookbooks, Food & Wine" id="Cookbooks, Food & Wine" />
              <div className="text">Cookbooks, Food & Wine</div>
            </div>
            <div className="flex">
              <input type="checkbox"  onChange={(e) => handleCheckbox(e.target.value)} name="genre" value="Education & Teaching" id="Education & Teaching" />
              <div className="text">Education & Teaching</div>
            </div>
            <div className="flex">
              <input type="checkbox"  onChange={(e) => handleCheckbox(e.target.value)} name="genre" value="History" id="History" />
              <div className="text">History</div>
            </div>
            <div className="flex">
              <input type="checkbox"  onChange={(e) => handleCheckbox(e.target.value)}  name="genre" value="Kindle Ebooks" id="Kindle Ebooks" />
              <div className="text">Kindle Ebooks</div>
            </div>
            <div className="flex">
              <input type="checkbox"  onChange={(e) => handleCheckbox(e.target.value)} name="genre" value="Literature & Fiction" id="Literature & Fiction" />
              <div className="text">Literature & Fiction</div>
            </div>
            <div className="flex">
              <input type="checkbox"  onChange={(e) => handleCheckbox(e.target.value)} name="genre" value="Medical Books" id="Medical Books" />
              <div className="text">Medical Books</div>
            </div>
            <div className="flex">
              <input type="checkbox"  onChange={(e) => handleCheckbox(e.target.value)} name="genre" value="Mystery, Thriller & Suspense" id="Mystery, Thriller & Suspense" />
              <div className="text">Mystery, Thriller & Suspense</div>
            </div>
            <div className="flex">
              <input type="checkbox"  onChange={(e) => handleCheckbox(e.target.value)} name="genre" value="Parenting & Relationship" id="Parenting & Relationship" />
              <div className="text">Parenting & Relationship</div>
            </div>
            <div className="flex">
              <input type="checkbox"  onChange={(e) => handleCheckbox(e.target.value)} name="genre" value="Politics & Social Sciences" id="Politics & Social Sciences" />
              <div className="text">Politics & Social Sciences</div>
            </div>
            <div className="flex">
              <input type="checkbox"  onChange={(e) => handleCheckbox(e.target.value)} name="genre" value="Reference" id="Reference" />
              <div className="text">Reference</div>
            </div>
            <div className="flex">
              <input type="checkbox"  name="genre" value="Religion & Spirituality" id="Religion & Spirituality" />
              <div className="text">Religion & Spirituality</div>
            </div>
            <div className="flex">
              <input type="checkbox"  onChange={(e) => handleCheckbox(e.target.value)} name="genre" value="Romance" id="Romance" />
              <div className="text">Romance</div>
            </div>
            <div className="flex">
              <input type="checkbox"  onChange={(e) => handleCheckbox(e.target.value)} name="genre" value="Science Fiction & Fantasy" id="Science Fiction & Fantasy" />
              <div className="text">Science Fiction & Fantasy</div>
            </div>
            <div className="flex">
              <input type="checkbox"  onChange={(e) => handleCheckbox(e.target.value)} name="genre" value="Self-Help" id="Self-Help" />
              <div className="text">Self-Help</div>
            </div> */}
          </div>

          <div className="right" id="top">
            <BookLayout posts={currentPost} search={search} 
            checked={checked}
            ></BookLayout>
          </div>
        </div>
      </div>
      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        updateNum={updateNum}
      ></Pagination>

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

export default AboutUs;
