import "./inferenceresults.css";
import css from "./inference.module.css";
import Carousel from 'react-elastic-carousel';
import React, {Component} from "react";


class InferenceResults extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            div: null
        };
        //this.fill = this.fill.bind(this);
        //this.importAll = this.fill.bind(this);
    }

    async componentDidMount(){
        var images;

        try {
            require('./itworks.txt')
            console.log("exists");
            var x = require.context('./results/yolov5', false, /.(png|jpe?g|svg)$/);
            images = x.keys().map(x);
        }catch(e){
            images = null;
            console.log("do not exists");
        }
            
        console.log("BIG TEST : ", images);

        var copy = []
        if(images){
            for(let i=0;i<images.length;i++){
            copy.push(<div key={i}> <img src={images[i].default} alt={images[i].default.name}></img></div> ) 
            }
            
        }
        
        this.setState({ div: copy });
        console.log(this.state.div);
    }

    render(){
        //this.setState.setComp = this.fill();
        //console.log("render:",this.state.setComp);
        return(
            <div>
            <Carousel className={css.carousel}>
               
                {this.state.div}
                
            </Carousel>

        </div>

        )

    }
}

export default InferenceResults ; 