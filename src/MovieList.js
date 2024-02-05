import {Component} from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component{
  constructor(){
    super();
    this.state={
      movies:[
        {
        title:"The Avengers ",
        plot:"Supernatural powers shown in the movie",
        poster:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        price:"199",
        rating:"8.9",
        stars:0,
        fav:false,
        isInCart:false
        },
        {
          title:"The Iron Man ",
          plot:"Supernatural powers shown in the movie",
          poster:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
          price:"299",
          rating:"8.8",
          stars:0,
          fav:false,
          isInCart:false
        },
        {
          title:"The Dark Knight Rises ",
          plot:"Supernatural powers shown in the movie",
          poster:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
          price:"399",
          rating:"9.1",
          stars:0,
          fav:false,
          isInCart:false
          }
      ]
      
    }
    // this.addStars=this.addStars.bind(this);
}
  handleIncStar = (movie)=>{
    const {movies} = this.state;

     const mid = movies.indexOf(movie);
     if(movies[mid].stars >=5){
      return;
     }
     movies[mid].stars +=0.5;

    this.setState({
       movies:movies
    })
  }

    render(){
      //const {title,plot,poster,price,rating,stars,fav,isInCart}=this.state.movies;
       const {movies}=this.state;
       return (
        <>
        {movies.map((movie)=><MovieCard movies={movie} addStars={this.handleIncStar}/>)}
        
         
        </>
      )
    }
}
export default  MovieList;