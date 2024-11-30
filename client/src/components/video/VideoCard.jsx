// VideoCard.jsx
import React from 'react';
import LegoBorder from '../../components/utils/LegoBorder';

function VideoCard({
  borderColour,
  backgroundColour,
  imageSrc,
  title,
  pieces,
  description,
  isPrimary = false,
}) {
  return (
    <section className='grid xl:grid-cols-2 gap-2'>
      <LegoBorder
        borderColour={borderColour}
        backgroundColour={backgroundColour}
      >
        <div className='bg-gray-400 p-1'>
          <img
            src={imageSrc}
            alt={title}
            className='w-full xl:w-full object-cover rounded-lg xl:h-full'
          />
        </div>
      </LegoBorder>
      <section className={`grid gap-2 grid-rows-reg shadow-lg py-2 px-4 ${isPrimary && 'xl:px-6 xl:py-6'} bg-colour1 rounded-lg`}>
        <section className='h-fit'>
          <div>
            <p className='text-blue-500 font-medium'>{pieces}</p>
          </div>
          <div>
            <p className='text-2xl font-bold text-red-500 leading-6'>{title}</p>
          </div>
        </section>
        <div className='grid h-full'>
          <p className={`text-gray-700 ${!isPrimary ? 'line-clamp-3' : 'line-clamp-10'}`}>
            {description}
          </p>
        </div>
      </section>
    </section>
  );
}

export default VideoCard;
