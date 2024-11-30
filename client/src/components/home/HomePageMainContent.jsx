import React from 'react';
import IntroSection from './IntroSection';
import CheckMeOutComponent from './CheckMeOutComponent';
import LegoBorder from '../utils/LegoBorder';
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
    <main className='grid h-full w-full'>
      <div className='grid'>
        {/* Info section */}
        <LegoBorder borderColour='border-green-500' backgroundColour='bg-green-600'>
          <IntroSection getNextColor={getNextColor} />
        </LegoBorder>

        {/* Check out */}
        <CheckMeOutComponent getNextColor={getNextColor} />
      </div>
    </main>
  );
}

export default HomePageMainContent;
