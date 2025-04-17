import React from 'react'
import img from '../../public/images/headerImg.png';
import hostDashboard from '../../public/images/host-dashboard.png';
import step1Host from '../../public/images/step1host.png';
import step2Host from '../../public/images/step2host.png';
import step3Host from '../../public/images/step3host.png';
import step1Guest from '../../public/images/step1Guest.png';
import step2Guest from '../../public/images/step2Guest.png';
import step3Guest from '../../public/images/step3Guest.png';
import guestDashboard from '../../public/images/Guests-Dashboard.png';




const LandingPage = () => {
  return (
    <div>
      {/* Header */}
      <div className='flex flex-col md:flex-row gap-4'>
        <div className='md:w-1/2 text-white h-250'>
          <h1 className='text-6xl font-extrabold tracking-wider font-playfair w-[825px] ml-[120px] mt-[180px]'>Discover Events That Match Your Passion</h1>
          <h4 className='font-lora tracking-wide ml-[120px] mt-[50px] text-2xl w-[625px]'>From creative to professional, explore events that speak to you—and join with ease.</h4>
        </div>
        <div className='md:w-1/2 h-250'>
          <img src={img} className='mt-[150px] ml-[-10px]'/>
        </div>
      </div>

      {/* Dashboard Host */}
      <div className='flex flex-col md:flex-row gap-4 items-center'>
        <div className='md:w-1/2'> 
          <img src={hostDashboard} className='ml-[150px]'/>
        </div>
        <div className=' md:w-1/2'>
          <h1  className=' bg-secondary'>
            <h1 className="relative w-[28ch] border-r-4 pl-[12px] border-white whitespace-nowrap overflow-hidden text-3xl font-bold animate-typing  p-1 tracking-wide text-neutral">
              Welcome to Your Host Dashboard.
            </h1>
          </h1>
          <p className="text-neutral bg-secondary pl-[12px] mt-2 ">
          Track your performance, monitor bookings, and gain insights with real-time analytics. Analyze trends, boost earnings, and elevate the guest experience.
          </p>
        {/* <p className="text-neutral bg-secondary p-1 mt-2 ">
        Analyze trends, boost earnings, and elevate the guest experience.
          </p> */}
          {/* <p className="text-neutral bg-secondary p-1 mt-2 ">
            maximize your earnings and guest satisfaction.
          </p>  */}
        </div>
      </div>

      {/* step for host */}
      <div className='flex flex-col md:flex-row gap-4 items-center'>
        <div className='md:w-1/3 p-5 pl-[150px] grid justify-items-center'>
            <div className='flex flex-col items-center mt-[200px]'>
              <div>
                <h1 className='font-playfair text-[100px] leading-[100px] mb-[-90px] font-bold'>1</h1>
                <img src={step1Host} className='h-[320px] w-[320px]'/>
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
                <img src={step2Host} className='h-[320px] w-[320px]'/>
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
                  <img src={step3Host} className=''/>
                </div>
              </div>
              <div>
                <h1 className='font-playfair font-bold text-[25px] text-center tracking-[2px]'>Track & Analyze</h1>
                <p className='text-center p-[10px]'>Gain valuable insights post-event—view registrations, feedback, and performance metrics in one place.</p>
              </div>
            </div>
        </div>
      </div>

      {/* client dashboard */}
      <div className='flex flex-col md:flex-row gap-4 items-center bg-secondary h-120 p-30'>
        <div className='md:w-1/2 '>
            <img src={guestDashboard} className=''/>
            <img src={guestDashboard} className=''/>
        </div>
        <div className='md:w-1/2 '>
            <h1 className=''>Guest Dashboard – Your Event Companion</h1>
            <p className=''>Seamlessly manage your event journey—track upcoming events, view past experiences, and get personalized recommendations, all in one place.</p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
