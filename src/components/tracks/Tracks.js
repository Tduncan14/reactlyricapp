import React, {Component} from 'react';
import {Consumer} from '../../context';
import Spinner from '../layout/Spinner';
import Track from '../tracks/Track'

class Tracks extends Component {
    render(){
       return(
           <Consumer>
               {value => {
               
                    const { track_list ,heading } = value;

                   if(track_list === undefined || track_list.length === 0){
                        return <Spinner />;
                     
                   }else{
                 return( 
                <React.Fragment> 
            <h3 className ="text-center mb-4">{heading}</h3>
                 <div className="row"> 
                   {track_list.map(item =>(
                       <Track />
                   ))}
                    </div>
                </React.Fragment>
                    )

                   }

               }}
           </Consumer>
       );

    }
}



export default Tracks;

/*
 import React, {Component} from 'react'; 

  class Tracks extends Component {
      render(){

        return(
            <div>

            </div>
        )
      }
  }

   export default Tracks;


*/