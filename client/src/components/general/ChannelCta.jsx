import React from 'react';
// Images
import YoutubeIcon from '../../assets/images/media_icons/youtube_video_sharing_media_logo_icon_64px.png';

function ChannelCta() {
  return (
    <section className='grid sm:grid-flow-col lg:max-w-[60vw] lg:mx-auto'>
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
          <button className='grid border-2 border-solid border-colour4 bg-white rounded-lg h-fit py-1 px-4 text-colour4 font-bold font-poppins'>
            <span>View Channel</span>
          </button>
        </a>
      </section>
    </section>
  );
}

export default ChannelCta;
