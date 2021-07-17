
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import Aboutme from "./components/Aboutme";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contacts from './components/Contacts';
import ProgLang from './components/ProgLang';
import Skills from './components/Skills';
import Footer from './components/Footer';
import {Helmet} from "react-helmet"


function App() {
    
 return(
     <>
     <Helmet>
         <title>Aman Kumar</title>
         
         
     </Helmet>
 
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
    <Education />
    <Projects />
    <ProgLang />
    <Skills />
    <Contacts />
    <Footer />
    </>
 );
  
}

export default App;
