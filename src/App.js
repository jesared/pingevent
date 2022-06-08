

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import DashBoard from './pages/dashboard';
import DashBoardAccueil from './pages/dashboard/DashBoardAccueil';
import Events from './pages/dashboard/events';


import Home from './pages/home';
import Profile from './pages/profile';
import MyAccount from './pages/profile/myaccount';

function App() {
  return (
    <>
      <Header />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashBoard />} >
            <Route path="/dashboard" element={<DashBoardAccueil />} />
            <Route path='/dashboard/events' element={<Events />} />
          </Route>
          
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/myaccount" element={<MyAccount />} />
        </Routes>
      



    </>

  );
}

export default App;
