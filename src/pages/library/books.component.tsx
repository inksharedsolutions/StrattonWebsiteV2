import * as React from 'react';
import JSONData from "../../books.json";
import genre from "./genre.json";

import $ from "jquery"; 

import Amazon from "../../assets/images/logo/amazon-lib.png";

interface Props {
    posts: Array<any>
    search: any,
    checked: any;
}

const Books:React.FC<Props> = ({posts ,search, checked} ) => {
    var temp = JSONData;
   
    // if(search.trim() !="" || checked !=""){
    if(search.trim() !="" ){
        
    return(
      
         
        <div className="book-con">
          {JSONData.filter((d) => {
              console.log(genre);
              console.log(checked);
            console.log(d.genre.includes(checked));
               
              return d.title.toLowerCase().includes(search.toLowerCase()) ||
               d.author.toLowerCase().includes(search.toLowerCase()) 
               ||d.genre.includes(checked)
           
           }).map((data, index) => { 
            
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
     </div>
    )
    }
    else{
        return(

         
            <div className="book-con">
              {posts.map((data, index) => { 
                
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
         </div>
        )
    }
    
    

}

export default Books;