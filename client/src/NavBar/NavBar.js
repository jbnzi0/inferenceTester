import Typography from '@material-ui/core/Typography';
import {withRouter} from "react-router";
import {  Row, Col } from 'reactstrap';
import {
    Link
  } from "react-router-dom";
import Container from '@material-ui/core/Container';
import React, {Component} from "react";
import css from "./navbar.module.css";

class NavBar extends Component {


    displayNavBar(){ // Allows the breadcrulbs to display the correct path according to the window current pathname
        var result ; 
                
                
                
                
        if(window.location.pathname.includes('uploadimage') )
            result=(  <div >
                <Row>
                
                        <Col lg="4" className={css.textDiv} >
                        
                        <div id={css.pointer} aria-label="breadcrumb" >
                        <Link  to="/uploadimage"  href="/uploadimage" >
                            <Typography className={css.title}>[UPLOAD IMAGES]</Typography>
                            <Typography className={css.description}>Please upload your images for pollen detection</Typography>
                        </Link>
                        
                        
                        </div>
                    
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

                
                        <Col lg="4"   className={css.textDiv}>

                            <div id={css.pointer} aria-label="breadcrumb" >
                                <Link  to="/uploadimage"  href="/uploadimage" >
                                    <Typography className={css.title} >[UPLOAD IMAGES]</Typography>
                                    <Typography className={css.description}>Please upload your images for pollen detection</Typography>
                                </Link>


                            </div>

                        </Col>
                        <Col lg="4"  className={css.textDiv} >

                            <div id={css.pointer}  aria-label="breadcrumb">
                                <Link to="/algorithm"  href="/algorithm" >
                                    <Typography className={css.title} >[CHOOSE YOUR ALGO]</Typography>
                                    <Typography className={css.description}>Please choose the detection algorithm</Typography>
                                </Link>


                            </div>

                        </Col>
                        
                        <Col lg="4">

                        </Col>
                        </Row>
                        </div>);


        if(window.location.pathname.includes('inferenceresults') )
            result=(  <div className={css.textDiv}>
                        <Row >

                        
                        <Col lg="4"  className={css.textDiv}>

                            <div id={css.pointer}  aria-label="breadcrumb" >
                                <Link  to="/uploadimage"  href="/uploadimage" >
                                    <Typography className={css.title}>UPLOAD IMAGES</Typography>
                                    <Typography className={css.description}>Please upload your images for pollen detection</Typography>
                                </Link>


                            </div>

                        </Col>
                        <Col lg="4"  className={css.textDiv}>

                            <div id={css.pointer}  aria-label="breadcrumb" >
                                <Link  to="/algorithm"  href="/algorithm" >
                                    <Typography className={css.title}>CHOOSE YOUR ALGO</Typography>
                                    <Typography className={css.description}>Please choose the detection algorithm</Typography>
                                </Link>


                            </div>

                        </Col>
                        <Col lg="4"  className={css.textDiv} >

                            <div id={css.pointer} aria-label="breadcrumb" >
                                <Link className={css.linkdiv}    to="/inferenceresults"  href="/inferenceresults" >
                                    <Typography className={css.title}>INFERENCE RESULTS</Typography>
                                    <Typography className={css.description}>Results of the pollen detection</Typography>
                                </Link>


                            </div>

                        </Col>
                        </Row>
                        </div>);
        
    
        return result ; 
      }

      displayNextButton(){ // Allows the breadcrulbs to display the correct path according to the window current pathname
        var result ; 
                
                
                
                
        if(window.location.pathname.includes('uploadimage') )
            result=(  <Link className={css.buttonlink} maxWidth={false} minWidth={false}  to="/algorithm"  href="/algorithm" >
                                <button type="button" className={css.nextbutton}>
                                    NEXT
                                    </button>
                        </Link>
             );
        
        if(window.location.pathname.includes('algorithm') )
            result=(  <Link className={css.buttonlink} maxWidth={false} minWidth={false}  to="/inferenceresults"  href="/inferenceresults" >
                            <button type="button" className={css.nextbutton}>
                                NEXT
                                </button>
                    </Link>
            );

        if(window.location.pathname.includes('inferenceresults') )
        result=(  <Link className={css.buttonlink} maxWidth={false} minWidth={false}  to="/inferenceresults"  href="/inferenceresults" >
                        
                </Link>
        );
    
    
        return result ; 
      }
    

    render(){
        var display = this.displayNavBar();
        var displaybutton = this.displayNextButton();
        
        return(
            <Container maxWidth={false}  >
                

                
                        <Row className={css.row}>
                            <Col lg="10" md="12" sm="12" > 
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