import React, {useState} from "react";
import { Link } from "react-router-dom";
import MobileStepHeader from "./MobileStepHeader";
import ChangeStepfooter from "./ChangeStepfooter";
function FirstStep() {
  const [nextStep, setNextStep] = useState('/secondstep')
  return (
    <>
      <MobileStepHeader />

      <div className='flex flex-col justify-center bg-white shadow-lg gap-2 -mt-16 rounded-md p-6 mx-2'>
        <h1 className='text-[#0d274f] font-bold text-2xl'>Personal info</h1>
        <p className='text-[#b0afb4] font-medium text-md'>
          Please provide your name, email address and phone number.
        </p>

        <form action='' className='flex flex-col justify-start gap-1'>
          <div className='py-1'></div>
          <label htmlFor='name' className='text-[#0d274f] text-sm font-medium'>
            Name
          </label>
          <input
            type='text'
            className=' border-2 border-[#dbdae0] rounded-md py-[7px] px-2 focus:outline-[#554f95] focus:outline-2 focus:border-none focus:outline'
            id='name'
            name='name'
          />
          <div className='py-1'></div>
          <label htmlFor='email' className='text-[#0d274f] text-sm font-medium'>
            Email Address
          </label>
          <input
            type='text'
            className=' border-2 border-[#dbdae0] rounded-md py-[7px] px-2'
            id='email'
            name='email'
          />
          <div className='py-1'></div>

          <label htmlFor='phone' className='text-[#0d274f] text-sm font-medium'>
            Phone Number
          </label>
          <input
            type='number'
            className=' border-2 border-[#dbdae0] rounded-md py-[7px] px-2'
            id='phone'
            name='phone'
          />
        </form>
      </div>


    <ChangeStepfooter to={nextStep} goBack={false}/>
    </>
  );
}

export default FirstStep;