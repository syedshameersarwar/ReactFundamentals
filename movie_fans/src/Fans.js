import React,{Component} from 'react';



class FansList extends Component{


    getFans(){
        const {movie,users,profiles} = this.props;
        const fansName = [];
        
        for(let profile of profiles){
            if(Number(profile.favoriteMovieID)===movie)
                fansName.push(users[profile.userID].name);
        }

        return fansName;
    }


    printFans(fans){
        return (<div>
                    <p>Liked By:</p>
                    <ul>
                        {fans.map(fan=>(<li key = {fan}>{fan}</li>))}
                    </ul>
                </div>
            );
    }


    render(){
        const fans = this.getFans();
        
        return (fans.length>0?this.printFans(fans):<p>None of the current users
             liked this movie</p>);
    }
}



export default FansList;