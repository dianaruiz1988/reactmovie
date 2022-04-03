
import {useState, useEffect} from "react";
// WE IMPORT OUR COMPONENTS
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  //variable with your apiKey
  const apiKey = "98e3fb1f";

  //State to hold movie data
  const [movie, setMovie] = useState(null);


  //Function to getMovies
  //this function below is the prop "moviesearch
  // getting movie is same as searching for the movoe"

  //what- action 
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    try {
      const response = await fetch (
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );

      //json creates an on object of the data 

// async = promise, uber eats example.

    // Parse JSON response into a javascript object
    const data = await response.json();
    //set the Movie state to the movie
    setMovie(data);
    console.log(movie)
  } catch (e){
    console.error(e)
  }
  };

//This will run on the first render but not on subsquent renders
// useffect once upon the page loads- 
useEffect(() => {
  getMovie("Clueless");
}, []);

//Attempt at bonus
// useEffect(() => {
//   getMovie(Math.floor(Math.random  * {movie});
// }, []);

  // USE OUR COMPONENTS IN APPs RETURNED JSX
  // We pass the getMovie function as a prop called moviesearch
   // We pass movie as props to movie display


  return (
    <div className="App">
      <p className="Title">OMBDB</p>
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie}/>
    </div>
  );
}

//this code is really messy...but i am trying to get caught up