import React from 'react'
import {Navbar, Nav, Container } from 'react-bootstrap'
import f1 from '../Imgs/footerpic.png'

import im1 from '../Imgs/Icon.png'
import im2 from '../Imgs/icon2.png'
import im3 from '../Imgs/Vector.png'
import im4 from '../Imgs/vector2.png'

const FigureOne = () => {
  return (
    <div>
        <section className='figureone'>
        <Navbar bg="rgba(0,0,0, 0.4)" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand to="#home"><span className='rh1'>Passive Piggy Banks</span><span><img src={f1} className="image-fluid sm1-img" alt='aboutpagepic' /></span> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav-cls">
                    <Nav.Link href="#home">About</Nav.Link>
                    
                    <Nav.Link href="#benfit">Benefit</Nav.Link>
                    <Nav.Link href="#Roadmap">Roadmap</Nav.Link>
                    <Nav.Link href="#Team">Team</Nav.Link>
                    <Nav.Link href="#FAQs">FAQs</Nav.Link>
                    <img src={im3} className="image-fluid img-cls" alt='aboutpagepic' />
                    <img src={im1} className="image-fluid img-cls" alt='aboutpagepic' />
                    <img src={im2} className="image-fluid img-cls" alt='aboutpagepic' />
                    
                    <img src={im4} className="image-fluid img-cls" alt='aboutpagepic' />
                    <button className='btn'>Mint Now</button>
                </Nav>
                </Navbar.Collapse>
            </Container>
            
        </Navbar>

       
         
            
           

          
        
              
                
              
       
        <div>
            <h1 className='div1'>An exclusive collection of 1,000 unique non-fungible ERC-721 tokens (NFTs)</h1>
            <p className='p1'>Passive Piggy Banks (PPB) is an exclusive collection of 1,000 unique non-fungible ERC-721
tokens (NFTs) on the Ethereum blockchain that provide holders with passive income through
real estate investments, royalties, and more.</p>
        </div>
        
            
    
            

        </section>
    </div>
  )
}

export default FigureOne