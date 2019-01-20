import React,{Component}from 'react';
import axios from 'axios';
import {Consumer} from '../../context';

class Search extends Component{
     state ={
         trackTitle:''
     };
     
     // you change this to an arrow function if you dont want to continue to bind it
     onChange(e){
         this.setState({[e.target.name]: e.target.value});
     }

     findTrack=(dispatch,e)=>{
         // to keep the from automatic submitting
         e.preventDefault();

         axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
         .then(res => {
             console.log(res.data);
             dispatch({
                 type:'SEARCH_TRACKS',
                 payload: res.data.message.body.track_list
             });
             this.setState({trackTitle:''})

         })
         .catch(err => console.log(err));

     }

    render(){
        return(
           <Consumer>
             {value => {
                 // more distructing
                 const {dispatch} = value;
                 console.log(value);
                 return(
                     <div className="card card-body mb-4">
                       <h1 className="display-4 text-center">
                          <i className ="fas fa-music"></i> Search For A Song
                       </h1>
                       <p className="lead text-center">Get the lyrics for the song</p>
                        <form onSubmit ={this.findTrack.bind(this,dispatch)} >
                        <div className="form-group">
                            <input className="form-control from-control-lg" placeholder="Song Title"  name="trackTitle" value={this.state.trackTitle} onChange={this.onChange.bind(this)}/>
                            
                            
                            </div>
                            <button className="btn btn-primary btn-lg btn-block mt-1"  type="submit"> Find Track</button>
                        </form>
                    </div>
                  
                 ) 
             }}
           </Consumer>
        )
    }
}


export default Search;