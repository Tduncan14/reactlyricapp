import React from 'react';


const Track = (props) =>{
    const{track} = props;
  
    return(
        <div className="col-md-6"> 
          <div className="card mb-4 shadow-sm">
             <h5>{track.artist_name}</h5>
          </div>
        </div>
    )
}


export default Track;