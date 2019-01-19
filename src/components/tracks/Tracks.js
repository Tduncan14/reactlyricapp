import React, {Component} from 'react';
import {Consumer} from '../../context';
import Spinner from '../layout/Spinner';


class Tracks extends Component {
    render(){
       return(
           <Consumer>
               {value => {
               
                    const { track_list } = value;

                   if(track_list === undefined || track_list.length === 0){
                        return <Spinner />;
                     
                   }else{
                 return(   <div className="row"> 

                    </div>)
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