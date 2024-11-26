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
      <div className='grid min-h-screen w-full overflow-x-hidden'>
        {/* Header */}
        <header className='grid grid-rows-rev h-screen min-h-screen max-h-screen w-full home_header_bg'>
          <section className='relative grid bg-bottom w-full h-full bg-home_header_image bg-no-repeat bg-contain'>
            <Navbar />
          </section>

          {/* Youtube videos */}
          <section className='grid grid-cols-reg gap-1 px-2 general_bg'>
            <article>
              <h3>Mr Little Bricks</h3>
              <h4>Watch my builds in action on:</h4>

              <section>
                <div>Youtube</div>
                <div>TikTok</div>
              </section>
              <h5>Subscribe Now</h5>
              <h6>Stay up to date and support the channel</h6>
            </article>

            {/* Videos */}
            <section className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 pb-4 pt-2'>
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
                        video === 3 && 'hidden lg:grid'
                      } ${video === 4 && 'hidden xl:grid'}`}
                    >
                      <div className='grid grid-rows-rev'>
                        <div className='shadow-cardShadow'></div>
                        <div className='text-center'>Race car of Pain</div>
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
