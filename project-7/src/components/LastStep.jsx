import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import ChangeStepfooter from "./ChangeStepfooter";
function LastStep({
  planPrice,
  planName,
  onlineService,
  largerStorage,
  customizableProfile,
  selectedPlan,
}) {
  const [addOnPrice, setAddOnPrice] = useState(0);

  useEffect(() => {
    if (
      (onlineService && largerStorage && !customizableProfile) ||
      (onlineService && customizableProfile && !largerStorage)
    ) {
      setAddOnPrice(3);
    }
    if (largerStorage && customizableProfile && !onlineService) {
      setAddOnPrice(4);
    }

    if (onlineService && largerStorage && customizableProfile) {
      setAddOnPrice(5);
    }
    if (onlineService && !customizableProfile && !largerStorage) {
      setAddOnPrice(1);
    }
    if (largerStorage && !customizableProfile && !onlineService) {
      setAddOnPrice(2);
    }
    if (customizableProfile && !onlineService && !largerStorage) {
      setAddOnPrice(2);
    }
  }, [onlineService, largerStorage, customizableProfile, addOnPrice]);

  return (
    <>
      <Header selected4={true} steps={true} />
      <div className='flex flex-col justify-center bg-white shadow-lg gap-2 -mt-16 rounded-md p-6 mx-2'>
        <h1 className='text-[#0d274f] font-bold text-2xl'>Finishing up</h1>

        <p className='text-[#b0afb4] font-medium text-md'>
          Double-check everything looks OK before confirming.
        </p>

        <div className='flex flex-col bg-[#f8f9fe] rounded-lg px-5 py-5'>
          <div className='flex justify-between items-center'>
            <h2 className='text-[#0d274f] font-bold'>
              {planName} ({selectedPlan})
              <br />
              <span>
                <Link
                  to='/secondstep'
                  className='underline  text-[#b1b1bb] text-sm font-bold  pointer-cursor '>
                  Change
                </Link>
              </span>
            </h2>
            <span className='text-[#0d274f] font-bold'>
              ${selectedPlan === "monthly" ? planPrice : planPrice * 12}/
              {selectedPlan === "monthly" ? "mo" : "yr"}
            </span>
          </div>
          <div className='bg-[#e5e6eb] rounded-lg mx-3 h-[1px] mt-4'></div>

          {onlineService && (
            <div className='flex justify-between items-center mt-2'>
              <h2 className='text-[#b1b1bb] font-medium text-md'>
                Online service
              </h2>
              <span className='font-light text-[#0d2747]'>
                +${selectedPlan === "monthly" ? "1" : "12"}/
                {selectedPlan === "monthly" ? "mo" : "yr"}
              </span>
            </div>
          )}

          {largerStorage && (
            <div className='flex justify-between items-center mt-4'>
              <h2 className='text-[#b1b1bb] font-medium text-md'>
                Larger storage
              </h2>
              <span className='font-light text-[#0d2747]'>
                +${selectedPlan === "monthly" ? "2" : "24"}/
                {selectedPlan === "monthly" ? "mo" : "yr"}
              </span>
            </div>
          )}

          {customizableProfile && (
            <div className='flex justify-between items-center mt-4'>
              <h2 className='text-[#b1b1bb] font-medium text-md'>
                Customizable profile
              </h2>
              <span className='font-light text-[#0d2747]'>
                +${selectedPlan === "monthly" ? "2" : "24"}/
                {selectedPlan === "monthly" ? "mo" : "yr"}
              </span>
            </div>
          )}
        </div>

        <div className='flex justify-between items-center mt-4 mx-5 pb-4'>
          <h2 className='text-[#b1b1bb]  text-md'>
            Total (per {selectedPlan === "monthly" ? "month" : "year"})
          </h2>
          <span className='font-bold text-[#4e41f8]'>
            +
            {selectedPlan === "monthly"
              ? addOnPrice + planPrice
              : addOnPrice * 12 + planPrice * 12}
            /{selectedPlan === "monthly" ? "mo" : "yr"}
          </span>
        </div>
      </div>
      <ChangeStepfooter
        to={"/confirmed"}
        goBack={true}
        goBackTo={"/thirdstep"}
        confirmed={true}
      />
    </>
  );
}

export default LastStep;
