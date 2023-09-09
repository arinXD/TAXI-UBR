import './App.css';
import Header from './component/Header';
import Hero from './component/hero/Hero';
import Content from './component/Content';
import Destination from './component/Destination';
import Map from './component/Map';
import Vector from './component/Vector';
import Travel from './component/Travel';
import Nav from './component/Nav';
import Footer from './component/Footer';
import HeroDestiantion from './component/hero/HeroDestiantion';

function App() {
  return (
    <>
      <div className='main'>
        <Vector />
        <Header />
        <div className='content'>
          <Hero />
          <HeroDestiantion />
          <Content />
        </div>
        {/* <Map/> */}
        <Footer/>
      </div>
    </>
  );
}

export default App;
