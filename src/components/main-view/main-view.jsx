import React from "react";
import { useEffect, useState } from "react";

import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";


export const MainView = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://guarded-wave-99547.herokuapp.com/movies")
            .then((response) => response.json())
            .then((data) => {
            const movies = data.docs.map((doc) => {
                return {
                    id: doc.key,
                    title: doc.title,
                    director: doc.director_name?.[0]
                };
            });
        
        setMovies(movies);
    });
}, []);

const [selectedMovie, setSelectedMovie] = useState(null);


    if (selectedMovie) {
        return ( <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        );
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    } 
    
    return (
            <div>
                {movies.map((movie) => (
                    <MovieCard
                    key={movie.id}
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                    }} />
                ))}
            </div>
        );
    };