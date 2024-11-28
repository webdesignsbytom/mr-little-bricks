import React from 'react';

function MediaLinksContainer() {
  return (
    <section className='grid grid-cols-2 mx-auto w-full gap-2 py-2'>
      <button className='grid bg-[#ed1f24] items-center text-colour1 rounded-lg py-1 px-2 border-4 border-solid border-colour3 font-bold'>
        Youtube
      </button>
      <button className='grid bg-gradient-to-r from-[#ff0050] via-[#000000] to-[#00f2ea] items-center text-colour1 rounded-lg py-1 px-2 border-4 border-solid border-colour3 font-bold'>
        TikTok
      </button>
    </section>
  );
}

export default MediaLinksContainer;
