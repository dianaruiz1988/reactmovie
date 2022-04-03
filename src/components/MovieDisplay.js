// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
// You can also destructure your props directly from the parameter list

// {movie} is basically same thing as typing 
//const movie = props.movie
export default function  MovieDisplay ({ movie }){
  //function to return loaded JSX
  const loaded = () => {
    return (
      <>
        <div className="card">
          <h1>{movie.Title}</h1>
          <img src={movie.Poster} alt={movie.Title}/>
        <div className="container">
          <h4><b>{movie.Genre}</b></h4>
          <p>{movie.Rated}</p>
        </div> 
      </div>
      </>
    );
  };

  //function to return loading JSX
  const loading = () => {
    return <h1>No Movie to Display</h1>;
  };

  //Ternary operator will determine which functions JSX we will return
  return movie ? loaded() : loading();
};
