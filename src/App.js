import React from 'react';
import Tour from './component/Tour';
import Review from './component/Review';
import About from './component/About';
import Travel from './component/Travel';
import Home from './component/Home';
import { BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/tour" element={<Tour />}/>
                <Route path="/about" element={<About />} />
                <Route path="/reviews" element={<Review />} />
                <Route path="/bluelagoon" element={<Travel />} />
                <Route path="/takayai" element={<Travel />} />
                <Route path="/phamanfun" element={<Travel />} />
                <Route path="/haina" element={<Travel />} />
                <Route path="/changarena" element={<Travel />} />
                <Route path="/watphasonkaew" element={<Travel />} />
                <Route path="/ubonrat" element={<Travel />} />
                <Route path="/khaokho" element={<Travel />} />
                <Route path="/phuthapbuek" element={<Travel />} />
                <Route path="/airport" element={<Travel />} />
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
