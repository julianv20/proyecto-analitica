import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavbarComponent } from '../components/NavbarComponent';

export const LayoutHome = () => {
  return (
    <div className="flex bg-[#202124]">
      <div>
        <NavbarComponent />
      </div>
      <div className="ml-5 w-full h-screen overflow-y-auto ">
        <Outlet />
      </div>
    </div>
  );
};
