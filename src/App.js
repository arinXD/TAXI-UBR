import React from 'react';
import Tour from './component/Tour';
import Review from './component/Review';
import About from './component/About';
import Travel from './component/Travel';
import Home from './component/Home';
// import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { BrowserRouter,Routes,Route} from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (<App />),
//   },
//   {
//     path: "/tour",
//     element: (<Tour />),
//   },
//   {
//     path: "/reviews",
//     element: (<Review />),
//   },
//   {
//     path: "/about",
//     element: (<About />),
//   },
//   {
//     path: "/bluelagoon",
//     element: (<Travel />),
//   },
//   {
//     path: "/takayai",
//     element: (<Travel />),
//   },
//   {
//     path: "/phamanfun",
//     element: (<Travel />),
//   },
//   {
//     path: "/haina",
//     element: (<Travel />),
//   },
//   {
//     path: "/changarena",
//     element: (<Travel />),
//   },
//   {
//     path: "/watphasonkaew",
//     element: (<Travel />),
//   },
//   {
//     path: "/ubonrat",
//     element: (<Travel />),
//   },
//   {
//     path: "/khaokho",
//     element: (<Travel />),
//   },
//   {
//     path: "/phuthapbuek",
//     element: (<Travel />),
//   },
//   {
//     path: "/airport",
//     element: (<Travel />),
//   },
// ]);

function App() {
  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
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
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
