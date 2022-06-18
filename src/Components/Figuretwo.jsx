import React from 'react'
import b1 from '../Imgs/b1.png'
import b2 from '../Imgs/b2.png'
import b3 from '../Imgs/b3.png'
import b4 from '../Imgs/b4.png'

const Figuretwo = () => {
  return (
    <>
    <div className='fig-two'>

    <h3 className='ser-h3'>Benefits</h3>
    
    <div className='col-lg-10 mx-auto benefit-div'>
    <div className="d-flex flex-row">
      <div className="p-2 col-lg-2"><img src={b1} className="image-fluid fig-two-img" alt='aboutpagepic' /></div><br/>
      <div className="p-2 col-lg-3 bene-p"><p>Passive income through monthly preferred returns (6-8% depending on rarity of NFT), as well as a share of all OpenSea royalties (depending on rarity of NFT).</p></div>

      <div className="p-2 col-lg-2"><img src={b2} className="image-fluid fig-two-img" alt='aboutpagepic' /></div>
      <div className="p-2 col-lg-3 bene-p"><p>Access to exclusive events, PPB branded merchandise, and more
</p></div>
    
        </div>
       
    
   
       
    
    
    <div className='col-lg-12 mx-auto'>
    <div className="d-flex flex-row-row">
      <div className="p-2 col-lg-2"><img src={b4} className="image-fluid fig-two-img" alt='aboutpagepic' /></div>
      <div className="p-2 col-lg-3 bene-p"><p>Free vacation stays at PPB properties</p></div>

      <div className="p-2 col-lg-2"><img src={b3} className="image-fluid fig-two-img" alt='aboutpagepic' /></div>
      <div className="p-2 col-lg-3 bene-p"><p>Mint pass for future PPB collections
</p></div>
    
        </div>
    
    </div>

  


    </div>
    </div>
    <br/>
    <br/>
    <br />

       
    </>

  )
}

export default Figuretwo