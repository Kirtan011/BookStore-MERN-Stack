import React from 'react';
import {Link} from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({destination='/'}) => {
  return (
<div className='flex'>
  <Link
    to={destination}
    className="w-[3em] h-8 bg-red-500 rounded-lg cursor-pointer select-none
    active:translate-y-2 active:[box-shadow:0_0px_0_0_#F26C6C,0_0px_0_0_#F26C6C66]
    active:border-b-[0px]
    transition-all duration-50 [box-shadow:0_8px_0_0_#F26C6C,0_13px_0_0_#F26C6C66]
    border-[1px] border-red-300 flex items-center justify-center"
  >
    <BsArrowLeft className='text-2xl text-white' />
  </Link>
</div>


  )
}

export default BackButton 