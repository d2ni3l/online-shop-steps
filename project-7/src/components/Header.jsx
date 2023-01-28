import React from "react";
import {Link} from 'react-router-dom'

function Header({selected1, selected2, selected3, selected4, steps}) {
  
const selected =
"rounded-full border-[#bfe2f9] bg-[#bfe2f9] text-black font-medium py-[7px] px-[17px] md:py-[15px] md:px-[25px] ";
const unselected =
"rounded-full border-white border-2 font-medium py-[7px] px-[15px] md:py-[15px] md:px-[23px] text-white";

  return (
    <>
    <div className='flex md:items-center svg-background justify-center py-20 gap-3'>
      {steps && <div className='flex justfy-center    gap-3 mb-8  '>
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
