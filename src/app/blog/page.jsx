import React from 'react'
import style from './blog.module.css'
import Image from 'next/image'
import instgram from '../../../puplic/assests/instagram.png'
import facebook from '../../../puplic/assests/facebook .png'
import linkedin from '../../../puplic/assests/linkedin.png'
import rectangle35 from '../../../puplic/assests/Rectangle35.png'

import oip from '../../../puplic/assests/OIP.png'
import applle from '../../../puplic/assests/Rectangle30.png'

export default function page() {
  return (
    <section  className={`${style.dashboard}`} dir='rtl'>

      <div  className={`component1 ${style.dashboard1}`}>
        <div className={`headline ${style.dashboard2}`}>
          <h1 className={`${style.dashboard3} pt-5`}>مجره
            <br/>
             ويكي </h1>


        </div>
        <div className={`paragraph ${style.dashboard4}`}>
          <p className={`${style.dashboard5} `}> نقدم مقالات مفيدة ونصائح تقنية
            
             في الفضاء الرقمي لتعزيز معرفتك 

        <span >  ونجاحك الرقمي.         </span>
            </p>
        </div>


        <div className={`search pt-5 ` }>
          
          <input className= {` ${style.dashboard6}`} type="text" /> 

          


        </div>

        <div className={`icons d-flex pt-5 gap-5 pb-5`}>
        <div className={`${style.dashboard7}`}  > 
            <Image src={instgram}/>
          </div>

          <div> 
            <Image className={`${style.dashboard7}`} src={facebook}/>
          </div>
          
          <div className={`${style.dashboard7}`}>
            <Image src={linkedin}/>
          </div>
         
         


        </div>






      </div>


      <div className={`compnent2 `}>
        <div className={`container d-flex gap-5 mt-5 justify-content-center`}>
          <div className={`part1 d-flex flex-column gap-3`}>
            <div className={`card1 ${style.dashboard8}`}>
              <Image src={rectangle35} 
              
              width={312}
              height={210}
              
              />

              <p className='text-light pt-3'>

              هل يمكنك ان تري الكوكب من الفضاء ؟
              </p>

              <div className='btns d-flex gap-3 m-3'>
                <button className={`${style.dashboard9}`}>الفضاء</button>
                <button className={`${style.dashboard9}`} >الفيزياء</button>

              </div>
              


            </div>


            <div className={`card1 ${style.dashboard8}`}>
              <Image src={rectangle35} 
              
              width={312}
              height={210}
              
              />

              <p className='text-light pt-3'>

              هل يمكنك ان تري الكوكب من الفضاء ؟
              </p>

              <div className='btns d-flex gap-3 m-3'>
                <button className={`${style.dashboard9}`}>الفضاء</button>
                <button className={`${style.dashboard9}`} >الفيزياء</button>

              </div>
              


            </div>
          </div>


          <div className='part2 d-flex flex-column gap-5'>
            <div className={`card1 ${style.dashboard10}`} >

            <p className='text-light pt-3'>

هل يمكنك ان تري الكوكب من الفضاء ؟
</p>

<div className='btns d-flex gap-3 m-3'>
  <button className={`${style.dashboard9}`}>الفضاء</button>
  <button className={`${style.dashboard9}`} >الفيزياء</button>

</div>
             
            </div>
            <div className={`card2 d-flex gap-3`}>
              <Image src={oip}
              className={`${style.dashboard11}`}
              />
              <Image src={applle}
              className={`${style.dashboard11}`}
              />
            </div>



          </div>





        </div>







      </div>


      <div className={`component3 pt-5`}>
        <div className='container pt-5 d-flex justify-content-center flex-column align-items-center gap-5'>
         
         <div className={`${style.dashboard14}`}>

         <p className='text-light fs-1 '>نشرت حديثا</p>
         </div>
          
          <div className='cards d-flex gap-5 '>
            <div className={`card1 ${style.dashboard12}`}>
              <Image src={applle}
              width={309}
              />
              <h3 className='text-light pt-3 m-3'> التسويق والمبيعات هل يمكن تعويضه ب Ai</h3>
              <p className='text-secondary fs-5 m-3'> نقدم مقالات مفيدة ونصائح تقنية عل في الفضاء الرقمي لتعزيز معرفتك لا ونجاحك الرقمي الرقمي لتعزيز مع ...</p>
              
              <div className='inputs d-flex flex-column gap-3 m-2'>
              <input className={`${style.dashboard13}`} placeholder='الفضاء'/>
              <input className={`${style.dashboard13}`} placeholder='الفيزياء'/>
              </div>
              



            </div>

            <div className={`card1 ${style.dashboard12}`}>
              <Image src={applle}
              width={309}
              />
              <h3 className='text-light pt-3 m-3'> التسويق والمبيعات هل يمكن تعويضه ب Ai</h3>
              <p className='text-secondary fs-5 m-3'> نقدم مقالات مفيدة ونصائح تقنية عل في الفضاء الرقمي لتعزيز معرفتك لا ونجاحك الرقمي الرقمي لتعزيز مع ...</p>
              
              <div className='inputs d-flex flex-column gap-3 m-2'>
              <input className={`${style.dashboard13}`} placeholder='الفضاء'/>
              <input className={`${style.dashboard13}`} placeholder='الفيزياء'/>
              </div>
              



            </div>

            <div className={`card1 ${style.dashboard12}`}>
              <Image src={applle}
              width={309}
              />
              <h3 className='text-light pt-3 m-3'> التسويق والمبيعات هل يمكن تعويضه ب Ai</h3>
              <p className='text-secondary fs-5 m-3'> نقدم مقالات مفيدة ونصائح تقنية عل في الفضاء الرقمي لتعزيز معرفتك لا ونجاحك الرقمي الرقمي لتعزيز مع ...</p>
              
              <div className='inputs d-flex flex-column gap-3 m-2'>
              <input className={`${style.dashboard13}`} placeholder='الفضاء'/>
              <input className={`${style.dashboard13}`} placeholder='الفيزياء'/>
              </div>
              



            </div>


          </div>
          

          <div className='cards d-flex gap-5 '>
            <div className={`card1 ${style.dashboard12}`}>
              <Image src={applle}
              width={309}
              />
              <h3 className='text-light pt-3 m-3'> التسويق والمبيعات هل يمكن تعويضه ب Ai</h3>
              <p className='text-secondary fs-5 m-3'> نقدم مقالات مفيدة ونصائح تقنية عل في الفضاء الرقمي لتعزيز معرفتك لا ونجاحك الرقمي الرقمي لتعزيز مع ...</p>
              
              <div className='inputs d-flex flex-column gap-3 m-2'>
              <input className={`${style.dashboard13}`} placeholder='الفضاء'/>
              <input className={`${style.dashboard13}`} placeholder='الفيزياء'/>
              </div>
              



            </div>

            <div className={`card1 ${style.dashboard12}`}>
              <Image src={applle}
              width={309}
              />
              <h3 className='text-light pt-3 m-3'> التسويق والمبيعات هل يمكن تعويضه ب Ai</h3>
              <p className='text-secondary fs-5 m-3'> نقدم مقالات مفيدة ونصائح تقنية عل في الفضاء الرقمي لتعزيز معرفتك لا ونجاحك الرقمي الرقمي لتعزيز مع ...</p>
              
              <div className='inputs d-flex flex-column gap-3 m-2'>
              <input className={`${style.dashboard13}`} placeholder='الفضاء'/>
              <input className={`${style.dashboard13}`} placeholder='الفيزياء'/>
              </div>
              



            </div>

            <div className={`card1 ${style.dashboard12}`}>
              <Image src={applle}
              width={309}
              />
              <h3 className='text-light pt-3 m-3'> التسويق والمبيعات هل يمكن تعويضه ب Ai</h3>
              <p className='text-secondary fs-5 m-3'> نقدم مقالات مفيدة ونصائح تقنية عل في الفضاء الرقمي لتعزيز معرفتك لا ونجاحك الرقمي الرقمي لتعزيز مع ...</p>
              
              <div className='inputs d-flex flex-column gap-3 m-2'>
              <input className={`${style.dashboard13}`} placeholder='الفضاء'/>
              <input className={`${style.dashboard13}`} placeholder='الفيزياء'/>
              </div>
              



            </div>


          </div>



          <div className='cards d-flex gap-5 '>
            <div className={`card1 ${style.dashboard12}`}>
              <Image src={applle}
              width={309}
              />
              <h3 className='text-light pt-3 m-3'> التسويق والمبيعات هل يمكن تعويضه ب Ai</h3>
              <p className='text-secondary fs-5 m-3'> نقدم مقالات مفيدة ونصائح تقنية عل في الفضاء الرقمي لتعزيز معرفتك لا ونجاحك الرقمي الرقمي لتعزيز مع ...</p>
              
              <div className='inputs d-flex flex-column gap-3 m-2'>
              <input className={`${style.dashboard13}`} placeholder='الفضاء'/>
              <input className={`${style.dashboard13}`} placeholder='الفيزياء'/>
              </div>
              



            </div>

            <div className={`card1 ${style.dashboard12}`}>
              <Image src={applle}
              width={309}
              />
              <h3 className='text-light pt-3 m-3'> التسويق والمبيعات هل يمكن تعويضه ب Ai</h3>
              <p className='text-secondary fs-5 m-3'> نقدم مقالات مفيدة ونصائح تقنية عل في الفضاء الرقمي لتعزيز معرفتك لا ونجاحك الرقمي الرقمي لتعزيز مع ...</p>
              
              <div className='inputs d-flex flex-column gap-3 m-2'>
              <input className={`${style.dashboard13}`} placeholder='الفضاء'/>
              <input className={`${style.dashboard13}`} placeholder='الفيزياء'/>
              </div>
              



            </div>

            <div className={`card1 ${style.dashboard12}`}>
              <Image src={applle}
              width={309}
              />
              <h3 className='text-light pt-3 m-3'> التسويق والمبيعات هل يمكن تعويضه ب Ai</h3>
              <p className='text-secondary fs-5 m-3'> نقدم مقالات مفيدة ونصائح تقنية عل في الفضاء الرقمي لتعزيز معرفتك لا ونجاحك الرقمي الرقمي لتعزيز مع ...</p>
              
              <div className='inputs d-flex flex-column gap-3 m-2'>
              <input className={`${style.dashboard13}`} placeholder='الفضاء'/>
              <input className={`${style.dashboard13}`} placeholder='الفيزياء'/>
              </div>
              



            </div>


          </div>


        </div>



      </div>





    </section>
    
  )
}
