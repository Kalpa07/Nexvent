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
            <div className="flex w-60 md:w-auto  rounded-3xl border border-[lightgray] border-[0.5px] p-[5px]" > 
              <div className="flex align-middle items-center">
                <Search className='h-5 text-white'></Search>
                <input type="text" placeholder="Search" className="input border-none w-40 truncate text-white h-6 focus:outline-none focus:ring-0"  />

              </div>
              
              <div className='flex align-middle items-center border-l border-l-gray-300'>
                <MapPin className='h-5 text-white'></MapPin>
                <input type="text" placeholder="Search" className="input border-none w-40 truncate text-white h-6 focus:outline-none focus:ring-0 "  />
              </div>

              <div className='flex align-middle items-center bg-secondary rounded-full w-7 h-7 ml-[2px]'>
                <Search className='h-4 ml-[2px] text-white'></Search>
              </div>

            </div>
            <div className=" w-20 btn btn-ghost rounded-3xl border border-[lightgray] border-[0.5px] p-[5px]" >
              <span className='text-white'>Signup</span>
            </div>
            <div className=" w-20 btn btn-ghost rounded-3xl border border-[lightgray] border-[0.5px] p-[5px]" >
              <span className='text-white'>Login</span>
            </div>
            <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost border-none btn-circle avatar">
                <div className="w-8 items-center rounded-full">
                <Settings className='h-7 m-[2px] ml-[4px] text-white'></Settings>
                </div>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 ">
                <li><a>Theme</a></li>
                <li><a>Settings</a></li>
                <li><a>Privacy Policy</a></li>
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
