import React from "react";
import MobileStepHeader from "./MobileStepHeader";
import ChangeStepfooter from "./ChangeStepfooter";
function LastStep() {
  return (
    <>
      <MobileStepHeader selected4={true} steps={true} />
      <div className='flex flex-col justify-center bg-white shadow-lg gap-2 -mt-16 rounded-md p-6 mx-2'>
        <h1 className='text-[#0d274f] font-bold text-2xl'>Finishing up</h1> 

        <p className='text-[#b0afb4] font-medium text-md'>
          Double-check everything looks OK before confirming.
        </p>

        <div className='flex flex-col bg-[#f8f9fe] rounded-lg px-5 py-5'>
          <div className='flex justify-between items-center'>
            <h2 className='text-[#0d274f] font-bold'>
              Arcade (Monthly)
              <br />
              <span>
                <h3 className='underline text-[#b1b1bb] text-sm font-medium pointer-cursor'>Change</h3>
              </span>
            </h2>
            <span className='text-[#0d274f] font-bold'>$9/mo</span>
          </div>
          <div className="bg-[#e5e6eb] rounded-lg mx-3 h-[1px] mt-4"></div>
          <div className="flex justify-between items-center mt-2">
            <h2 className='text-[#b1b1bb] font-medium text-md'>
              Online service
              </h2>
              <span className="font-light text-[#0d2747]">+1/mo</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <h2 className='text-[#b1b1bb] font-medium text-md'>
              Larger storage
              </h2>
              <span className="font-light text-[#0d2747]">+2/mo</span>
          </div>

          <div className="flex justify-between items-center mt-4">
            <h2 className='text-[#b1b1bb] font-medium text-md'>
              Customizable profile
              </h2>
              <span className="font-light text-[#0d2747]">+2/mo</span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 mx-5 pb-4">
            <h2 className='text-[#b1b1bb]  text-md'>
              Total  (per month)
              </h2>
              <span className="font-bold text-[#4e41f8]">+12/mo</span>
          </div>
      </div>
      <ChangeStepfooter to={'/confirmed'} goBack={true} goBackTo={'/thirdstep'} confirmed={true} />
    </>
  );
}

export default LastStep;
