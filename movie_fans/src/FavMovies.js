import React,{Component} from 'react';


class FavouriteMovie extends Component{
    render(){

        const {users,profiles,movies} = this.props;

        return (
            <ol className = 'contact-list'>
                {profiles.map((profile)=>(
                    <li key = {profile.id} className = 'contact-list-item'>
                        {`${users[profile.userID].name} favourite movie is 
                        ${movies[profile.favoriteMovieID].name}`}
                    </li>
                ))}
            </ol>
        );
    }
}

export default FavouriteMovie;