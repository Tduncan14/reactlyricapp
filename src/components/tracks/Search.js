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

    render(){
        return(
           <Consumer>
             {value => {
                 return(
                     <div className="card card-body mb-4">
                       <h1 className="display-4 text-center">
                          <i className ="fas fa-music"></i> Search For A Song
                       </h1>
                       <p className="lead text-center">Get the lyrics for the song</p>
                        <form className="form-group">
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