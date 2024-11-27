import React, { lazy, Suspense } from 'react';
// Analytics
import { usePageTracking } from '../../hooks/useAnalytics';
// Constants
import { CompanyName } from '../../utils/Constants';
// Components
import Navbar from '../../components/nav/Navbar';
import { HelmetItem } from '../../components/utils/HelmetItem';
import FooterComponent from '../../components/footer/FooterComponent';
// Data
import {
  homePageAdditionalMeta,
  homePageStructuredData,
} from '../../utils/data/PageData';
// Images
import Youtube1 from '../../assets/images/backgrounds/youtube1.png';
import Youtube2 from '../../assets/images/backgrounds/youtube2.png';

const HomePage = React.memo(() => {
  usePageTracking(); // Tracks page views

  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName='Home'
        desc={`${CompanyName} offers expert web and circuit design solutions in England. Discover our services and featured projects.`}
        keywords={`web design, circuit design, ${CompanyName}, England, UK, custom solutions`}
        additionalMeta={homePageAdditionalMeta}
        structuredData={homePageStructuredData}
      />
      {/* Page */}
      <div className='grid min-h-screen w-full overflow-hidden'>
        {/* Header */}
        <header className='grid grid-rows-rev h-screen min-h-screen max-h-screen w-full home_header_bg overflow-hidden'>
          <section className='relative grid bg-bottom w-full h-full bg-home_header_image bg-no-repeat bg-contain'>
            <Navbar />
          </section>

          {/* Youtube videos */}
          <section className='grid sm:grid-cols-reg gap-4 px-2 lg:px-4 general_bg max-h-2/3 overflow-hidden'>
            <article className='grid p-1 text-left'>
              <div className='mx-auto sm:hidden'>
                <span
                  title='WATCH NOW'
                  className='stroke-double font-lego text-3xl tracking-tighter'
                >
                  WATCH NOW
                </span>
              </div>
              <h3 className='text-2xl font-bold mx-auto'>Mr Little Bricks</h3>
              <section className='text-center'>
                <h4>Watch my builds in action on:</h4>

                <section className='grid grid-cols-2 w-full gap-2 py-2'>
                  <button className='grid bg-red-500 items-center text-colour1 rounded-lg py-1'>
                    Youtube
                  </button>
                  <button className='grid bg-purple-500 items-center text-colour1 rounded-lg py-1'>
                    TikTok
                  </button>
                </section>
              </section>

              <section className='grid justify-center mx-auto'>
                <h5 title='Subscribe Now!' className='stroke-double font-lego text-3xl tracking-tighter mx-auto'>Subscribe Now!</h5>
                <h6 title='Stay up to date and support the channel' className='stroke-double font-lego !text-xl tracking-tighter'>Stay up to date and support the channel</h6>
              </section>
            </article>

            {/* Videos */}
            <section className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 sm:pb-2 sm:pt-4 overflow-hidden'>
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
                        video === 2 && 'hidden lg::grid'
                      } ${video === 3 && 'hidden lg:grid'} ${
                        video === 4 && 'hidden xl:grid'
                      }`}
                    >
                      <div className='grid grid-rows-rev gap-1 h-fit'>
                        <div className='grid max-w-72 h-fit p-1 mx-auto shadow-cardShadow'>
                          <img
                            src={video % 2 ? Youtube1 : Youtube2}
                            alt='Youtube video link'
                            className='object-cover w-full mx-auto'
                          />
                        </div>
                        <div className='text-center text-xl font-semibolds'>Race car of Pain</div>
                      </div>
                    </article>
                  </a>
                );
              })}
            </section>
          </section>
        </header>

        {/* Footer */}
        <FooterComponent />
      </div>
    </>
  );
});

export default HomePage;
