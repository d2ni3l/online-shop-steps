import React from "react";
import MobileStepHeader from "./MobileStepHeader";
import ChangeStepfooter from "./ChangeStepfooter";
function FinalStep() {
  return (
    <>
      <MobileStepHeader />
      <div className='flex flex-col justify-center bg-white shadow-lg gap-2 -mt-16 rounded-md p-6 mx-2'>
        <h1 className='text-[#0d274f] font-bold text-2xl'>Finishing up</h1>

        <p className='text-[#b0afb4] font-medium text-md'>
          Double-check everything looks OK before confirming.
        </p>
        <div className='flex flex-col bg-[#f8f9fe] rounded-lg px-5'>
          <div className='flex justify-between'>
            <h2 className='text-[#0d274f] font-bold'>
              Arcade (Monthly)
              <br />
              <span>
                <h3 className='underline text-[#b0afb4] text-sm'>Change</h3>
              </span>
            </h2>
            <span className='text-[#0d274f] font-bold'>$9/mo</span>
          </div>
        </div>
      </div>
      <ChangeStepfooter />
    </>
  );
}

export default FinalStep;
