import React from 'react';
// Images
import LegoDisplayImage from '../../assets/images/backgrounds/youtube1.png';
import LegoBorder from '../../components/utils/LegoBorder'

function VideoDisplayContainer() {
  return (
    <LegoBorder borderColour='border-blue-500' backgroundColour='bg-blue-600'>
      <section className='grid gap-2 px-2 py-2 bg-colour1'>
        <section>
            <LegoBorder borderColour='border-red-500' backgroundColour='bg-red-600'>
          <img
            src={LegoDisplayImage}
            alt='Mr Little Bricks lego build'
            className='w-full object-cover rounded-lg'
          />
              </LegoBorder>

        </section>
        <section className='hidden lg:grid grid-cols-2 w-full gap-2'>
          <div>
          <LegoBorder borderColour='border-green-500' backgroundColour='bg-green-600'>

            <img
              src={LegoDisplayImage}
              alt='Mr Little Bricks lego build'
              className='w-full object-cover'
            />
                </LegoBorder>

          </div>
          <div>
          <LegoBorder borderColour='border-orange-500' backgroundColour='bg-orange-600'>
            <img
              src={LegoDisplayImage}
              alt='Mr Little Bricks lego build'
              className='w-full object-cover'
            />
                </LegoBorder>

          </div>
        </section>
      </section>
    </LegoBorder>
  );
}

export default VideoDisplayContainer;
