 function MovieCard(props){
    
    // addStars=()=>{
        //using setState function(method 1)
        // this.setState({
        //     stars:this.state.stars +0.5
        // })

        //Method 2
        // if(this.state.stars>=10){
        //     return;
        // }
        // this.setState((prevState)=>{
        //     return{
        //         stars:prevState.stars +0.5
        //     }
        // })
        
        // this.state.stars +=0.5;
        // console.log("this.state.stars:",this.state.stars);
    // }

    // decStars=()=>{
        //using setState function(method 1)
        // this.setState({
        //     stars:this.state.stars -0.5
        // })

        //Method 2
        // if(this.state.stars<=0){
        //     return;
        // }
        // this.setState((prevState)=>{
        //     return{
        //         stars:prevState.stars -0.5
        //     }
        // });
        
        // this.state.stars -=0.5;
        // console.log("this.state.stars:",this.state.stars);
      
    // }
    // handleFav=()=>{
    //     this.setState({
    //         fav:!this.state.fav
    //     })
    // }
    // handleAddToCart=()=>{
    //     this.setState({
    //         isInCart:!this.state.isInCart
    //     })
    // }

        const {movies, addStars,decStars,toggleFav,toggleCart}=props;

        const {title,plot,price,rating,stars,fav,isInCart}=props.movies;
       return (
       <div className="main">
            <div className="movie-card">
                <div className="left">
                    <img alt="Poster" src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"/>
                </div>
                <div className="right">
                    <div className="title">{title}</div>
                    <div className="plot">{plot}</div>
                    <div className="price">Rs.{price}</div>

                    <div className="footer">
                        <div className="rating">{rating}</div>
                        <div className="star-dis">
                           <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/4254/4254106.png" 
                           onClick={()=>{decStars(movies)}}/>
                           <img alt="star" 
                               src="https://cdn-icons-png.flaticon.com/128/616/616489.png" 
                               className="stars"/>
                           <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                           onClick={()=>{addStars(movies)}}/>
                           <span className="starCount">{stars}</span>
                             </div> 
                         {/* {fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Un-Favourites</button>    
                        :<button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}

                           <button className={fav?"unfavourite-btn":"favourite-btn"} 
                           onClick={()=>{toggleFav(movies)}}>{fav?"unfavourite":"Favourite"} </button> 
                        
                        
                        
                        <button className={isInCart?"remove-btn":"cart-btn"}
                        onClick={()=>{toggleCart(movies)}}>{isInCart?"Remove from cart":"Add to cart"}</button>
                       
                    </div>
                </div>
            </div>
       </div>)
    }
 
export default MovieCard;