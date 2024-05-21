import logo from './logo.svg';
import './App.css';
import Navbars from './Components/Navbarhome';
import Mainhome from './Components/Mainhome';
import AboutMe from './Components/About';
import Projects from './Components/Projects';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
     <Navbars/>
     <Mainhome/>
     <AboutMe/>
     <Projects/>
     <ContactForm/>
     <Footer/>

     

    </>
  );
}

export default App;
