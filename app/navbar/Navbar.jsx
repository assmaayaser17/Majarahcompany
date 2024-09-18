
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '../../../puplic/assests/logo.png'
import style from './navbar.module.css'
import   './navbar.module.css'



export default function Navbar() {
  return (
   <>
   
   <nav class={`navbar fixed-top navbar-expand-lg ${style.dashboard2} `} id='NAVBAR' dir='rtl'>
  <div class={`container  `} >
   <div className='logo'>
    <Image 
   src={logo}
    
    />

   </div>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={`d-block`}>
      <span class="navbar-toggler-icon"></span>
    </button>
   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class={`navbar-nav m-auto mb-2 mb-lg-0 ${style.dashboard} d-flex gap-5`} id='CONTENTS' >
        <li class="nav-item ">
          <Link class="nav-link active text-light fs-4" aria-current="page" href="/">  الرئيسيه</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-light fs-4" aria-current="page" href="blog">المدونه</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-light fs-4" aria-current="page" href="company">عملاؤنا</Link>
        </li>
        {/* <li class="nav-item">
          <Link class="nav-link active text-light" aria-current="page" href="blog">blogs</Link>
        </li> */}
       
        <li class="nav-item">
          <Link class="nav-link active text-light fs-4" aria-current="page" href="changeblog">خدماتنا</Link>
        </li>
      </ul>
      <button className={`${style.dashboard1}`}>تواصل معنا </button>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        
      </form> */}
    </div>
  </div>
</nav>
   
   
   
   
   
   
   
   
   </>
  )
}






