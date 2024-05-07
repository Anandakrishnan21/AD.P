import React from 'react'

function Footer() {
    const current = new Date().getFullYear();
  return (
    <div className='bg-neutral-900 text-white'>
      <p className='text-sm text-center p-2 opacity-70'>© {current} All Rights Reserved</p>
    </div>
  )
}

export default Footer
