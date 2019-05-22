import React,{Component} from 'react';
import FansList from './Fans';



class MovFans extends Component{
    render(){
       
        const {movies,users,profiles} = this.props;

        let mov  = [];
        
        for(let movie in movies){
            mov.push(movies[movie]);
        }
    
       return (

            <div className = 'PopularMovies-container'>
            
            {mov.map((movie)=>(  
                <div key = {movie.id} className = 'PopularMovies-cell'>
                    <h2>{movie.name}</h2>
                    <FansList movie = {movie.id} users = {users} profiles = {profiles}/>
                </div>
            ))}

            </div>
       );
    }
}


export default MovFans;