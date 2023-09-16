import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import App from './App';
import Tour from './component/Tour';
import Review from './component/Review';
import About from './component/About';
import Travel from './component/Travel';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<App />),
  },
  {
    path: "/tour",
    element: (<Tour />),
  },
  {
    path: "/reviews",
    element: (<Review />),
  },
  {
    path: "/about",
    element: (<About />),
  },
  {
    path: "/bluelagoon",
    element: (<Travel />),
  },
  {
    path: "/takayai",
    element: (<Travel />),
  },
  {
    path: "/phamanfun",
    element: (<Travel />),
  },
  {
    path: "/haina",
    element: (<Travel />),
  },
  {
    path: "/changarena",
    element: (<Travel />),
  },
  {
    path: "/watphasonkaew",
    element: (<Travel />),
  },
  {
    path: "/ubonrat",
    element: (<Travel />),
  },
  {
    path: "/khaokho",
    element: (<Travel />),
  },
  {
    path: "/phuthapbuek",
    element: (<Travel />),
  },
  {
    path: "/airport",
    element: (<Travel />),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);


reportWebVitals();
