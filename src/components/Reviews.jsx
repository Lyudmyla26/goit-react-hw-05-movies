import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getReviews} from '../fetch/API'
 const Reviews =()=>{
    
    const[reviews, setReviews] =useState([])
   const {movieId} = useParams()
    useEffect(()=>{
        
        
        async function fetchReviews(){
            try {
                const responseFetch = await getReviews(movieId)
                console.log(responseFetch)
                const data = responseFetch.map((item)=> ({
                    id: item.id,
                    name: item.author,
                    content: item.content,
            
                }));
                setReviews(data)
                      }
                     catch (error) {
                      console.log('noyo.');
                    } 
          };
          fetchReviews()
          
    }, [movieId]);
   
return <>
<ul>
    {reviews.length>0 ? (reviews.map(({id, name, content})=>(
    <li key={id}>
        <h2>{name}</h2>
        <p>{content}</p>
    </li>
))) : (<p> Відгуків не знайдено</p> )}

</ul>


</>
} ;
export default Reviews;