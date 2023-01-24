import React from "react";

function MobileStepHeader({selected1, selected2, selected3, selected4, steps}) {
  return (
    <div className='flex svg-background justify-center  py-20 gap-3'>
      {steps && <div className='flex justfy-center gap-3 mb-8'>
        <button className={selected1 ? selected : unselected}>
          1
        </button>
        <button className={selected2 ? selected : unselected}>
          2
        </button>
        <button className={selected3 ? selected : unselected}>
          3
        </button>
        <button className={selected4 ? selected : unselected}>
          4
        </button>
      </div>}
    </div>
  );
}

const selected =
  "rounded-full border-[#bfe2f9] bg-[#bfe2f9] text-black font-medium py-[7px] px-[17px]";
const unselected =
  "rounded-full border-white border-2 font-medium py-[7px] px-[15px] text-white";

export default MobileStepHeader;
