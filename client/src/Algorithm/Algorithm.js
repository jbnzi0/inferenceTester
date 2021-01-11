import ButtonAlgo from "./ButtonAlgo";
import "./AlgoCSS.css";

import React, {Component} from "react";


class Algorithm extends Component {

    render(){
        


        return(
            <div className="algoGrid">
            <ButtonAlgo algoName="Single Shot Multiple Detector"/>
            <ButtonAlgo algoName="YOLO v5"/>
            <ButtonAlgo algoName="Faster-RCNN"/>
            <ButtonAlgo algoName="EfficientDet v2"/>
        </div>


        )

    }
}

export default Algorithm ; 