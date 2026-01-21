import React from 'react';
import { useRef, useState, useEffect } from "react";
import { Instagram, Facebook, Mail } from 'lucide-react';
import reviewsData from "../content/reviews.json";

const LandingPage = () => {

  const reviews = reviewsData.reviews;

  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % reviews.length;
      setIndex(nextIndex);

      const carousel = carouselRef.current;
      const cardWidth = carousel.children[0].offsetWidth + 16;
      carousel.scrollTo({
        left: cardWidth * nextIndex,
        behavior: "smooth"
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div>
      {/* Header */}
      <div className='flex flex-col md:flex-row gap-4'>
        <div className='md:w-1/2 text-white h-250'>
          <h1 className='text-6xl font-extrabold tracking-wider font-playfair w-[825px] ml-[120px] mt-[180px]'>Discover Events That Match Your Passion</h1>
          <h4 className='font-lora tracking-wide ml-[120px] mt-[50px] text-2xl w-[625px]'>From creative to professional, explore events that speak to you—and join with ease.</h4>
        </div>
        <div className='md:w-1/2 h-250'>
          <img src="/images/headerImg.png" className='mt-[150px] ml-[-10px]' />
        </div>
      </div>

      {/* Dashboard Host */}
      <div className='flex flex-col md:flex-row gap-4 items-center mt-[100px]'>
        <div className='md:w-1/2'>
          <img src='/images/host-dashboard.png' className='ml-[150px]' />
        </div>
        <div className=' md:w-1/2'>
          <div className=' bg-secondary'>
            <h1 className="relative w-[28ch] border-r-4 pl-[12px] border-white whitespace-nowrap overflow-hidden text-3xl font-bold animate-typing  p-1 tracking-wide text-neutral">
              Welcome to Your Host Dashboard.
            </h1>
          </div>
          <p className="text-neutral bg-secondary pl-[12px] mt-2 ">
            Track your performance, monitor bookings, and gain insights with real-time analytics. Analyze trends, boost earnings, and elevate the guest experience.
          </p>
        </div>
      </div>

      {/* step for host */}
      <div>
        <h1 className='text-center mt-[250px] text-[50px] font-[Lora] italic'>Start Hosting in 3 Easy Steps</h1>
      </div>
      <div className='flex flex-col md:flex-row gap-4 items-center mt-[-50px]'>
        <div className='md:w-1/3 p-5 pl-[150px] grid justify-items-center'>
          <div className='flex flex-col items-center mt-[200px]'>
            <div>
              <h1 className='font-playfair text-[100px] leading-[100px] mb-[-90px] font-bold'>1</h1>
              <img src='/images/step1host.png' className='h-[320px] w-[320px]' />
            </div>
            <div>
              <h1 className='font-playfair font-bold text-[25px] text-center tracking-[2px]'>Plan & Publish</h1>
              <p className='text-center p-[10px]'>Easily create and customize your events with all the details your audience needs.</p>
            </div>
          </div>
        </div>
        <div className='md:w-1/3 p-5 pr-[75px] pl-[75px] grid justify-items-center'>
          <div className='flex flex-col items-center mt-[-50px]'>
            <div>
              <h1 className='font-playfair text-[100px] leading-[100px] mb-[-90px] font-bold'>2</h1>
              <img src='/images/step2host.png' className='h-[320px] w-[320px]' />
            </div>
            <div>
              <h1 className='font-playfair font-bold text-[25px] text-center tracking-[2px]'>Run Your Event</h1>
              <p className='text-center p-[10px]'>Execute your event seamlessly with tools that help you manage attendees and sessions.</p>
            </div>
          </div>
        </div>
        <div className='md:w-1/3 p-5 pr-[150px] grid justify-items-center'>
          <div className='flex flex-col items-center mt-[200px]'>
            <div >
              <h1 className='font-playfair text-[100px] leading-[100px] mb-[-90px] font-bold'>3</h1>
              <div className='h-[350px] grid content-center'>
                <img src='/images/step3host.png' className='' />
              </div>
            </div>
            <div>
              <h1 className='font-playfair font-bold text-[25px] text-center mt-[-8px] tracking-[2px]'>Track & Analyze</h1>
              <p className='text-center p-[10px]'>Gain valuable insights post-event—view registrations, feedback, and performance metrics in one place.</p>
            </div>
          </div>
        </div>
      </div>

      {/* client dashboard */}
      <div className='flex flex-col md:flex-row gap-4 items-center bg-secondary h-170 p-30 mt-20'>
        <div className='md:w-1/2 '>
          <img src='/images/browseEvent.png' className='h-[470px]' />
          <img src='/images/Guests-Dashboard.png' className='h-[470px] -mt-[400px] ml-[200px]' />
        </div>
        <div className='md:w-1/2 '>
          <h1 className='font-lora text-[35px] font-extrabold bg-orange-500 w-[116.7%] text-white pl-[10px]'>Guest Dashboard – Your Event Companion</h1>
          <p className='text-[20px] font-bold mt-[30px] m-[10px] text-[#374151] '>Seamlessly manage your event journey—track upcoming events, view past experiences, and get personalized recommendations, all in one place.</p>
        </div>
      </div>

      {/* step for guest */}
      <div>
        <h1 className='text-center mt-[250px] text-[50px] font-[Lora] italic'>Easy Steps to Explore Events</h1>
      </div>
      <div className='flex flex-col md:flex-row gap-4 items-center mt-[-30px]'>
        <div className='md:w-1/3 p-5 pl-[150px] grid justify-items-center'>
          <div className='flex flex-col items-center mt-[-50px]'>
            <div>
              <h1 className='font-playfair text-[100px] leading-[100px] mb-[-90px] font-bold'>1</h1>
              <img src='/images/step1Guest.png' className='h-[320px] w-[320px]' />
            </div>
            <div>
              <h1 className='font-playfair font-bold text-[25px] text-center tracking-[2px]'>Discover & Register</h1>
              <p className='text-center p-[10px]'>Browse a variety of events across genres and themes. Discover what sparks your interest and register effortlessly in just a few clicks.</p>
            </div>
          </div>
        </div>
        <div className='md:w-1/3 p-5 pr-[75px] pl-[75px] grid justify-items-center'>
          <div className='flex flex-col items-center mt-[200px]'>
            <div>
              <h1 className='font-playfair text-[100px] leading-[100px] mb-[-90px] font-bold'>2</h1>
              <img src='/images/step2Guest.png' className='h-[320px] w-[320px]' />
            </div>
            <div>
              <h1 className='font-playfair font-bold text-[25px] text-center tracking-[2px]'>Join the Experience</h1>
              <p className='text-center p-[10px]'>Attend your chosen events online or in-person and connect with like-minded individuals.</p>
            </div>
          </div>
        </div>
        <div className='md:w-1/3 p-5 pr-[150px] grid justify-items-center'>
          <div className='flex flex-col items-center mt-[-50px]'>
            <div >
              <h1 className='font-playfair text-[100px] leading-[100px] mb-[-90px] font-bold'>3</h1>
              <div className='h-[350px] grid content-center'>
                <img src='/images/step3Guest.png' className='h-[270px]' />
              </div>
            </div>
            <div>
              <h1 className='font-playfair font-bold text-[25px] text-center tracking-[2px]'>Rate & Reflect</h1>
              <p className='text-center p-[10px]'>Help us improve by rating events and sharing your experience with the community.</p>
            </div>
          </div>
        </div>
      </div>


      {/* meet founders */}
      <div>
        <h1 className='text-center mt-[150px] text-[50px] font-[Lora] italic'>Our Roots</h1>
      </div>
      <div className="carousel carousel-vertical rounded-box h-130 w-full mt-20">
        <div className="carousel-item h-full ">
          <img src='/images/profil-1.jpg' className='h-[450px] ml-[120px]' />
          <div className='text-end w-[900px] h-[450px] grid content-center'>
            <h2 className='text-[45px]'>Emily Brooks</h2>
            <p className='text-[20px]'>Co-founder & Product Designer </p>
            <p className='text-[25px]'>With a sharp eye for detail and a passion for user-centric design, Emily turns complex workflows into beautifully simple interfaces.</p>
          </div>
        </div>
        <div className="carousel-item h-full">
          <img src='/images/profile-2.png' className='h-[450px] ml-[120px]' />
          <div className='text-end w-[900px] h-[450px] grid content-center'>
            <h2 className='text-[45px]'>Nathan Reid</h2>
            <p className='text-[20px]'>Co-founder & Tech Lead</p>
            <p className='text-[25px]'>From code to cloud, Nathan builds scalable systems that power seamless event experiences and real-time insights.</p>
          </div>
        </div>
        <div className="carousel-item h-full">
          <img src='/images/profile-3.png' className='h-[450px] ml-[120px]' />
          <div className='text-end w-[900px] h-[450px] grid content-center'>
            <h2 className='text-[45px]'>Chloe Bennett</h2>
            <p className='text-[20px]'>Co-founder & Brand Strategist</p>
            <p className='text-[25px]'>The voice and vibe behind the platform. Chloe crafts brand stories that resonate and build lasting connections with audiences.</p>
          </div>
        </div>
      </div>


      {/* reviews */}
      <div>
        <h1 className='text-center mt-[100px] text-[50px] font-[Lora] italic'>Your Words, Our Pride</h1>
      </div>
      <div
        ref={carouselRef}
        className="carousel carousel-center bg-base-100 rounded-box w-full mt-20 space-x-4 p-4 overflow-x-auto scroll-smooth whitespace-nowrap"
      >
        {reviews.map((r, i) => (
          <div key={i} className="carousel-item inline-block bg-white p-6 rounded-xl border border-gray-300 shadow-inner w-60 h-40">
            <div className="flex gap-3 items-center mb-3">
              <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-semibold">{r.name}</p>
                <p className="text-sm text-gray-500">{r.role}</p>
              </div>
            </div>
            <div className='h-20 mt-10'>
              <p className="text-gray-700 italic text-wrap">"{r.review}"</p>
            </div>
          </div>
        ))}
      </div>

      {/* footer */}
      <div className='w-full bg-primary h-10 flex items-center justify-between px-4 mt-20'>
        <h4 className='text-white text-center flex-1 ml-5'>Copyright @Nexvent.com</h4>
        <div className='flex gap-4'>
          <div className=''><Instagram className='text-white'></Instagram> </div>
          <div className=''><Facebook className='text-white'></Facebook> </div>
          <div className=''><Mail className='text-white'></Mail> </div>
        </div>
      </div>

    </div>
  )
}

export default LandingPage
