import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// Images
import YoutubeIcon from '../../assets/images/media_icons/youtube_video_sharing_media_logo_icon_64px.png';
// Context
import { useUser } from '../../context/UserContext';
// Constants
import { HOME_PAGE_URL } from '../../utils/Constants';
// Hooks
import useNavigateToPage from '../../hooks/useNavigateToPage';

function Navbar() {
  const { user, setUser } = useUser();
  const navigateToPage = useNavigateToPage();

  const [isPhoneNavOpen, setIsPhoneNavOpen] = useState(false);

  const togglePhoneNav = () => {
    setIsPhoneNavOpen((prev) => !prev);
  };

  const navItems = [
    { path: HOME_PAGE_URL, label: 'Home' },
    { path: '/a', label: 'Videos' },
    { path: '/a', label: 'Builds' },
    { path: '/a', label: 'Instructions' },
    { path: '/a', label: 'Channels' },
    { path: '/a', label: 'Contact' },
  ];

  return (
    <nav className='absolute top-0 left-1/2 transform -translate-x-1/2 w-max'>
      <div className='relative grid gap-6 grid-cols-[100px_1fr_auto] bg-gray-600 px-16 rounded-bl-lg rounded-br-lg shadow-cardShadow w-full'>
        {/* Logo */}
        <section className='grid relative w-[100px]'>
          <NavLink
            className={`grid absolute aspect-square p-4 z-20 bg-colour4 text-colour3 shadow-cardShadow items-center justify-center text-3xl font-lego`}
            to={HOME_PAGE_URL}
          >
            LOGO
          </NavLink>
        </section>

        {/* Navbar */}
        <section className='grid items-center'>
          <ul className='grid grid-flow-col items-center gap-2 text-colour3 font-lego'>
            {navItems.map(({ path, label }) => (
              <NavItem key={label} url={path} title={label} />
            ))}
          </ul>
        </section>

        {/* Youtube link */}
        <section className='grid w-full'>
          <a
            href='https://youtube.com'
            rel='noreferrer'
            target='_blank'
            className='grid grid-flow-col gap-2 w-full items-center'
          >
            <div className='grid w-full'>
              <img
                src={YoutubeIcon}
                alt='Youtube'
                className='h-12 w-22 aspect-auto'
              />
            </div>
            <button className='border-2 border-solid border-colour4 bg-white rounded-lg h-fit py-1 px-4 text-colour4 font-bold font-poppins'>
              <span>View Channel</span>
            </button>
          </a>
        </section>
      </div>
    </nav>
  );
}

const NavItem = ({ url, title }) => {
  return (
    <li className='active:scale-90'>
      <NavLink
        to={url}
        aria-label={`${title} page navigation tab`}
        className='text-xl md:text-lg lg:text-xl font-bold hover:brightness-90 duration-200 '
        aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
        style={({ isActive }) => {
          return isActive ? { WebkitTextStroke: '1px #080707' } : {};
        }}
      >
        {title}
      </NavLink>
    </li>
  );
};

export default Navbar;
