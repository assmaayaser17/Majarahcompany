 import React from 'react'
 import style from './page.module.css'
 import Image from 'next/image'
 import logocust from '../../puplic/assests/logocust.png' 
 import facebook from '../../puplic/assests/php.png'
 import search from '../../puplic/assests/search.png'
 import facebook1 from '../../puplic/assests/facebook.png'
 import zad from '../../puplic/assests/zad.png'
 
 export default function Home() {
   return (
    <>
    <section className={``} dir='rtl'>
      <div className={`component1 ${style.dashboard2}`}>
      <div className={`container    `}>
        <div className='row'>
        <div className='col-12'>
          <div className='headline text-center text-light pt-3'> 
            <h1 className={`${style.dashboard1} pt-5`}>رواد مجرة الفضاء الرقمي</h1>
            <p className={`${style.dashboard}`}> نقدم لك حلولًا رقمية متكاملة تشمل التسويق الفعال
              <br/>
               البرمجيات المتطورة، وتحليل البيانات الذكية. معًا
               <br/>
                !نسير بخطوات ثابتة نحو النجاح </p>


          </div>

      </div>
      

          




        </div>



        </div>
       





      </div>

      <div className={`component2 ${style.dashboard4}`}>
        <div className='container pt-5'>
          <div className='row'>
            <div className='col'>
              <h4 className='text-light text-center'>عملائنا</h4>
            </div>
          </div>
          <div className='photos '>
          <div className='row d-flex flex-column gap-5 pt-5'>

             <div className='col d-flex gap-5 justify-content-center'>
              <div className={`frame  ${style.dashboard3} `}>
  <Image
  src={logocust}
  />

               </div>


               <div className={`frame  ${style.dashboard3} `}>
  <Image
  src={logocust}
  />

               </div>


               <div className={`frame  ${style.dashboard3} `}>
  <Image
  src={logocust}
  />

               </div>

  

               </div>

               <div className='col d-flex gap-5 justify-content-center'>
              <div className={`frame  ${style.dashboard3} `}>
  <Image
  src={logocust}
  />

               </div>


               <div className={`frame  ${style.dashboard3} `}>
  <Image
  src={logocust}
  />

               </div>


               <div className={`frame  ${style.dashboard3} `}>
  <Image
  src={logocust}
  />

               </div>

  

               </div>



               <div className='col d-flex gap-5 justify-content-center'>
              <div className={`frame  ${style.dashboard3} `}>
  <Image
  src={logocust}
  />

               </div>


               <div className={`frame  ${style.dashboard3} `}>
  <Image
  src={logocust}
  />

               </div>


               <div className={`frame  ${style.dashboard3} `}>
  <Image
  src={logocust}
  />

               </div>

  

               </div>


               <div className='col d-flex gap-5 justify-content-center'>
              <div className={`frame  ${style.dashboard3} `}>
  <Image
  src={logocust}
  />

               </div>


               <div className={`frame  ${style.dashboard3} `}>
  <Image
  src={logocust}
  />

               </div>


               <div className={`frame  ${style.dashboard3} `}>
  <Image
  src={logocust}
  />

               </div>

  

               </div>
  
 

             </div>
    

  </div>
  
 

             </div>

          </div>

          <div className={`component3 ${style.dashboard5}`}>
            <h2 className={`${style.dashboard6}`}> رؤيتنا</h2>
            <h3 className={`${style.dashboard7}`} >  رواد علامتك التجارية  </h3>
            <p className={`${style.dashboard8}`} > 
            اصطحاب عملائنا في رحلة فضائية،
            
             لنصل إلى أبعاد 
            جديدة من الإبداع والتفوق الرقمي </p>





          </div>

          <div className={`component4 ${style.dashboard9} `}>
            <div className='headline text-center text-light pt-5 '>
              <h1>  خدماتنا </h1>
              <p>نُقدّم حلولًا رقمية متكاملة لتنمية أعمالك، بدءًا من التسويق الفعال، مرورًا بخدمات البرمجة المتقدمة، وصولًا إلى 
                <br/>
                تحليل البيانات الذكي.  </p>
            </div>

            <div className={`container mt-5  d-flex justify-content-center flex-column align-items-center gap-5 ${style.dashboard11}`}>
              
            <div className={` ${style.dashboard10}`}>
                <div className='logo'>
                  <Image src={facebook1}

                  width={200}
                  
                  
                  />
                </div>
                <div className={`text text-light ${style.dashboard12}`}>
                  <h1>التسويق الرقمي </h1>
                                         
                  
                </div>

              </div>

              <div className={` ${style.dashboard10}`}>
                <div className='logo'>
                  <Image src={facebook}
                  width={200}
                  
                  
                  />
                </div>
                <div className={`text text-light ${style.dashboard12}`}>
                  <h1> البرمجة </h1>
                </div>

              </div>

              <div className={` mb-5 ${style.dashboard10}`}>
                <div className='logo'>
                  <Image src={search}

                  width={200}
                  
                  
                  />
                </div>
                <div className={`text text-light ${style.dashboard12} `}>
                  <h1> تحليل البيانات  </h1>
                </div>

              </div>

              



            </div>




          </div>

          <div className={`component5 ${style.dashboard13}  `}>


          </div>


          <div className={`component6 ${style.dashboard14} `}>

            <div className='pt-5 text-center '> <h2>لكم كل 
              <br/>
              التقدير والاحترام</h2> </div>

              <div className='container'>


              <div className='cards d-flex flex-column gap-5 pt-5'>
              <div className={`cards1 ${style.dashboard18}`} >

<div className={`${style.dashboard15}`}>

  <div className={`${style.dashboard16}`}>
  <Image    src={zad}
  width={80}
  
  />
  </div>

  <div className={`${style.dashboard17}`}>  

  <p> شاكرين جدًا لمجرة للحلول الرقمية
   
   بفضل فريقهم الشاطر، قدرنا نرفع تفاعل العملاء على السوشيال ميديا
  
    بشكل ملحوظ ونظهر بشكل أقوى على المنصات المختلفة.</p>


  </div>
 

  


</div>


<div className={`${style.dashboard15}`}>

  <div className={`${style.dashboard16}`}>
  <Image    src={zad}
  width={80}
  
  />
  </div>

  <div className={`${style.dashboard17}`}>  

  <p> شاكرين جدًا لمجرة للحلول الرقمية
   
   بفضل فريقهم الشاطر، قدرنا نرفع تفاعل العملاء على السوشيال ميديا
  
    بشكل ملحوظ ونظهر بشكل أقوى على المنصات المختلفة.</p>


  </div>
 

  


</div>

<div className={`${style.dashboard15}`}>

  <div className={`${style.dashboard16}`}>
  <Image    src={zad}
  width={80}
  
  />
  </div>

  <div className={`${style.dashboard17}`}>  

  <p> شاكرين جدًا لمجرة للحلول الرقمية
   
   بفضل فريقهم الشاطر، قدرنا نرفع تفاعل العملاء على السوشيال ميديا
  
    بشكل ملحوظ ونظهر بشكل أقوى على المنصات المختلفة.</p>


  </div>
 

  


</div>




  <div className={`${style.dashboard15}`}>

  <div className={`${style.dashboard16}`}>
  <Image    src={zad}
  width={80}
  
  />
  </div>

  <div className={`${style.dashboard17}`}>  

  <p> شاكرين جدًا لمجرة للحلول الرقمية
   
   بفضل فريقهم الشاطر، قدرنا نرفع تفاعل العملاء على السوشيال ميديا
  
    بشكل ملحوظ ونظهر بشكل أقوى على المنصات المختلفة.</p>


  </div>
 

  


</div>




               </div>
              <div className={`cards2 ${style.dashboard18}`} >

<div className={`${style.dashboard15}`}>

  <div className={`${style.dashboard16}`}>
  <Image    src={zad}
  width={80}
  
  />
  </div>

  <div className={`${style.dashboard17}`}>  

  <p> شاكرين جدًا لمجرة للحلول الرقمية
   
   بفضل فريقهم الشاطر، قدرنا نرفع تفاعل العملاء على السوشيال ميديا
  
    بشكل ملحوظ ونظهر بشكل أقوى على المنصات المختلفة.</p>


  </div>
 

  


</div>


<div className={`${style.dashboard15}`}>

  <div className={`${style.dashboard16}`}>
  <Image    src={zad}
  width={80}
  
  />
  </div>

  <div className={`${style.dashboard17}`}>  

  <p> شاكرين جدًا لمجرة للحلول الرقمية
   
   بفضل فريقهم الشاطر، قدرنا نرفع تفاعل العملاء على السوشيال ميديا
  
    بشكل ملحوظ ونظهر بشكل أقوى على المنصات المختلفة.</p>


  </div>
 

  


</div>

<div className={`${style.dashboard15}`}>

  <div className={`${style.dashboard16}`}>
  <Image    src={zad}
  width={80}
  
  />
  </div>

  <div className={`${style.dashboard17}`}>  

  <p> شاكرين جدًا لمجرة للحلول الرقمية
   
   بفضل فريقهم الشاطر، قدرنا نرفع تفاعل العملاء على السوشيال ميديا
  
    بشكل ملحوظ ونظهر بشكل أقوى على المنصات المختلفة.</p>


  </div>
 

  


</div>




  <div className={`${style.dashboard15}`}>

  <div className={`${style.dashboard16}`}>
  <Image    src={zad}
  width={80}
  
  />
  </div>

  <div className={`${style.dashboard17}`}>  

  <p> شاكرين جدًا لمجرة للحلول الرقمية
   
   بفضل فريقهم الشاطر، قدرنا نرفع تفاعل العملاء على السوشيال ميديا
  
    بشكل ملحوظ ونظهر بشكل أقوى على المنصات المختلفة.</p>


  </div>
 

  


</div>




              </div>





              </div>



              </div>


              

              





            




          </div>




          
          
          




     













    </section>
 
 
    
    
    </>
     
   )
 }
 
