import './App.css';
import {Intro} from "./components/intro/Intro";
import {About} from "./components/about/About";
import {Service} from "./components/service/Service";
import {Work} from "./components/work/Work";
import {Team} from "./components/team/Team";
import {Testimonial} from "./components/testimonial/Testimonial";
import {Contact} from "./components/contact/Contact";
import {Blog} from "./components/blog/Blog";
import {Footer} from "./components/footer/Footer";

function App() {
  return (
      <div className="wrapper">
        <Intro/>
        <About/>
        <Service />
        <Work />
        <Team/>
        <Testimonial />
        <Contact />
        <Blog />
        <Footer />
      </div>
  );
}

export default App;
