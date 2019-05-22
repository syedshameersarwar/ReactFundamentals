import React, { Component } from 'react';
//import FavouriteMovie from './FavMovies';
import MovFans from './MovieFans';
import {profiles, users, movies} from './data';


class App extends Component {
  render() {
    return (
      <div className = 'App'>
          <main className = 'App-main'>
            <h1 style = {{textAlign: 'center'}}>Liked Movies</h1>
        
            <MovFans profiles = {profiles} users = {users} movies = {movies}/>
          </main>
      </div>
    );
  }
}


export default App;
