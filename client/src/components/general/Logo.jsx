import React from 'react';

function Logo() {
  return (
    <section
      className={`grid mx-auto aspect-square p-4 max-w-40 bg-colour4 shadow-cardShadow items-center justify-center text-3xl font-lego mb-6`}
    >
      <span
        title='Mr.LB'
        className='stroke-double font-lego !text-3xl tracking-tighter pr-0.5'
      >
        Mr.LB
      </span>
    </section>
  );
}

export default Logo;
