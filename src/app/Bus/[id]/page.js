"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
  const router= useRouter()
  const id=router.query
  return (
    <div className='p-12 text-2xl '><h1 className=' text-3xl font-bold'>Bus 1</h1><div><iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d117336.53590882491!2d72.57304805126165!3d23.215169684081218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d23.195496!2d72.6269434!4m5!1s0x395c2adec1f16d8d%3A0xdc447b8706689bc3!2sIIt%20Gandhinagar!3m2!1d23.2132656!2d72.6856664!5e0!3m2!1sen!2sin!4v1710130745132!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='p-2 m-2 '></iframe> </div></div>
  )
}

export default page