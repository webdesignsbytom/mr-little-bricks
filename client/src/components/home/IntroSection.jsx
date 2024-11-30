import React from 'react';
// Components
import Logo from '../general/Logo';

function IntroSection({ getNextColor }) {
  return (
    <section className='grid container mx-auto px-8 py-12 sm:py-16 sm:px-12 lg:px-24 mb-10'>
      <article className='grid gap-4'>
        <section className='grid justify-center text-center gap-4 lg:gap-6'>
          <section
            className={`grid mx-auto aspect-square p-4 lg:p-8 w-fit bg-colour4 shadow-cardShadow items-center justify-center text-3xl font-lego mb-6`}
          >
            <span
              title='Mr.LB'
              className='stroke-double font-lego !text-4xl lg:!text-6xl tracking-tighter pr-0.5 lg:pr-1'
            >
              Mr.LB
            </span>
          </section>
          <h4
            title='Mr Little Bricks'
            className='text-3xl lg:text-7xl font-bold mx-auto stroke-double'
          >
            Mr Little Bricks
          </h4>
          <h5 className='font-semibold text-colour4 text-lg lg:text-xl xl:text-2xl lg:font-bold'>
            YouTube Brick Master
          </h5>
        </section>

        <section className='text-[#f1f1f1] grid gap-10 sm:mt-6 text-lg lg:px-10 xl:px-20'>
          <p className='lg:text-center'>
            Mr Little Bricks is a YouTuber, Media Creator, Inventor and
            Brickestrian.
            <br />
            Creating the inovative and entertaining content using the worlds
            greatest thing{' '}
            <span className='font-lego text-colour3 font-bold text-xl'>
              LEGO!
            </span>
          </p>
          <div
            className={`brick b-11x1 mx-auto sm:py-2 b-${getNextColor()}`}
          ></div>
          <p>
            This isn’t just a portfolio. It’s a beacon in the darkness, a
            testament to discipline, precision, and the relentless pursuit of
            perfection. When chaos erupts on the street corner and all seems
            lost, only multicolored bricks can lead to salvation. Every project
            is a foundation, every detail a piece of the plan. In my world,
            there’s no room for failure—only strategy, order, and the will to
            build. It’s not about fame. It’s not about glory. It’s about the
            bricks… and what you can create with them. Step into the shadows,
            and let’s craft something the world will never forget. That's where
            you fill find me...stacking little bricks together.
          </p>
          <section className='grid lg:grid-cols-2 sm:py-2'>
            <div className={`brick b-11x2 mx-auto b-${getNextColor()}`}></div>
            <div
              className={`hidden lg:block brick b-11x2 mx-auto b-${getNextColor()}`}
            ></div>
          </section>
        </section>
      </article>
    </section>
  );
}

export default IntroSection;
