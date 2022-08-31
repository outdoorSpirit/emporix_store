import React, { useState } from 'react'
import { Button } from 'react-scroll'

const Subscribe = () => {
  
	

  	return (
		<div className = " bg-gradient-to-b from-[#5F8FAA] to-[#87ABBF] w-full h-[328px] md:h-[336px] text-center text-white" >
			
			<div className='pt-12 md:pt-24 w-2/3  font-bold text-[24px] leading-[40px] md:text-[32px] md:leading-[48px] mx-auto'>
				Subscribe to our Newsletter and get the latest news and offers
			</div>
			
			<button className='bg-[#7A95A3] mt-6 md:mt-12  h-12 px-[98.5px] md:px-[55px] py-[17px] md:w-[240px] text-center border border-white font-bold font-inter text-[14px] leading-[14px]'>SUBSCRIBE NOW</button>
			
		</div>
  	)
}

export default Subscribe