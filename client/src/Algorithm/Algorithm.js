import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import {withRouter} from "react-router";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {Tabs, Tab} from '@material-ui/core';
import {  Row, Col } from 'reactstrap';
import {
    Link
  } from "react-router-dom";
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import logo from "../images/logo_bee.png";
import styles from "../styles.module.css";
import ButtonAlgo from "./ButtonAlgo"

import React, {Component} from "react";


class Algorithm extends Component {

    render(){
        


        return(
            <div>
                <ButtonAlgo algoName="Single Shot Multiple Detector"/>
                <ButtonAlgo algoName="YOLO v5"/>
                <ButtonAlgo algoName="Faster-RCNN"/>
                <ButtonAlgo algoName="EfficientDet v2"/>
            </div>


        )

    }
}

export default Algorithm ; 