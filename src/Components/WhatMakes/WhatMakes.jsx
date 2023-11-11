import React from 'react'
import { Container } from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import ComponentCardB from '../ComponentCardB/ComponentCardB'
import img1 from "./../../assets/img/ic12.webp"
import img2 from "./../../assets/img/ic13.avif"
import img3 from "./../../assets/img/ic11.webp"

const WhatMakes = () => {
  return (
    <section className='WhatMakes justify-content-center align-items-center'>
        <h1>WHAT MAKES THE ESSENTIAL DIFFERENT?</h1>
        <h5>EXPERIENCE HIGH PERFORMANCE AND SECURE</h5>
        <Container className=' my-5'>
            <Row>
                <ComponentCardB img={img1} prevtitle="PERFECT CUT" title="DUAL CAMERA" desc="Tristique senectus et netus et malesuada ant reiet fames." />
                <ComponentCardB img={img2} prevtitle="PRETTY" title="INTELLIGENT PROCESSING" desc="Consequat ac habit amet asse felis donec et odio pellentesque diam." />
                <ComponentCardB img={img3} prevtitle="MOST POPULAR" title="8GB DDR5 RAM" desc="Dictum varius duis at consectetur lorem donec massa sap faucibus." />
            </Row>
        </Container>
    </section>
  )
}

export default WhatMakes