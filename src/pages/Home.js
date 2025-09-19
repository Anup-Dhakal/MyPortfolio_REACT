import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About"
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Preloader from "../components/Preloader";
const Home =()=>{
    return (
        <>
        
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Resume/>
        <Projects/>
        <Contact/>
        <Footer/>
        <ScrollToTop/>
        <Preloader/>
        </>
    )
}

export default Home;