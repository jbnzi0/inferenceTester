
import "./AlgoCSS.css";

import React, {Component} from "react";
import ButtonAlgoSSD from "./ButtonAlgoSSD";
import ButtonAlgoYOLO from "./ButtonAlgoYOLO";
import ButtonAlgoRCNN from "./ButtonAlgoRCNN";
import ButtonAlgoEFF from "./ButtonAlgoEFF";


class Algorithm extends Component {

    render(){
        


        return(
            <div className="algoGrid">
            <ButtonAlgoSSD algoName="Single Shot Multiple Detector"/>
            <ButtonAlgoYOLO algoName="YOLO v5"/>
            <ButtonAlgoRCNN algoName="Faster-RCNN"/>
            <ButtonAlgoEFF algoName="EfficientDet v2"/>
        </div>


        )

    }
}

export default Algorithm ; 