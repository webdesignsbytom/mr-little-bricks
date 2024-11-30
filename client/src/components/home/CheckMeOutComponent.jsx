import React from 'react';
// Images
import YoutubeIcon from '../../assets/images/media_icons/youtube_video_sharing_media_logo_icon_64px.png';
import LegoManImage from '../../assets/images/lego/personal-lego-person-mr-little-bricks.png';
import LegoDisplayImage from '../../assets/images/backgrounds/youtube1.png';
import VideoDisplayContainer from '../video/VideoDisplayContainer';
import ChannelCta from '../general/ChannelCta';

function CheckMeOutComponent({ getNextColor }) {
  return (
    <section className='grid bg-gradient-to-b from-colour4 to-colour1'>
      <div className='grid gap-4 lg:gap-12'>
        {/* Header */}
        <section className='mt-4 px-8 py-12 sm:py-16 sm:px-12 lg:px-24 lg:py-32 mx-auto'>
          <div className='grid gap-4 md:gap-8 justify-center'>
            <p
              title='Mr Little Bricks'
              className='text-3xl sm:text-4xl lg:text-7xl font-bold mx-auto stroke-double'
            >
              Mr Little Bricks
            </p>
            <p className='text-center text-colour1 font-semibold text-xl md:max-w-[50vw]'>
              Want to see more? Follow me on YouTube, where the builds come to
              life, one brick at a time.
            </p>
            <div className='relative w-full'>
              <a
                href='https://youtube.com'
                rel='noreferrer'
                target='_blank'
                className='absolute inset-x-0 grid grid-flow-col gap-2 items-center w-full mx-auto justify-center rounded-xl shadow-cardShadow bg-white md:max-w-[50vw]'
              >
                <div className='grid w-full'>
                  <img
                    src={YoutubeIcon}
                    alt='Youtube'
                    className='h-12 w-22 aspect-auto'
                  />
                </div>
                <button className='grid border-2 border-solid border-colour4 bg-white rounded-lg h-fit py-1 px-4 text-colour4 font-bold font-poppins'>
                  <span>View Channel</span>
                </button>
              </a>
            </div>
          </div>
        </section>

                {/* Lego border */}
                <section className='grid grid-flow-col pb-6'>
          <div className={`brick b-7x2 mx-auto rotate-[-2deg] b-${getNextColor()}`}></div>
          <div className={`hidden md:block brick rotate-12 b-4x2 mx-auto b-${getNextColor()}`}></div>
          <div className={`hidden lg:block rotate-45 brick b-2x2 mx-auto b-${getNextColor()}`}></div>
          <div className={`brick b-2x2 mx-auto b-${getNextColor()}`}></div>
          <div className={`rotate-45 brick b-2x2 mx-auto b-${getNextColor()}`}></div>
          <div className={`hidden md:block brick rotate-12 b-4x2 mx-auto b-${getNextColor()}`}></div>
          <div className={`hidden lg:block brick b-11x2 rotate-[-10deg] mx-auto b-${getNextColor()}`}></div>
        </section>

        {/* Display sections */}
        <section className='grid xl:grid-cols-reg gap-8 lg:max-w-[75vw] lg:mx-auto xl:max-w-full w-full h-full px-2 xs:px-4 sm:px-8 xl:max-h-screen xl:overflow-hidden xl:px-16'>
          <section className='grid max-w-60 lg:max-w-full xl:py-10 mx-auto min-w-[25vw] xl:items-center xl:justify-center'>
            <img
              src={LegoManImage}
              alt='Mr Little Bricks personal lego person'
              className='max-h-36 xl:max-h-full xl:object-fill'
            />
          </section>
          {/* Video display */}
          <VideoDisplayContainer />
        </section>

        {/* Lego border */}
        <section className='grid grid-flow-col mt-6 lg:py-12 xl:py-12'>
          <div className={`brick b-7x2 mx-auto rotate-[-2deg] b-${getNextColor()}`}></div>
          <div className={`hidden md:block brick rotate-12 b-4x2 mx-auto b-${getNextColor()}`}></div>
          <div className={`hidden lg:block rotate-45 brick b-2x2 mx-auto b-${getNextColor()}`}></div>
          <div className={`brick b-2x2 mx-auto b-${getNextColor()}`}></div>
          <div className={`rotate-45 brick b-2x2 mx-auto b-${getNextColor()}`}></div>
          <div className={`hidden md:block brick rotate-12 b-4x2 mx-auto b-${getNextColor()}`}></div>
          <div className={`hidden lg:block brick b-11x2 rotate-[-10deg] mx-auto b-${getNextColor()}`}></div>
        </section>

        {/* Check me out CTA */}
        <div className='pt-6 lg:pt-10'>
          <ChannelCta />
        </div>

        {/* Lego border */}
        <section className='grid grid-flow-col mt-6 lg:py-12 xl:py-12'>
          <div className={`brick b-7x2 mx-auto rotate-[-2deg] b-${getNextColor()}`}></div>
          <div className={`hidden md:block brick rotate-12 b-4x2 mx-auto b-${getNextColor()}`}></div>
          <div className={`hidden lg:block rotate-45 brick b-2x2 mx-auto b-${getNextColor()}`}></div>
          <div className={`brick b-2x2 mx-auto b-${getNextColor()}`}></div>
          <div className={`rotate-45 brick b-2x2 mx-auto b-${getNextColor()}`}></div>
          <div className={`hidden md:block brick rotate-12 b-4x2 mx-auto b-${getNextColor()}`}></div>
          <div className={`hidden lg:block brick b-11x2 rotate-[-10deg] mx-auto b-${getNextColor()}`}></div>
        </section>
      </div>
    </section>
  );
}

export default CheckMeOutComponent;
