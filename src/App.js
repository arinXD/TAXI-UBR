import './App.css';
import Header from './component/Header';
import Hero from './component/hero/Hero';
import Vector from './component/Vector';
import Footer from './component/Footer';
import HeroDestiantion from './component/hero/HeroDestiantion';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import ServiceList from './component/ServiceList';
import Service from './component/hero/Service';

function App() {
  return (
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
  );
}

export default App;
