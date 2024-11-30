import React from 'react';
// Images
import YoutubeIcon from '../../assets/images/media_icons/youtube_video_sharing_media_logo_icon_64px.png';
import LegoManImage from '../../assets/images/lego/personal-lego-person-mr-little-bricks.png';
import LegoDisplayImage from '../../assets/images/backgrounds/youtube1.png';
import VideoDisplayContainer from './VideoDisplayContainer';

function CheckMeOutComponent({ getNextColor }) {
  return (
    <section className='grid bg-gradient-to-b from-colour4 to-colour1'>
      <div className='grid container gap-4 lg:gap-12'>
        {/* Header */}
        <section className='mt-4 px-8 py-12 sm:py-16 sm:px-12 lg:px-24 mx-auto'>
          <div className='grid gap-4 justify-center'>
            <p
              title='Mr Little Bricks'
              className='text-3xl lg:text-7xl font-bold mx-auto stroke-double'
            >
              Mr Little Bricks
            </p>
            <p className='text-center text-colour1 font-semibold text-xl'>
              Want to see more? Follow me on YouTube, where the builds come to
              life, one brick at a time.
            </p>
            <a
              href='https://youtube.com'
              rel='noreferrer'
              target='_blank'
              className='grid grid-flow-col gap-2 items-center w-fit mx-auto'
            >
              <div className='grid w-full'>
                <img
                  src={YoutubeIcon}
                  alt='Youtube'
                  className='h-12 w-22 aspect-auto'
                />
              </div>
              <button className='grid md:hidden lg:grid border-2 border-solid border-colour4 bg-white rounded-lg h-fit py-1 px-4 text-colour4 font-bold font-poppins'>
                <span>View Channel</span>
              </button>
            </a>
          </div>
        </section>

        {/* Display sections */}
        <section className='grid sm:grid-cols-2 gap-8 w-full h-full bg-blue-400'>
          <section className='max-w-60 lg:max-w-full xl:py-10 mx-auto'>
            <img
              src={LegoManImage}
              alt='Mr Little Bricks personal lego person'
            />
          </section>
          {/* Video display */}
          <VideoDisplayContainer />
        </section>
        <section className='grid sm:grid-flow-col'>
          <section className='grid mt-6'>
            <section
              className={`grid mx-auto aspect-square p-4 w-full max-w-32 lg:max-w-[220px] bg-colour4 shadow-cardShadow items-center justify-center text-3xl font-lego mb-6`}
            >
              <span
                title='Mr.LB'
                className='stroke-double font-lego !text-4xl lg:!text-6xl tracking-tighter pr-0.5'
              >
                Mr.LB
              </span>
            </section>
          </section>
          <section className='grid justify-center mx-auto h-fit items-center my-auto'>
            <h5
              title='Subscribe Now!'
              className='stroke-double font-lego text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter mx-auto'
            >
              Subscribe Now!
            </h5>
            <h6
              title='Stay up to date and support the channel'
              className='stroke-double font-lego text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tighter'
            >
              Stay up to date and support the channel
            </h6>
            <a
              href='https://youtube.com'
              rel='noreferrer'
              target='_blank'
              className='grid grid-flow-col gap-2 items-center w-fit mx-auto'
            >
              <div className='grid w-full'>
                <img
                  src={YoutubeIcon}
                  alt='Youtube'
                  className='h-12 w-22 aspect-auto'
                />
              </div>
              <button className='grid md:hidden lg:grid border-2 border-solid border-colour4 bg-white rounded-lg h-fit py-1 px-4 text-colour4 font-bold font-poppins'>
                <span>View Channel</span>
              </button>
            </a>
          </section>
        </section>
        <section className='grid grid-flow-col mt-6 lg:py-12 xl:py-12'>
          <div className={`brick b-7x2 mx-auto b-${getNextColor()}`}></div>
          <div
            className={`hidden lg:block rotate-45 brick b-2x2 mx-auto b-${getNextColor()}`}
          ></div>
          <div className={`brick b-2x2 mx-auto b-${getNextColor()}`}></div>
          <div
            className={`rotate-45 brick b-2x2 mx-auto b-${getNextColor()}`}
          ></div>
          <div
            className={`hidden lg:block brick b-11x2 mx-auto b-${getNextColor()}`}
          ></div>
        </section>
      </div>
    </section>
  );
}

export default CheckMeOutComponent;
