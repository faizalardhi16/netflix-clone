import React, {useState, useEffect} from 'react';
import axios from './axios';
import requests from './request';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
       async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginal);
            setMovie(
                request.data.results[
                    Math.floor(Math.random () * request.data.results.length -1 )
                    ]
            )    
       }

       fetchData();
    }, []);

    function truncate(str, n){
        return str?.length > n ?  str.substr(0, n-1) + "..." : str;
    }

    return (
        <header className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition:"center center"
        }}
        >

            <div className="banner__contents">

                {/* Header Tittle */}
                <h1 className="banner__title">
                    {movie?.tittle || movie?.name || movie?.original_name}
                </h1>

                {/* 2 Buttons */}

                <div className="banner__buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>

                {/* Description*/}
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>

            </div>

            <div className="banner--fadeButton"/>

        </header>
    )
}

export default Banner
