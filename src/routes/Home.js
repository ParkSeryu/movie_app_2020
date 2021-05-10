import React from "react";
import axios from 'axios';
import Movies from '../components/Movies';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async() => {
    const {
      data : {
        data : {movies},
         },
    } =  await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    this.setState({movies, isLoading : false});
    this.setState({movies});

  };

  // shouldComponentUpdate(nextState, nextProps ){
  //   if(this.state.movies !== nextState.movies){
  //     return false
  //   }
  //   return true;
  // }

  componentDidMount() {  
    this.getMovies();
    console.log("componentDidMount")
  }

  render() {
    const { isLoading } = this.state;
    console.log("render")
    return <section className="container">{isLoading ? (<div className="loader"><span className="loader__text">Loading...</span></div>) : (
    <div className="movies">
      {this.state.movies.map( (movies) => (
      <Movies key = {movies.id} id = {movies.id} year = {movies.year} title = {movies.title} summary ={movies.summary} poster = {movies.medium_cover_image} genres={movies.genres}/>
    ))} </div> )}</section>;
  }
}

export default Home;
