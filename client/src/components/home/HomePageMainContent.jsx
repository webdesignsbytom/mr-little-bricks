import React from 'react';
import IntroSection from './IntroSection';
import CheckMeOutComponent from './CheckMeOutComponent';
// Components

function HomePageMainContent() {
  const colors = ['orange', 'blue', 'green', 'red'];
  let colorIndex = 0;

  function getNextColor() {
    const color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length; // Cycle back to the start
    return color;
  }

  return (
    <main className='grid bg-[#333] h-full w-full'>
      <div className='grid'>
        {/* Info section */}
        <IntroSection getNextColor={getNextColor} />

        {/* Check out */}
        <CheckMeOutComponent getNextColor={getNextColor} />
      </div>
    </main>
  );
}

export default HomePageMainContent;
