import React from 'react';
// Constants
import Logo from '../general/Logo';
import MediaLinksContainer from '../cta/MediaLinksContainer';

function HomePageMainContent() {
  const colors = ['orange', 'blue', 'green'];
  let colorIndex = 0;

  function getNextColor() {
    const color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length; // Cycle back to the start
    return color;
  }

  return (
    <main className='grid bg-[#333] h-full w-full'>
      <div className='grid container mx-auto px-8 py-12 sm:py-16 sm:w-4/5'>
        {/* Info section */}
        <section className='grid'>
          <article className='grid gap-4'>
            <section className='grid justify-center text-center'>
              <Logo />
              <h4
                title='Mr Little Bricks'
                className='text-3xl lg:text-7xl font-bold mx-auto stroke-double'
              >
                Mr Little Bricks
              </h4>
              <h5 className='font-semibold text-colour4 text-lg lg:text-xl lg:font-bold'>
                YouTube Brick Master
              </h5>
            </section>

            <section className='text-[#f1f1f1] grid gap-10 sm:mt-6 text-lg'>
              <p>
                Mr Little Bricks is a YouTuber, Media Creator, Inventor and Brickestrian. 
                <br />
                Creating the inovative and entertaining content using the worlds greatest thing <span className='font-lego text-colour3 font-bold text-xl'>LEGO!</span>
              </p>
              <div className={`brick b-11x1 mx-auto b-${getNextColor()}`}></div>
              <p>
                This isn’t just a portfolio. It’s a beacon in the darkness, a
                testament to discipline, precision, and the relentless pursuit
                of perfection. When chaos erupts on the street corner and all
                seems lost, only multicolored bricks can lead to salvation.
                Every project is a foundation, every detail a piece of the plan.
                In my world, there’s no room for failure—only strategy, order,
                and the will to build. It’s not about fame. It’s not about
                glory. It’s about the bricks… and what you can create with them.
                Step into the shadows, and let’s craft something the world will
                never forget. That's where you fill find me...stacking little bricks together.
              </p>
              <div className={`brick b-11x2 mx-auto b-${getNextColor()}`}></div>
              <p>
                Want to see more? Follow me on YouTube, where the builds come to
                life, one brick at a time.
              </p>

              <MediaLinksContainer />
              <div className={`brick b-11x3 mx-auto b-${getNextColor()}`}></div>
            </section>
          </article>
        </section>
      </div>
    </main>
  );
}

export default HomePageMainContent;
