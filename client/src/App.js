import './App.css';
import styles from "./styles.module.css";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { render } from "react-dom";
import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";
import {Button,AppBar, Badge} from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import UploadImage from './UploadImage/UploadImage';
import Algorithm from './Algorithm/Algorithm';
import InferenceResults from './InferenceResults/InferenceResults';

function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
          <Route exact path="/" component={UploadImage} />     
          <Route exact path="/uploadimage" component={UploadImage} />
          <Route exact path="/algorithm" component={Algorithm} />
          <Route exact path="/inferenceresults" component={InferenceResults} />
          <NavBar/>

          
        </Router>
       

    </div>
  );
}

export default App;

const container = document.getElementById("root");
render(<App />, container);
