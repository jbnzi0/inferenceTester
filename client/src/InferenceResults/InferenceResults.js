import "./inferenceresults.css";
import css from "./inference.module.css";
import Carousel from 'react-elastic-carousel';
import React, {Component} from "react";

function importAll(r) {
    return r.keys().map(r);
  }
  

const images = importAll(require.context('./results', false, /\.(png|jpe?g|svg)$/));

let copy=[];

for(let i=0;i<images.length;i++){
  copy.push(<div key={i}> <img src={images[i].default} alt={images[i].default.name}></img></div> ) 
 }

class InferenceResults extends Component {
   
    constructor(props) {
        super(props);
     
        this.state = {
            setComp:copy
        };
      }
     
    render(){
        
        return(
            <div>
           
            <Carousel className={css.carousel}>
               
                {this.state.setComp}
                
            </Carousel>

        </div>

        )

    }
}

export default InferenceResults ; 