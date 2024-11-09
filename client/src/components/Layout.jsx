// import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import TopBar from './TopBar';

function Layout() {
    return (
      <div className="bg-black min-h-screen overflow-hidden flex">
        <SideBar />
        <div className="w-full flex flex-col">
          <TopBar />
          <main className="flex-grow overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    );
  }
  
  export default Layout;
  
