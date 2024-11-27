import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// Images
import YoutubeIcon from '../../assets/images/media_icons/youtube_video_sharing_media_logo_icon_64px.png';
// Icons
import { IoMdMenu } from 'react-icons/io';
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
    <nav className='absolute top-0 left-1/2 transform -translate-x-1/2 w-full sm:w-max'>
      <div className='relative grid grid-flow-col justify-between xs:gap-2 sm:gap-6 lg:gap-10 sm:grid-cols-[100px_1fr_auto] bg-gray-600 px-4 sm:px-8 md:px-10 rounded-bl-lg rounded-br-lg shadow-cardShadow w-full'>
        {/* Logo */}
        <section className='grid relative w-[100px]'>
          <NavLink
            className={`grid absolute aspect-square p-4 z-20 bg-colour4 shadow-cardShadow items-center justify-center text-3xl font-lego`}
            to={HOME_PAGE_URL}
          >
            <span
              title='Mr.LB'
              className='stroke-double font-lego !text-3xl tracking-tighter pr-0.5'
            >
              Mr.LB
            </span>
          </NavLink>
        </section>

        {/* Navbar */}
        <section className='hidden md:grid items-center'>
          <ul className='grid grid-flow-col tracking-wider items-center gap-2 text-colour3 font-lego'>
            {navItems.map(({ path, label }) => (
              <NavItem key={label} url={path} title={label} />
            ))}
          </ul>
        </section>

        <section className='mx-auto items-center my-auto md:hidden pr-6'>
          <span
            title='WATCH NOW'
            className='stroke-double font-lego text-3xl tracking-tighter '
          >
            WATCH NOW
          </span>
        </section>

        {/* End container */}
        <section className='grid grid-flow-col justify-end gap-2'>
          {/* Youtube link */}
          <section className='hidden xs:grid w-full'>
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
              <button className='hidden sm:grid md:hidden lg:grid border-2 border-solid border-colour4 bg-white rounded-lg h-fit py-1 px-4 text-colour4 font-bold font-poppins'>
                <span>View Channel</span>
              </button>
            </a>
          </section>

          {/* Mobile nav button */}
          <section className='grid md:hidden py-1 items-center'>
            <button
              aria-label='Toggle navigation menu'
              onClick={togglePhoneNav}
              className='grid w-fit h-fit items-center justify-center text-5xl cursor-pointer'
            >
              <IoMdMenu className='active:scale-90 duration-300 text-colour4' />
            </button>
          </section>
        </section>

        {/* Phone navbar */}
      <section
        className={`phone-nav absolute top-full left-0 w-full bg-nav-background rounded-xl rounded-br-xl transition-transform duration-300 ${
          isPhoneNavOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
        }`}
      >
        <ul className='grid gap-8 items-center justify-center text-center py-10 text-colour3 font-lego'>
          {navItems.map(({ path, label }) => (
            <NavItem key={label} url={path} title={label} />
          ))}
        </ul>
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
          return isActive ? { color: 'var(--colour4)' } : {};
        }}
      >
        {title}
      </NavLink>
    </li>
  );
};

export default Navbar;
