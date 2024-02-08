import React from "react";
import MovieCard from "./MovieCard";


function MovieList(props){
  
      //const {title,plot,poster,price,rating,stars,fav,isInCart}=this.state.movies;
       const {movies, addStars, decStars, toggleFav,toggleCart}=props;
       return (
        <>
        {movies.map((movie,index)=><MovieCard movies={movie} 
                                        addStars={addStars}
                                        decStars={decStars}
                                        toggleFav={toggleFav}
                                        toggleCart={toggleCart}
                                        key={index}/>)}
        
        
         
        </>
      )
    }

export default  MovieList;