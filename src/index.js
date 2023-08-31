import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import App from './App';
import Tour from './component/Tour';
import Review from './component/Review';
import About from './component/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: (<App />),
  },
  {
    path: "tour",
    element: (<Tour />),
  },
  {
    path: "reviews",
    element: (<Review />),
  },
  {
    path: "about",
    element: (<About />),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
