import React from 'react';
// Images
import Youtube1 from '../../assets/images/backgrounds/youtube1.png';
import Youtube2 from '../../assets/images/backgrounds/youtube2.png';
// Components
import Navbar from '../../components/nav/Navbar';

function HomePageHeader() {
  return (
    <header className='grid grid-rows-rev h-screen min-h-screen max-h-screen w-full home_header_bg overflow-hidden'>
      <section className='relative grid bg-bottom w-full h-full bg-home_header_image bg-no-repeat bg-contain'>
        <Navbar />
        <section className='hidden z-10 sm:grid absolute top-24 right-16'>
          <h3
            title='Mr Little Bricks'
            className='text-6xl lg:text-7xl font-bold mx-auto stroke-double'
          >
            Mr Little Bricks
          </h3>
          <div className='lg:text-end'>
            <span className='font-semibold text-colour4 text-lg lg:text-xl lg:font-bold'>
              YouTube Brick Master
            </span>
          </div>
        </section>
      </section>

      {/* Youtube videos */}
      <section className='grid sm:grid-cols-reg gap-4 px-2 lg:px-4 general_bg max-h-[60vh] overflow-hidden'>
        <article className='grid sm:h-fit sm:my-auto px-1 sm:pl-6 pt-4 text-left'>
          <h3
            title='Mr Little Bricks'
            className='text-4xl font-bold mx-auto stroke-double'
          >
            Mr Little Bricks
          </h3>
          <section className='text-center mx-auto'>
            <h4 className='font-semibold'>Watch my builds in action on:</h4>

            <section className='grid grid-cols-2 mx-auto sm:w-full gap-2 py-2'>
              <button className='grid bg-[#ed1f24] items-center text-colour1 rounded-lg py-1 px-2 max-w-[150px] border-4 border-solid border-colour3 font-bold'>
                Youtube
              </button>
              <button className='grid bg-gradient-to-r from-[#ff0050] via-[#000000] to-[#00f2ea] items-center text-colour1 rounded-lg py-1 px-2 max-w-[150px] border-4 border-solid border-colour3 font-bold'>
                TikTok
              </button>
            </section>
          </section>

          <section className='grid justify-center mx-auto'>
            <h5
              title='Subscribe Now!'
              className='stroke-double font-lego text-3xl tracking-tighter mx-auto'
            >
              Subscribe Now!
            </h5>
            <h6
              title='Stay up to date and support the channel'
              className='stroke-double font-lego !text-xl tracking-tighter'
            >
              Stay up to date and support the channel
            </h6>
          </section>
        </article>

        {/* Videos */}
        <section className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 sm:pb-2 md:justify-end sm:pt-4 overflow-hidden'>
          {[1, 2, 3, 4].map((video, index) => {
            return (
              <a
                key={index}
                href='https://youtube.com'
                rel='noreferrer'
                target='_blank'
              >
                <article
                  className={`grid aspect-video cursor-pointer ${
                    video === 2 && 'hidden md:grid'
                  } ${video === 3 && 'hidden lg:grid'} ${
                    video === 4 && 'hidden xl:grid'
                  }`}
                >
                  <div className='grid grid-rows-rev gap-1 h-fit md:h-full'>
                    <div className='grid max-w-72 md:max-w-[200px] h-fit md:h-full p-1 mx-auto shadow-cardShadow'>
                      <img
                        src={video % 2 ? Youtube1 : Youtube2}
                        alt='Youtube video link'
                        className='object-cover w-full mx-auto h-full'
                      />
                    </div>
                    <div className='text-center text-xl font-semibolds'>
                      Race car of Pain
                    </div>
                  </div>
                </article>
              </a>
            );
          })}
        </section>
      </section>
    </header>
  );
}

export default HomePageHeader;
