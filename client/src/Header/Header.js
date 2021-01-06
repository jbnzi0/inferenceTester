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


import React, {Component} from "react";


class Header extends Component {

    render(){
        


        return(
            <AppBar position="static" color="inherit">
                <Row style={{margin: 0}}>
                    <Col lg="4" md="12" sm="12" > 
                        
                            <h2 className={styles.baseText}>Inference Tester</h2>
                             
                    </Col>
                    <Col lg="4" md="6" sm="12" >
                    
                    </Col>
                    <Col lg="4" md="6" sm="12">
                        

                            <img src={logo} alt="Logo"  style={{height: 60, marginLeft: 50}}/>
                       
                    </Col>
                </Row>
            </AppBar>   
        )

    }
}

export default withRouter(Header) ; 