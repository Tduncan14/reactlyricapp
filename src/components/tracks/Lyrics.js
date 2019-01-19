import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Spinner from '../layout/Spinner';
 class Lyrics extends Component {
     state ={
         track:{},
         lyrics:{}
     }


     componentDidMount(){
          axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
          .then(res =>{
              console.log(res.data);
              this.setState({lyrics: res.data.message.body.lyrics});

              return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`);

     })
     // might be area of problem
      .then(res=>{
          console.log()
          this.setState({track:res.data.message.body.track})})
          
     .catch(err => console.log(err));

    }
   
    
  render() {
      const{track,lyrics} =this.state;
      
      if(track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(lyrics).length===0){

       return  <Spinner />

       
      }

      else{
          return (
              <React.Fragment>
                <Link to ="/" className="btn btn-dark btn-sm mb-4">Back</Link>

                 <div className="card">
                   <h5 className="card-header">
                    {track.track_name} by <span className="text-secondary">{track.artist_name}</span>
                   </h5>
                     <div  className="card-body">
                     <p class="card-text">
                     {lyrics.lyrics_body}
                     </p>
                     </div>
                 </div>

                 <ul className="list-group mt-3">
                   <li className="list-group-item">
                   <strong>Album Name</strong>:{track.album_name}
                   </li>
                   <li className ="list-group-item mt-1">
                   <strong> Song Genre</strong>:{' '}{ track.primary_genres.music_genre_list.length === 0 ? 'none classified' : track.primary_genres.music_genre_list[0].music_genre.music_genre_name}</li>
                  
                  <li className="list-group-item mt-1">
               <strong>Explicits Words</strong>{track.explicit === 0 ? 'No' : 'Yes'}
                  </li>

                  <li className="list-group-item mt-1">
                    <strong>Release Date</strong>
                    {track.first_release_date}
                  </li>
                 </ul>

              </React.Fragment>
          )
      }
    
  }
}


export default Lyrics;


/*
import React,{Component} from 'react'

class Lyrics extends Component{
    render(){
        return(
            <div>

            </div>s
        )
    }
}

export default Lyrics
*/