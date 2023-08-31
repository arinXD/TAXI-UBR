import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Content from './component/Content';
import Destination from './component/Destination';
import Map from './component/Map';
import Vector from './component/Vector';

function App() {
  return (
    <div className='content'>
      <Vector/>
      <Header/>
      <Hero/>
      <Destination/>
      <Content/>
      <Map/>
    </div>
  );
}

export default App;
