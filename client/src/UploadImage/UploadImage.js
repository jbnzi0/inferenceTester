import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import {withRouter} from "react-router";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {Tabs, Tab, Paper} from '@material-ui/core';
import {  Row, Col } from 'reactstrap';
import {
    Link
  } from "react-router-dom";
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import logo from "../images/logo_bee.png";
import styles from "../styles.module.css";
import iso from "../images/iso.png";
import Button from '@material-ui/core/Button';

import React, {Component} from "react";




class UploadImage extends Component {

    render(){
        


        return(
            <Container className={styles.updloadimage}>
                <Row>
                    <Col className={styles.uploadleftdiv} lg="6">
                        <Row >
                            <h2  className={styles.alignleft}>Upload Images</h2>
                        </Row>
                        <Row className={styles.rowheight}>
                            <div className={styles.uploadimagecontainer}>
                                <h2>Drag and Drop files here</h2>
                                <br></br>
                                <h3>OR</h3>
                                    <Button style={{
                                            borderRadius: 10,
                                            backgroundColor: "#1C73FC",
                                            padding: "18px 36px",
                                            fontSize: "18px",
                                            color : "#FFFFFF"
                                            
                                        }}
                                      
                                        variant="contained"
                                        component="label"
                                        >
                                        Upload your files
                                        <input
                                            type="file"
                                            hidden
                                        />
                                    </Button>
                            </div>
                        </Row>
                        
                        
                    </Col>
                    <Col className={styles.uploadrightdiv} lg="6" >
                        <img src={iso} alt="Iso" />
                    </Col>
                </Row>
            </Container>


        )

    }
}

export default UploadImage ; 