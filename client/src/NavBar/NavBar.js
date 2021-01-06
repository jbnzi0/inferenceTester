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
import Button from '@material-ui/core/Button';


class NavBar extends Component {


    displayNavBar(){ // Allows the breadcrulbs to display the correct path according to the window current pathname
        var result ; 
                
                
                
                
        if(window.location.pathname.includes('uploadimage') )
            result=(  <div >
                <Row>
                
                        <Col lg="4" className={styles.breadresp}>
                        
                        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" className={styles.bread}>
                        <Link className={styles.breadlinks} to="/uploadimage"  href="/uploadimage" >
                            <Typography color="white">UPLOAD IMAGES</Typography>
                            <Typography color="grey">Please upload your images for pollen detection</Typography>
                        </Link>
                        
                        
                        </Breadcrumbs>
                    
                     </Col>
                     <Col lg="4">

                     </Col>
                     <Col lg="4">

                     </Col>
                         
                </Row>
                     </div>);

        if(window.location.pathname.includes('algorithm') )
            result=(  <div >
                <Row>

                
                        <Col lg="4" className={styles.breadresp}>

                            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" className={styles.bread}>
                                <Link className={styles.breadlinks} to="/uploadimage"  href="/uploadimage" >
                                    <Typography color="white">UPLOAD IMAGES</Typography>
                                    <Typography color="grey">Please upload your images for pollen detection</Typography>
                                </Link>


                            </Breadcrumbs>

                        </Col>
                        <Col lg="4" className={styles.breadresp}>

                            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" className={styles.bread}>
                                <Link className={styles.breadlinks} to="/algorithm"  href="/algorithm" >
                                    <Typography color="white">CHOOSE YOUR ALGO</Typography>
                                    <Typography color="grey">Please choose the detection algorithm</Typography>
                                </Link>


                            </Breadcrumbs>

                        </Col>
                        <Col lg="4">

                        </Col>
                        </Row>
                        </div>);


        if(window.location.pathname.includes('inferenceresults') )
            result=(  <div >
                        <Row>

                        
                        <Col lg="4" className={styles.breadresp}>

                            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" className={styles.bread}>
                                <Link className={styles.breadlinks} to="/uploadimage"  href="/uploadimage" >
                                    <Typography color="white">UPLOAD IMAGES</Typography>
                                    <Typography color="grey">Please upload your images for pollen detection</Typography>
                                </Link>


                            </Breadcrumbs>

                        </Col>
                        <Col lg="4" className={styles.breadresp}>

                            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" className={styles.bread}>
                                <Link className={styles.breadlinks} to="/algorithm"  href="/algorithm" >
                                    <Typography color="white">CHOOSE YOUR ALGO</Typography>
                                    <Typography color="grey">Please choose the detection algorithm</Typography>
                                </Link>


                            </Breadcrumbs>

                        </Col>
                        <Col lg="4" className={styles.breadresp}>

                            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" className={styles.bread}>
                                <Link className={styles.breadlinks} to="/inferenceresults"  href="/inferenceresults" >
                                    <Typography color="white">INFERENCE RESULTS</Typography>
                                    <Typography color="grey">Results of the pollen detection</Typography>
                                </Link>


                            </Breadcrumbs>

                        </Col>
                        </Row>
                        </div>);
        
    
        return result ; 
      }

      displayNextButton(){ // Allows the breadcrulbs to display the correct path according to the window current pathname
        var result ; 
                
                
                
                
        if(window.location.pathname.includes('uploadimage') )
            result=(  <Link className={styles.buttonlink} maxWidth={false} minWidth={false}  to="/algorithm"  href="/algorithm" >
                                <button type="button" className={styles.nextbutton}>
                                    NEXT
                                    </button>
                        </Link>
             );
        
        if(window.location.pathname.includes('algorithm') )
            result=(  <Link className={styles.buttonlink} maxWidth={false} minWidth={false}  to="/inferenceresults"  href="/inferenceresults" >
                            <button type="button" className={styles.nextbutton}>
                                NEXT
                                </button>
                    </Link>
            );
        
    
        return result ; 
      }
    

    render(){
        var display = this.displayNavBar();
        var displaybutton = this.displayNextButton();
        
        return(
            <Container className={styles.footer} position="static" maxWidth={false}>
                

                
                        <Row >
                            <Col lg="10" md="12" sm="12" className={styles.navbar}> 
                                <div  >
                                    {display}
                                </div>          
                            </Col>
                            
                            <Col lg="2" md="6" sm="12">
                                
                                   
                                  

                                  {displaybutton}

                                 
                                  
                                    
                                    
                                    
                               
                                
                            </Col>
                        </Row>
               
            </Container>   
            
        )

    }
}




export default withRouter(NavBar) ; 