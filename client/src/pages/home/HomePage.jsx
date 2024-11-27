import React, { lazy, Suspense } from 'react';
// Analytics
import { usePageTracking } from '../../hooks/useAnalytics';
// Constants
import { CompanyName } from '../../utils/Constants';
// Components
import { HelmetItem } from '../../components/utils/HelmetItem';
import FooterComponent from '../../components/footer/FooterComponent';
// Data
import {
  homePageAdditionalMeta,
  homePageStructuredData,
} from '../../utils/data/PageData';
import HomePageHeader from '../../components/home/HomePageHeader';
import HomePageMainContent from '../../components/home/HomePageMainContent';

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
      <div className='grid min-h-screen w-full overflow-hidden font-poppins'>
        {/* Header */}
        <HomePageHeader />

        <HomePageMainContent />
        {/* Footer */}
        <FooterComponent />
      </div>
    </>
  );
});

export default HomePage;
