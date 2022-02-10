import * as React from 'react';
import { Link } from "react-router-dom";


interface Props {
    postPerPage: any,
    totalPosts: any,
    updateNum: (args: number)=> void

    
}


const Pagination:React.FC<Props> = ({postPerPage, totalPosts ,updateNum}) => {
        const pageNumbers = [];
    

        for(let i= 1; i <= Math.ceil(totalPosts / postPerPage); i++){
            pageNumbers.push(i);
        }
    return(

        <nav>
            {/* {posts.map((data, index) => {  */}
        <ul className='pagination justify-content-center flex-wrap'>
          {
            pageNumbers.map((pageNum,index)=>{
              
              return(
                <li key={pageNum} className='page-item'>
                <button onClick={() =>updateNum(pageNum)}  className='page-link' >
              {pageNum}</button>
              </li>
              )
             
            })
          }
        </ul>
      </nav>
      
    )
}

export default Pagination;