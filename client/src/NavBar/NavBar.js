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
import styles from "../styles.module.css";

import React, {Component} from "react";
import { Button } from "@material-ui/core";

class NavBar extends Component {

    

    render(){
        
        var style = {
            backgroundColor: "#F8F8F8",
            borderTop: "1px solid #E7E7E7",
            textAlign: "center",
            padding: "20px",
            position: "fixed",
            left: "0",
            bottom: "0",
            height: "60px",
            width: "100%",
        }
        
        var phantom = {
          display: 'block',
          padding: '20px',
          height: '60px',
          width: '100%',
        }

        return(
            <Container className={styles.footer} position="static" maxWidth={false}>
                

                
                        <Row >
                            <Col lg="10" md="12" sm="12" className={styles.navbar}> 
                                <div  >
                                    
                                </div>          
                            </Col>
                            
                            <Col lg="2" md="6" sm="12">
                                <Button>
                                    NEXT
                                </Button>
                            </Col>
                        </Row>
               
            </Container>   
            
        )

    }
}




export default withRouter(NavBar) ; 