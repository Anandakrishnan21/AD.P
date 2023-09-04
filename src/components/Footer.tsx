import React from 'react'

function Footer() {
    const current = new Date().getFullYear();
  return (
    <div className='bg-slate-200'>
      <p className='text-sm md:text-base text-center p-2 opacity-70'>© {current} All Right Reserved</p>
    </div>
  )
}

export default Footer
