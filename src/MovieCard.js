import {Component} from "react";

class MovieCard extends Component{
    constructor(){
        super();
        this.state={
            title:"The Avengers ",
            plot:"Supernatural powers shown in the movie",
            price:"199",
            rating:"8.9",
            stars:0
        }
        // this.addStars=this.addStars.bind(this);
    }
    addStars=()=>{
        //using setState function(method 1)
        // this.setState({
        //     stars:this.state.stars +0.5
        // })

        //Method 2
        this.setState((prevState)=>{
            return{
                stars:prevState.stars +0.5
            }
        })
        
        // this.state.stars +=0.5;
        // console.log("this.state.stars:",this.state.stars);
    }
    render(){
        const {title,plot,price,rating,stars}=this.state
       return (
       <div className="main">
            <div className="movie-card">
                <div className="left">
                    <img alt="Poster" src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"/>
                </div>
                <div className="right">
                    <div className="title">{this.state.title}</div>
                    <div className="plot">{plot}</div>
                    <div className="price">Rs.{price}</div>

                    <div className="footer">
                        <div className="rating">{rating}</div>
                        <div className="star-dis">
                           <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/4254/4254106.png"/>
                           <img alt="star" 
                               src="https://cdn-icons-png.flaticon.com/128/616/616489.png" 
                               className="stars"/>
                           <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                           onClick={this.addStars}/>
                           <span className="starCount">{stars}</span>
                             </div> 
                             
                        <button className="favourite-btn">Favourite</button>
                        <button className="car-btn">Add to cart</button>
                    </div>
                </div>
            </div>
       </div>)
    }
}
export default MovieCard;