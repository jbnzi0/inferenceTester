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

    constructor(props){
        super(props)
        this.state = {
          file: null,
          images : []
        }
        this.handleChange = this.handleChange.bind(this)
      }

      handleChange(event) {
        this.setState({
          images: (event.target.files)
         
        }
        , 
        () => {
            console.log(this.state.images)
            var formdata = new FormData();
            formdata.append("file", this.state.images[0], this.state.images[0].name);
            formdata.append("algorithm", "yolo");

            var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
            };

            fetch("http://localhost:8080/inference/test", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
                        
        
        
        
        
        
        }
        )
        
      }

        
     
    render(){
        
        console.log(this.state.file);
        console.log("HELLO");
        
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
                                        <input id="images"
                                            onChange={this.handleChange}
                                            type="file"
                                            hidden
                                            multiple
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