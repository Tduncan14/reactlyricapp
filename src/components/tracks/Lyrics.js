import React, { Component } from 'react';
import axios from 'axios';
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