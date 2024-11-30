// VideoDisplayContainer.jsx
import React from 'react';
import LegoBorder from '../../components/utils/LegoBorder';
import VideoCard from './VideoCard';
import LegoDisplayImage from '../../assets/images/backgrounds/youtube1.png';

function VideoDisplayContainer() {
  const videoData = [
    {
      borderColour: 'border-red-500',
      backgroundColour: 'bg-red-600',
      imageSrc: LegoDisplayImage,
      title: 'Building a Robot Arm',
      pieces: '212 Pieces',
      description:
        'This tutorial takes you through the intricate process of creating a fully functional robot arm using 212 Lego pieces. Learn how to assemble the robotic structure, incorporate a motor, and program it to respond to commands from a remote, PlayStation controller, or even a mobile app. This build is perfect for anyone looking to explore the basics of robotics and engineering while using the creative flexibility of Lego. You’ll also get tips on troubleshooting common assembly challenges and customizing the arm for different tasks. By the end of this video, you’ll have a working robot arm that not only moves but also performs precise actions like picking up objects or rotating in multiple directions.',
    },
    {
      borderColour: 'border-green-500',
      backgroundColour: 'bg-green-600',
      imageSrc: LegoDisplayImage,
      title: 'Constructing a Miniature Dam',
      pieces: '350 Pieces',
      description:
        'Dive into the world of engineering with this engaging tutorial on building a miniature dam entirely from Lego. Using 350 pieces, you’ll construct a functional dam capable of holding and redirecting water. The video includes step-by-step instructions for assembling the dam’s structural base, spillway, and water control gates. Explore how to test the dam’s durability with real water flow and discover insights into improving its efficiency. This project is great for those who love hands-on experimentation and want to learn about the principles of hydrodynamics and water management. Perfect for enthusiasts of all ages, this build combines fun, creativity, and real-world engineering concepts.',
    },
    {
      borderColour: 'border-orange-500',
      backgroundColour: 'bg-orange-600',
      imageSrc: LegoDisplayImage,
      title: 'Designing a Helicopter',
      pieces: '280 Pieces',
      description:
        'Take to the skies with this step-by-step guide to designing a working Lego helicopter. With 280 pieces, you’ll build a model complete with a rotating rotor blade, adjustable tail fin, and a cockpit that opens to reveal detailed controls. The tutorial walks you through the assembly of the helicopter’s frame, the mechanics behind the spinning blades, and techniques for ensuring stability during operation. Additionally, you’ll learn about the principles of aerodynamics and how they apply to real helicopters. This build is both a fun and educational experience, offering a deeper understanding of flight mechanics while letting your imagination soar. Whether for display or for action-packed adventures, this helicopter is a must-try Lego project.',
    },
  ];
  

  return (
    <LegoBorder borderColour="border-blue-500" backgroundColour="bg-blue-600">
      <section className="grid gap-6 px-6 py-6 md:px-4 md:py-4 bg-gray-300 shadow-input mx-auto xl:overflow-hidden">
        {/* Small screen display */}
        <section className="grid gap-2 xl:w-fit">
          <VideoCard {...videoData[0]} isPrimary={true} />
        </section>
        {/* Larger screen display */}
        <section className="grid md:grid-cols-2 w-full xl:w-fit gap-4">
          {videoData.slice(1).map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </section>
      </section>
    </LegoBorder>
  );
}

export default VideoDisplayContainer;
