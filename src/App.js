// import './App.css';
// import Header from './component/Header';
// import Hero from './component/hero/Hero';
// import Vector from './component/Vector';
// import Footer from './component/Footer';
// import HeroDestiantion from './component/hero/HeroDestiantion';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import ServiceList from './component/ServiceList';
// import Service from './component/hero/Service';

// function App() {
//   return (
//     <>
//       <div className='main'>
//         <Vector />
//         <Header />
//         <div className='content'>
//           <Hero/>
//           <div className='content-wrap'>
//             <HeroDestiantion />
//             <Service/>
//             <ServiceList/>
//           </div>
//         </div>
//         <Footer/>
//       </div>
//     </>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
// import Contact from './component/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">หน้าหลัก</Link>
          </li>
          <li>
            <Link to="/about">เกี่ยวกับเรา</Link>
          </li>
          <li>
            {/* <Link to="/contact">ติดต่อเรา</Link> */}
          </li>
        </ul>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;