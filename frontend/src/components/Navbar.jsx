import React from 'react'
import { MapPin, Search, Settings }from 'lucide-react';


const Navbar = () => {
  return (
    <div>
      <div className="">

      <div className="navbar bg-base-100 ">
        <div className="flex-1">
            <img src="../../public/images/Logo-white.png" className='ml-[20px]' />
        </div>
        <div className="flex gap-2">
            <label className="btn btn-circle border-none swap swap-rotate">
              <input type="checkbox" className='display-none' />
              <div className='flex align-middle items-center  ml-[370px] bg-secondary swap-off rounded-full w-10 h-10 '>
                <Search className='h-4 ml-[8px] text-white'></Search>
              </div>
              <div className="flex w-60 md:w-auto swap-on mr-[373px] rounded-3xl border-[lightgray] border-[0.5px] p-[5px]" >
                <div className="flex align-middle items-center">
                  <Search className='h-5 text-white'></Search>
                  <input type="text" placeholder="Search" className="input border-none w-40 truncate text-white h-6 focus:outline-none focus:ring-0" />

                </div>

                <div className='flex align-middle items-center border-l border-l-gray-300'>
                  <MapPin className='h-5 text-white ml-[2px]'></MapPin>
                  <input type="text" placeholder="Location" className="input border-none w-40 truncate text-white h-6 focus:outline-none focus:ring-0 " />
                </div>

                <div className='flex align-middle items-center bg-secondary rounded-full w-7 h-7 ml-[2px]'>
                  <Search className='h-4 ml-[2px] text-white'></Search>
                </div>

              </div>
            </label>
            <div className=" w-20 btn btn-ghost rounded-3xl border-[lightgray] border-[0.5px] p-[5px]" >
              <span className='text-white'>Signup</span>
            </div>
            <div className=" w-20 btn btn-ghost rounded-3xl border-[lightgray] border-[0.5px] p-[5px]" >
              <span className='text-white'>Login</span>
            </div>
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost border-none btn-circle avatar">
                  <div className="w-8 items-center rounded-full">
                  <Settings className='h-7 m-[2px] ml-[4px] text-white'></Settings>
                  </div>
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-off-white rounded z-1 w-52 mt-[10px] p-2 shadow-sm">
                <li className="hover:bg-primary hover:text-white active:bg-secondary active:text-white transition-all duration-200"><a>Theme</a></li>
                <li className="hover:bg-primary hover:text-white active:bg-secondary active:text-white transition-all duration-200"><a>Settings</a></li>
                <li className="hover:bg-primary hover:text-white active:bg-secondary active:text-white transition-all duration-200"><a>Privacy Policy</a></li>
              </ul>
            </div>
        </div>
        </div>
        <hr  className="w-[1000px] justify-self-center text-off-white shadow-lg"/>
      </div>
    </div>
  )
}

export default Navbar;
