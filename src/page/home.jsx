import { LodMore } from "components/LodMore";
import { PopularMovies } from "components/PopularMovies";
import { fetchMovies } from "fetch/API";
import { useEffect, useState } from "react";
const Home =()=>{
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(()=>{
        async function fetch(){
            try {
                      const fetchedMovies = await fetchMovies(page);
                     
                      setTrendingMovies(prevMovies => [...prevMovies, ...fetchedMovies]);
                      
                      }
                     catch (error) {
                      console.log('noy.');
                    }
          };
          fetch();
          
    }, [page]);
   const handelPage =()=>{
    setPage(prevPage=> prevPage +1)

   }
return <main>
    <PopularMovies results={trendingMovies}/>
    {trendingMovies.length>0 && <LodMore onClick={handelPage}/>}
</main>
} 
export default Home;
