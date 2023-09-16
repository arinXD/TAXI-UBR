import '../App.css';
import Header from './Header';
import Hero from './hero/Hero';
import Vector from './Vector';
import Footer from './Footer';
import HeroDestiantion from './hero/HeroDestiantion';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import ServiceList from './ServiceList';
import Service from './hero/Service';
const Home =()=>{
    return(
       <>
        <div className='main'>
            <Vector />
            <Header />
            <div className='content'>
            <Hero/>
            <div className='content-wrap'>
                <HeroDestiantion />
                <Service/>
                <ServiceList/>
            </div>
            </div>
            <Footer/>
        </div>
      </>
    )
}
export default Home