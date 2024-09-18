import React from 'react'
import style from './footer.module.css'
import Image from 'next/image'
import logo from '../../../puplic/assests/logo.png'
import footer from '../../../puplic/assests/footer.png'

export default function Footer() {
  return (
    <div className={`${style.dashboard}`}>
        <Image src={logo} />
        <Image src={footer}
        width={500}
        
        
        />
        
        
        
       
        
        
        
        </div>
  )
}
