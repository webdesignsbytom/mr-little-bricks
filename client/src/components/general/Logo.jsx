import React from 'react';

function Logo() {
  return (
    <section
      className={`grid mx-auto aspect-square p-4 w-full max-w-32 lg:max-w-92 bg-colour4 shadow-cardShadow items-center justify-center text-3xl font-lego mb-6`}
    >
      <span
        title='Mr.LB'
        className='stroke-double font-lego !text-4xl lg:!text-6xl tracking-tighter pr-0.5'
      >
        Mr.LB
      </span>
    </section>
  );
}

export default Logo;
