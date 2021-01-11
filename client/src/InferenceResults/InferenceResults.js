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
import "./inferenceresults.css";
import css from "./inference.module.css";

import Carousel from 'react-elastic-carousel';
import ReactDOM from "react-dom";



import React, {Component} from "react";


function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('./results', false, /\.(png|jpe?g|svg)$/));

let copy=[];
for(let i=0;i<images.length;i++){
  copy.push(<div key={i}> <img src={images[i].default}></img></div> ) 
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