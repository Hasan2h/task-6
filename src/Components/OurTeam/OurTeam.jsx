import React from 'react'
import './OurTeam.css'
import ComponentCardB from '../ComponentCardB/ComponentCardB'
import img1 from './../../assets/img/abo-04.webp'
import img2 from './../../assets/img/abo-05.webp'
import img3 from './../../assets/img/abo-06.webp'
import { Container, Row } from 'react-bootstrap'

const OurTeam = () => {
    return (
        <div className='OurTeam'>
            <Container className='my-5'>
                <Row>
                    <h1>OUR TEAM</h1>
                    <h6>THE PEOPLE WORKED HARD THROUGH</h6>
                    <ComponentCardB img={img1} title="FREDAN CASEY" desc="CEO" />
                    <ComponentCardB img={img2} title="JAFFI DIXON" desc="PRODUCTION MANAGER" />
                    <ComponentCardB img={img3} title="SAM RICHARDS" desc="QUALITY ANALYST" />
                </Row>
            </Container>
        </div>
    )
}

export default OurTeam