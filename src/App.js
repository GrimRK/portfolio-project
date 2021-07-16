
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import Aboutme from "./components/Aboutme";

function App() {
 return(
     <>
    <Particles className="particle-canvas"
    params={
        {
            particles:{
                number:{
                    value:50,
                    density:{
                        enable:true,
                        value_area:900
                    }
                },shape:{
                    type:"square",
                    stroke:{
                        width: 6,
                        color: "#ea00ff"
                    }
                }
            }
        }
    }
    
    />
    <Navbar />
    <Header />
    <Aboutme />
    </>
 );
  
}

export default App;
