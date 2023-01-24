import React from "react";
import {Link} from 'react-router-dom'

function Header({selected1, selected2, selected3, selected4, steps}) {
  
const selected =
"rounded-full border-[#bfe2f9] bg-[#bfe2f9] text-black font-medium py-[7px] px-[17px]";
const unselected =
"rounded-full border-white border-2 font-medium py-[7px] px-[15px] text-white";

  return (
    <>
    <div className='flex svg-background justify-center md:mr-[30rem] md:rounded-md md:py-64  py-20 gap-3'>
      {steps && <div className='flex justfy-center md:flex-col  gap-3 mb-8'>
        <Link to='/' className={selected1 ? selected : unselected}>
          1
        </Link>
        <Link to='/secondstep' className={selected2 ? selected : unselected}>
          2
        </Link>
        <Link to='/thirdstep' className={selected3 ? selected : unselected}>
          3
        </Link>
        <Link to='/laststep' className={selected4 ? selected : unselected}>
          4
        </Link>
      </div>}
    </div>

    
    </>
  );
}

export default Header;
