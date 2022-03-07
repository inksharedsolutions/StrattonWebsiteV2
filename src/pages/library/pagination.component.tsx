import * as React from 'react';
import { Link } from "react-router-dom";


interface Props {
    postPerPage: any,
    totalPosts: any,
    updateNum: (args: number)=> void,
    search: any,
    checked: any,
    

    
}


const Pagination:React.FC<Props> = ({postPerPage, totalPosts ,updateNum ,search , checked
}) => {
        const pageNumbers = [];
    
        console.log(search)
        console.log(checked.value)
        for(let i= 1; i <= Math.ceil(totalPosts / postPerPage); i++){
            pageNumbers.push(i);
        }
        if(search.length == []|| !checked){
          console.log("test")
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
        else{
          console.log("false")
          return (
            <h1></h1>
          )
        }
}

export default Pagination;