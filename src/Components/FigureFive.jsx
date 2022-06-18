import React from 'react'
import p1 from '../Imgs/1.png'
import im1 from '../Imgs/Icon.png'
import im2 from '../Imgs/icon2.png'
import im3 from '../Imgs/Vector.png'
import p3 from '../Imgs/3.png'

import p5 from '../Imgs/6.png'
import p9 from '../Imgs/9.png'

const FigureFive = () => {
  return (
    <div>
        <h3 className='ser-h4'>The Team</h3>

        

            <section class="service1 col-lg-10 text-center mx-auto">
            <ul>
            <li>
            <img src={p1} className="image-fluid sm-img" alt='aboutpagepic' /><h3 className='ser-col'>Ryder</h3>
            <h5 className='ser-col-h5'>Co_Founder</h5>
            <img src={im1} className="image-fluid img-cls" alt='aboutpagepic' />
               <img src={im2} className="image-fluid img-cls" alt='aboutpagepic' />
               <img src={im3} className="image-fluid img-cls" alt='aboutpagepic' />

            </li>

            <li>
            <img src={p3} className="image-fluid sm-img" alt='aboutpagepic' /><h3 className='ser-col'>Logan</h3>
            <h5 className='ser-col-h5'>Co_Founder</h5>
            <img src={im1} className="image-fluid img-cls" alt='aboutpagepic' />
               <img src={im2} className="image-fluid img-cls" alt='aboutpagepic' />
               <img src={im3} className="image-fluid img-cls" alt='aboutpagepic' />

            </li>

            <li>
            <img src={p9} className="image-fluid sm-img" alt='aboutpagepic' /><h3 className='ser-col'>Muadin</h3>
            <h5 className='ser-col-h5'>Co_Founder</h5>
            <img src={im1} className="image-fluid img-cls" alt='aboutpagepic' />
               <img src={im2} className="image-fluid img-cls" alt='aboutpagepic' />
               <img src={im3} className="image-fluid img-cls" alt='aboutpagepic' />

            </li>

            <li>
            <img src={p5} className="image-fluid sm-img" alt='aboutpagepic' /><h3 className='ser-col'>Eric</h3>
            <h5 className='ser-col-h5'>Co_Founder</h5>
            <img src={im1} className="image-fluid img-cls" alt='aboutpagepic' />
               <img src={im2} className="image-fluid img-cls" alt='aboutpagepic' />
               <img src={im3} className="image-fluid img-cls" alt='aboutpagepic' />

            </li>

            
           
            </ul>
            </section>
    </div>
  )
}

export default FigureFive