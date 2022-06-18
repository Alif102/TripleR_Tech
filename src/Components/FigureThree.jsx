import React from 'react'
import p1 from '../Imgs/1.png'
import p2 from '../Imgs/2.png'
import p3 from '../Imgs/3.png'
import p4 from '../Imgs/5.png'
import p5 from '../Imgs/6.png'
import p9 from '../Imgs/9.png'
import p6 from '../Imgs/6.png'
import {Container,Row, Col} from 'react-bootstrap'

const FigureThree = () => {
  return (
    <div>
        <div className='m-10 col-lg-10 mx-auto'>
        <Container fluid>
  <Row>
    <Col><img src={p1} className="image-fluid sm-img" alt='aboutpagepic' /></Col>
    <Col><img src={p2} className="image-fluid sm-img" alt='aboutpagepic' /></Col>
    <Col><img src={p3} className="image-fluid sm-img" alt='aboutpagepic' /></Col>
    <Col><img src={p4} className="image-fluid sm-img" alt='aboutpagepic' /></Col>
    <Col><img src={p5} className="image-fluid sm-img" alt='aboutpagepic' /></Col>
    <Col><img src={p9} className="image-fluid sm-img" alt='aboutpagepic' /></Col>
  </Row>
  <br/>
  <br/>
  <Row>
    <Col><img src={p1} className="image-fluid sm-img" alt='aboutpagepic' /></Col>
    <Col><img src={p5} className="image-fluid sm-img" alt='aboutpagepic' /></Col>
    <Col><img src={p6} className="image-fluid sm-img" alt='aboutpagepic' /></Col>
    <Col><img src={p4} className="image-fluid sm-img" alt='aboutpagepic' /></Col>
    <Col><img src={p2} className="image-fluid sm-img" alt='aboutpagepic' /></Col>
    <Col><img src={p3} className="image-fluid sm-img" alt='aboutpagepic' /></Col>
  </Row>
</Container>
</div>

    </div>
  )
}

export default FigureThree