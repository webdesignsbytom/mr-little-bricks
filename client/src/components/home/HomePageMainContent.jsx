import React from 'react';
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
      <div className='grid container mx-auto px-8 py-12'>
        {/* Info section */}
        <section className='grid'>
          <article className='grid gap-4'>
            <section className='grid justify-center text-center '>
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

            <section className='text-[#f1f1f1] grid gap-10'>
              <p>
                This isn’t just another brickin' portfolio. It’s a fortress of
                creativity, built brick by brick, idea by idea. Every project
                here is engineered with precision—because when you’re crafting
                greatness, there’s no room for mistakes. In this world, it’s not
                about shortcuts or easy wins. It’s about discipline. It’s about
                focus. It’s about the bricks. So if you’re ready to build
                something bold, let’s get to work. I’ll be here in the shadows
                stacking little coloured bricks.
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
                never forget.
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
