import React from 'react';
import { Link } from "react-router-dom";


function ChangeStepfooter({to, goBack, goBackTo, confirmed}) {
  return (
    <div className={`bg-[#ffffff] py-6 px-4 mt-12 shadow-md flex items-center ${!goBack ? 'justify-end' : 'justify-between' }`}>
        {goBack && <Link className='text-[#b0afb4] font-medium text-md '
         to={goBackTo}
        >
        Go Back
        </Link>}
        <Link
          className='p-2 px-3 tracking-wide cursor-pointer bg-[#032958] text-white rounded-md text-sm'
          to={to}>
          {!confirmed ? 'Next Step' : 'Confirm'}
        </Link>
      </div>
  )
}

export default ChangeStepfooter