import { MdFolderShared } from 'react-icons/md';
import { BsNutFill } from 'react-icons/bs';
import { IoLogOut } from 'react-icons/io5';
import { FaWpforms } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { MdBusinessCenter } from 'react-icons/md';

export const NavbarComponent = () => {
  return (
    <nav className="bg-[#00A38B] w-auto sm:w-28 h-screen">
      <ul className="flex flex-col items-center justify-center h-full text-neutral-100 space-y-5">
        <li>
          <NavLink to="/">
            <MdFolderShared className="w-6 h-6 lg:w-10 lg:h-10 hover:text-white hover:scale-125 transition-all duration-300" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/form">
            <FaWpforms className="w-6 h-6 lg:w-10 lg:h-10 hover:text-white hover:scale-125 transition-all duration-300" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/services">
            <BsNutFill className="w-6 h-6 lg:w-10 lg:h-10 hover:text-white hover:scale-125 transition-all duration-300" />
          </NavLink>
        </li>{' '}
        <li>
          <NavLink to="/register/agente">
            <MdBusinessCenter className="w-6 h-6 lg:w-10 lg:h-10 hover:text-white hover:scale-125 transition-all duration-300" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/auth/login"
            onClick={() => {
              localStorage.removeItem('authToken');
            }}
          >
            <IoLogOut className="w-6 h-6 lg:w-10 lg:h-10  hover:text-white hover:scale-125 transition-all. duration-300" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
