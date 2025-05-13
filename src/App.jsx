
import './App.css';

import { createBrowserRouter, Route, BrowserRouter as Router, RouterProvider, Routes } from 'react-router-dom';

import Contactus from './components/contactuspage/Contactus';
import DancingPages from './components/dancing/Dancingpages';
import FoodBusiness from './components/foodpage/Foodbusiness';
import HomePage from './components/home/HomePage';
import MassagwepageFull from './components/massagepage/MassagepageFull';
import TennisPage from './components/tennis/TennisPage';
import AppLayout from './components/ui/AppLayout';



const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: "/contactus", element: <Contactus /> },
      { path: "/MassageParlour", element: <MassagwepageFull /> },
      { path: "/FoodBusiness", element: <FoodBusiness /> },
      { path: "/DancingPages", element: <DancingPages /> },
      { path: "/TennisPage", element: <TennisPage /> }
    ]
  }]
);




function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App;
