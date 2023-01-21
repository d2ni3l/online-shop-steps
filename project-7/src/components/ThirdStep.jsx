import React from "react";
import ChangeStepfooter from "./ChangeStepfooter";
import MobileStepHeader from "./MobileStepHeader";
function ThirdStep() {
  return (
    <>
      <MobileStepHeader />
      <div className='flex flex-col justify-center bg-white shadow-lg gap-2 -mt-16 rounded-md p-6 mx-2'>
        <h1 className='text-[#0d274f] font-bold text-2xl'>Pick add-ons</h1>

        <p className='text-[#b0afb4] font-medium text-md'>
          Add-ons help enhace your gaming experience.
        </p>

        <div className='flex flex-col mt-5 gap-4'>
          <button className='flex justify-between items-center  py-5 rounded-lg gap-3 outline px-5 outline-[#b0afb4]  outline-[1.6px] focus:bg-[#f8f9fe] focus:outline-[#7a70c3] transition duration-200'>
            <div className="flex items-center ">
              <input
                type='checkbox'
                id='online_service'
                name='online_service'
                className="checkbox-color w-5 h-5 rounded-md"
              />

              <label
                htmlFor='Online service'
                className='text-[#0d274f] font-bold ml-6 text-left'>
                Online service

                <br />
                <span><p className='text-[#b0afb4] font-medium text-md '>Access to multiplayer games</p></span>
              </label>
              
            </div>

            <div className="text-[#5750a5]">+1/mo</div>
          </button>

          <button className='flex justify-between items-center  py-5 rounded-lg gap-3 outline px-5 outline-[#b0afb4]  outline-[1.6px] focus:bg-[#f8f9fe] focus:outline-[#7a70c3] transition duration-200'>
            <div className="flex items-center ">
              <input
                type='checkbox'
                id='online_service'
                name='online_service'
                className="checkbox-color w-5 h-5 rounded-md"
              />

              <label
                htmlFor='Online service'
                className='text-[#0d274f] font-bold ml-6 text-left'>
                Larger storage

                <br />
                <span><p className='text-[#b0afb4] font-medium text-md '>Extra 1TB cloud save</p></span>
              </label>
              
            </div>

            <div className="text-[#5750a5]">+2/mo</div>
          </button>

          <button className='flex justify-between items-center  py-5 rounded-lg gap-3 outline px-5 outline-[#b0afb4]  outline-[1.6px] focus:bg-[#f8f9fe] focus:outline-[#7a70c3] transition duration-200'>
            <div className="flex items-center ">
              <input
                type='checkbox'
                id='online_service'
                name='online_service'
                className="checkbox-color w-5 h-5 rounded-md"
              />

              <label
                htmlFor='Online service'
                className='text-[#0d274f] font-bold ml-6 text-left'>
                Customizable profile

                <br />
                <span><p className='text-[#b0afb4] font-medium text-md '>Customizable profile</p></span>
              </label>
              
            </div>

            <div className="text-[#5750a5]">+2/mo</div>
          </button>
        </div>
      </div>
      <ChangeStepfooter to={'/finalstep'} goBack={true} goBackTo={'/secondstep'}/>
    </>
  );
}

export default ThirdStep;
