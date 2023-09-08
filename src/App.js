import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Content from './component/Content';
import Destination from './component/Destination';
import Map from './component/Map';
import Vector from './component/Vector';
import Travel from './component/Travel';
import Nav from './component/Nav';

function App() {
  return (
    <>
      <div className='main'>
        <Vector />
        <Header />
        <div className='content'>
          <Hero />
          <Destination />
          <Content />
        </div>
        <Map/>
      </div>

      {/* ด้านล่างของกู */}

      {/* <div className='main'>
        <Nav />
        <Travel />
      </div> */}
    </>
  );
}

export default App;
