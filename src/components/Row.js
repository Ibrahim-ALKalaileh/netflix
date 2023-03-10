import React,{useState,useEffect} from 'react';

import axios from '../axios';
import './Row.css';

const base_url ="https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {

    const [movies, setMovies] = useState([]);
    

    useEffect(()=>{
        //run oncce hwne the row load and don't run again
        async function fetchData (){
            const request = await axios.get(fetchUrl);
          
            setMovies(request.data.results);
            return request;

        }
        fetchData();

    },[fetchUrl]);
    
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            //https://www.youtube.com/watch?v=SFMQWsssTns
            autoplay: 1,
        },
    };

   
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {/* serveral row posters */}
                {movies.map((movie)=>
                (
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                    <img 
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                        src={`${base_url}${isLargeRow ? movie.poster_path :movie.backdrop_path}`} 
                        alt={movie.name} />
                    )
                    
                ))}

            </div>
            
           
        </div>
    )
}

export default Row;