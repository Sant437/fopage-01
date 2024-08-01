import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import Header from './component/Header';
import Button from './component/Button';
import Notifications from './component/Notifications';
import Farmer from './component/Farmer';
import Proof from './component/Proof';
import EduDetails from './component/EduDetails';
import Address from './component/Address';
import Buttons from './component/Buttons';
import Family from './component/Family';

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Router>
        <Header /> {/* Full-width header */}
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-4 space-y-6">
            <Routes>
              <Route path="/overview" element={<div>Overview Page</div>} />
              <Route path="/field-officer" element={<div>Field Officer Page</div>} />
              <Route path="/farmer" element={<div>Farmer Page</div>} />
              <Route path="/staff-management" element={<div>Staff Management Page</div>} />
              <Route path="/report" element={<div>Report Page</div>} />
              <Route path="/crop-management" element={<div>Crop Management Page</div>} />
              <Route path="/location-management" element={<div>Location Management Page</div>} />
              <Route path="/regulation" element={<div>Regulation Page</div>} />
              <Route path="/survey" element={<div>Survey Page</div>} />
              <Route path="/" element={<div>Home Page</div>} />
            </Routes>
            <div className='ml-48'>
            <Button />
            <Notifications />
            <div className='flex mt-24'>
            <h2 className="mt-6 ml-6 text-xs font-medium">Person Details</h2>
            </div>
            <Farmer />
            <div className="flex flex-row space-x-6 mt-4">
              <div className="flex flex-col space-y-2 w-1/2 ml-3">
                <h2 className="text-xs ml-4 mt-3 font-medium">Government ID Proof</h2>
                <Proof />
              </div>
              <div className="flex flex-col space-y-2 w-1/2">
                <h2 className="text-xs ml-4 mt-3 font-medium">Education Details</h2>
                <EduDetails />
              </div>
            </div>
            <div className="mt-4 ml-4">
              <h2 className="text-xs font-medium ml-3">Address</h2>
              <Address />
            </div>
            <div className="ml-4">
              <h2 className="text-xs ml-3 font-medium mt-2">Family Info</h2>
              <Family/>
            </div>
            <div>
              <Buttons />
            </div>
            </div>
          </main>
        </div>
      </Router>
    </div>
  );
};

export default App;
