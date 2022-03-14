import React, { useEffect, useState } from "react";
import JSONData from "../../books.json";
import Amazon from "../../assets/images/logo/amazon-lib.png";

interface Props {
  books: Array<any>;
  tode: any;
  index: any;
  currentItems: any;
}

const RenderData = (currentItems: any[]) => {
  return (
    <div className="book-con">
      {currentItems.map((data, index: React.Key | null | undefined) => {
        return (
          <div className="book" key={index}>
            <div className="lib-flex">
              <div className="book-left">
                <img src={data.thumbnail} loading="lazy" alt="" />
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
                  <a
                    href={data.amazon_link}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <img src={Amazon} loading="lazy" alt={data.title} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

function paginate(data: any) {
 
  const [currentPage, setCurrentpage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxpageNumberLimit, setmaxpageNumberLimit] = useState(10);
  const [minpageNumberLimit, setminpageNumberLimit] = useState(0);

  const seachd = data.data
    ? data.data.slice()
    : JSONData.slice();

  const pages = [];
  for (let i = 1; i <= Math.ceil(seachd.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const setActive = (currentPage: any, number: number): string => {
    return currentPage == number ? "active" : "";
  };

  const handleClick = (number: number): void => {
    setCurrentpage(number);
  };

  const handlePrevbtn = (currentPage: any): void => {
    setCurrentpage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxpageNumberLimit(maxpageNumberLimit - pageNumberLimit);
      setminpageNumberLimit(minpageNumberLimit - pageNumberLimit);
    }
  };

  const handleNextbtn = (currentPage: any): void => {
    setCurrentpage(currentPage + 1);

    if (currentPage + 1 > maxpageNumberLimit) {
      setmaxpageNumberLimit(maxpageNumberLimit + pageNumberLimit);
      setminpageNumberLimit(minpageNumberLimit + pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxpageNumberLimit) {
    pageIncrementBtn = (
      <li onClick={() => handleNextbtn(currentPage)}> &hellip;</li>
    );
  }
  let pageDecrementBtn = null;
  if (pages.length > maxpageNumberLimit) {
    pageDecrementBtn = (
      <li onClick={() => handlePrevbtn(currentPage)}> &hellip;</li>
    );
  }

  const inderxOfLastItem = currentPage * itemsPerPage;
  const inderxOfFirstItem = inderxOfLastItem - itemsPerPage;

  const currentItems = data.data
    ? data.data.slice(inderxOfFirstItem, inderxOfLastItem)
    : JSONData.slice(inderxOfFirstItem, inderxOfLastItem);

  const renderPageNumber = pages.map((number) => {
    if (number < maxpageNumberLimit + 1 && number > minpageNumberLimit) {
      return (
        <li
          key={number}
          onClick={() => handleClick(number)}
          className={setActive(currentPage, number)}
        >
          {" "}
          {number}
        </li>
      );
    }
    return <></>;
  });

  useEffect(() => {
    RenderData(currentItems);
  }, []);

  return (
    <>
      {RenderData(currentItems)}
      <ul className="pageNumbers">
        <li>
          <button
            onClick={() => handlePrevbtn(currentPage)}
            disabled={currentPage == pages[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumber}
        {pageIncrementBtn}

        <li>
          <button
            onClick={() => handleNextbtn(currentPage)}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>
    </>
  );
}

export default paginate;
