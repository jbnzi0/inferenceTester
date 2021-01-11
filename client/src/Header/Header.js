import {withRouter} from "react-router";
import {  Row, Col } from 'reactstrap';
import AppBar from '@material-ui/core/AppBar';
import logo from "../images/logo_bee.png";
import css from "./header.module.css";
import React, {Component} from "react";

class Header extends Component {
    render(){
        return(
            <AppBar position="static" color="inherit">
                <Row style={{margin: 0}}>
                    <Col lg="4" md="12" sm="12" > 
                        <div className={css.title} >    
                            <h2 >Inference Tester</h2>
                        </div> 
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