import React, { useState, useEffect } from "react";
import HeaderSection from "../../common/Navigation/header.component";
import Navigation from "../../common/Navigation/navigation.component";
import Image from "../../common/Image/image.component";
import banner from "../../assets/images/backgrounds/banner2.jpg";
import FooterComp from "../../common/Footer/footer.component";
import $ from "jquery";
import AmazonKindle from "../../assets/images/logo/Amazon Kindle.png";
import barnesNoble from "../../assets/images/logo/barnes & noble.png";
import Chapters from "../../assets/images/logo/chapters.png";
import Indigo from "../../assets/images/logo/indigo.png";
import Ingram from "../../assets/images/logo/ingram.png";
import LightningSource from "../../assets/images/logo/lightning source.png";
import JSONData from "../../books.json";
import PaginateTest from "./paginate";

import genre from "./genre.json";
interface Props {
  number: number;
}

const AboutUs: React.FC<Props> = ({ number }) => {
  const [post, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentpage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(5);
  const updateNum = (num: number): void => {
    setCurrentpage(num);
  };

  var temp = JSONData;

  const [search, setSearch] = useState<any>();
  const [checkBoxData, setcheckBoxData] = useState<any>();
  const [tempSearch, settempSearch] = useState<any>();
  const [searchText, setSearchText] = useState<any>();
  const [sort, setSort] = useState("alphabetical");

  const handleSearch = (text: string) => {
    const search = text.toLowerCase();
    
    setSearchText(search);
    let filterSearch = JSONData;
    if (checked.length) {
      filterSearch = checkBoxData;
    }
    const data = JSONData.filter(
      (books) =>
        books.author.toLowerCase().includes(search) ||
        books.title.toLowerCase().includes(search)
    );
    console.log(data);
    setSearch(data);
    settempSearch(data);
  };


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

  const [checked, setChecked] = useState<string[]>([]);

  const handleCheckbox = (e: any) => {
    setcheckBoxData([]);
    if (e.target.checked) {
      setChecked([...checked, e.target.value]);
      console.log("p1")
    } else {
      // const getSelectedCheckBoxes = checked.filter((item) => {
      //   item !== e.target.value;
      // });

      var updatedList = [...checked];

      updatedList.splice(checked.indexOf(e.target.value), 1);
      setChecked(updatedList);
    //  console.log("p2") 
    }
  };

  useEffect(() => {
    const filterSearch = searchText ? tempSearch : JSONData;
    if (checked.length) {
      const data = filterSearch.filter(function (books: any) {
        return checked.indexOf(books.genre.trim()) !== -1;
      });
      setcheckBoxData(data);
    }
  }, [checked]);

  useEffect(() => {
    if (checkBoxData?.length) {
      setSearch(checkBoxData)
    } else {
      setSearch(tempSearch);
    }
  }, [checkBoxData]);
  
  React.useEffect(() => {
    sortData("alphabetical");
  }, [search]);


  $(".genre-ttl").click(function () {
    if (screen.width <= 600) {
      $(".genre-list").toggleClass("display");
    }
  });

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
            onChange={(e) => handleSearch(e.target.value)}
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
            <h3 className="genre-ttl" id="genre-ttl">
              {" "}
              Genres <span className="Arrow"> &#8650;</span>
            </h3>

            {genre.map((data, index) => (
              <div className="flex genre-list " key={index}>
                <input
                  type="checkbox"
                  onChange={(e) => handleCheckbox(e)}
                  name="genre"
                  value={data.value}
                  id={data.id}
                />
                <div className="text">{data.title}</div>
              </div>
            ))}
          </div>

          <div className="right" id="top">
            <PaginateTest data={search}></PaginateTest>
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

export default AboutUs;
