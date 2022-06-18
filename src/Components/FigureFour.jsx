import React from 'react'
import road from '../Imgs/road.png'

const FigureFour = () => {
  return (
    <div>
      <h3 className='ser-h3'>RoadMap</h3>
      <div className='row'>
      <div className='col-lg-10 mx-auto'>
        <div className='row'>
        <div className='col-lg-6 mx-auto benefit-div'>
            <div className="d-flex flex-row">
            <div className="p-3"><h1 className='rh'>0%</h1></div>
            <div className="p-2 ml-10 col-lg-3"><p className='figfour-p'> Minting goes live. Presale will go live 24 hours prior to the main sale.</p></div>
            </div>

            <div className="d-flex flex-row">
            <div className="p-2"><h1  className='rh'>20%</h1></div><br/>
            <div className="p-2 col-lg-3"><p p className='figfour-p'>The PPB team will use funds raised to purchase real estate investments in our targetmarket</p></div>
            </div>

            <div className="d-flex flex-row">
            <div className="p-2"><h1  className='rh'>40%</h1></div><br/>
            <div className="p-2 col-lg-3"><p p className='figfour-p'> PPB holders will begin receiving their PPB Coins that can be used to redeem Ethereum and other rewards on our website. Rare and Legendary holders will receive monthly royalties paid in PPB Coin from mark tplace activity.</p></div>
            
            </div>

            <div className="d-flex flex-row">
            <div className="p-2"><h1  className='rh'>60%</h1></div><br/>
            <div className="p-2 col-lg-3"><p p className='figfour-p'>PPB holders will begin receiving free vacation stays at PPB properties. These stays will be randomly selected amongst all holders, with guaranteed stays for rare and legendary holders.</p></div>
            </div>

            <div className="d-flex flex-row">
            <div className="p-2"><h1  className='rh'>80%</h1></div><br/>
            <div className="p-2 col-lg-3"><p p className='figfour-p'>PPB holders will receive free access to events to meet the team and get insights on operations.</p></div>
            </div>

            <div className="d-flex flex-row">
            <div ><h1  className='rh'>100%</h1></div><br/>
            <div className="p-2 col-lg-3"><p p className='figfour-p'>Each PPB NFT will act as a mint pass for early access to all future PPB related projects or collections in different locations.</p></div>
            </div>

      
      </div>
      <div className='col-lg-4'>
      <img src={road} className="image-fluid road-img" alt='aboutpagepic' />
      </div>
      
     
      
      
      
      </div>
        </div>
        
      </div>
     
     
      
      
            
        
    </div>
  )
}

export default FigureFour