import React from 'react'
import f1 from '../Imgs/footerpic.png'
import im1 from '../Imgs/Icon.png'
import im2 from '../Imgs/icon2.png'
import im3 from '../Imgs/Vector.png'
import im4 from '../Imgs/vector2.png'

const FigureSeven = () => {
  return (
    <div>
        <div className='footerdiv'>
        <div className='row'>
            <div className='col-lg-11 mx-auto'>
                <div className='row'>
                    <div className='col-lg-3 mx-auto footer-div1 '>

                        <h1 className='f-div'>Passive</h1>
                        <h1 className='f-div'>Piggy <span><img src={f1} className="image-fluid sm-img" alt='aboutpagepic' /></span></h1>
                        <h1 className='f-div'>Banks</h1>
                    </div>
                    <div className='col-lg-3 mx-auto'>
                        <ul className='footer-ul'>
                            <p>About</p>
                            <p>Benefit</p>
                            <p>Roadmap</p>
                        </ul>

                    </div>
                    <div className='col-lg-3 mx-auto'>
                        <ul className='footer-ul'>
                            <p>Team</p>
                            <p>FAQs</p>
                            <p>Shop</p>
                        </ul>

                    </div>
                    <div className='col-lg-2 mx-auto footer-div4'>
                    <img src={im3} className="image-fluid img-cls1" alt='aboutpagepic' />
                    <img src={im1} className="image-fluid img-cls1" alt='aboutpagepic' />
                    <img src={im2} className="image-fluid img-cls1" alt='aboutpagepic' />
                    
                    <img src={im4} className="image-fluid img-cls1" alt='aboutpagepic' />
                    </div>

                   
                    
                   
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FigureSeven