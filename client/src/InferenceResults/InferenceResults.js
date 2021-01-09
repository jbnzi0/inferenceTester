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
import Carousel from 'react-elastic-carousel';
import ReactDOM from "react-dom";



import React, {Component} from "react";


function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('./results', false, /\.(png|jpe?g|svg)$/));


class InferenceResults extends Component {

    state = {
        items: [
          {id: 1, title: 'item #1'},
          {id: 2, title: 'item #2'},
          {id: 3, title: 'item #3'},
          {id: 4, title: 'item #4'},
          {id: 5, title: 'item #5'}
        ]
      }

    render(){
        
        const { items } = this.state;

        return(
            <div>
            
            <Carousel>
                {items.map(item => <div key={item.id}>{item.title}</div>)}
            </Carousel>

        </div>

        )

    }
}

export default InferenceResults ; 