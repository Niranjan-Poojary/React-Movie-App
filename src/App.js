import React from "react";
import MovieList from "./MovieList";
 import Navbar from "./Navbar";
import { movies } from "./moviesData";

class App extends React.Component {
  constructor(){
    super();
    //Creating the state object
    this.state={
      movies:movies,
      cartCount:0
      
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
  handleDecStar = (movie)=>{
    const {movies} = this.state;

     const mid = movies.indexOf(movie);
     if(movies[mid].stars <=0){
      return;
     }
     movies[mid].stars -=0.5;

    this.setState({
       movies:movies
    })
  }
  handleToggleFav=(movie) => {
    const {movies} = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;

    this.setState({
      movies
    })
  }
  handleAddtoCart = (movie)=>{
    let {movies,cartCount}=this.state;
    const mid=movies.indexOf(movie);
    movies[mid].isInCart = !movies[mid].isInCart;
    console.log(movies[mid].isInCart)
    
    if(movies[mid].isInCart){
      cartCount = cartCount+1
    }
    else{
      cartCount -=1
    }

    this.setState({
      movies,
      cartCount
    })
  }

  render(){
    const {movies,cartCount}=this.state;
  return(
  <>
  {/* <Student stuname="Alexa" marks={90}/>
  <Student stuname="Siri" marks={80}/>
  <Student stuname="Google" marks={70}/>
  <Student/> */}
  <Navbar cartCount = {cartCount}/>
  <MovieList movies = {movies}
             addStars = {this.handleIncStar}
             decStars = {this.handleDecStar}
             toggleFav = {this.handleToggleFav}
             toggleCart = {this.handleAddtoCart}/>
  </>
  );
}
}
// Student.defaultProps={
//   stuname:"Student",
//   marks:"N.A"
// }

export default App;
