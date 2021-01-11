import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import { render } from "react-dom";
import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import UploadImage from './UploadImage/UploadImage';
import Algorithm from './Algorithm/Algorithm';
import InferenceResults from './InferenceResults/InferenceResults';

function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
          <Route exact path="/" component={UploadImage} > 
            <Redirect to="/uploadimage" />
          </Route>    
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
