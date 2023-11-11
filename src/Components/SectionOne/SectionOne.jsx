import React from 'react'
import ComponentCard from '../ComponentCard/ComponentCard'
import { Container } from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import img1 from './../../assets/img/support-icon.webp'
import img2 from './../../assets/img/free-deliver-icon.webp'
import img3 from './../../assets/img/offers-icon.webp'
import './SectionOneStyle.css'

const SectioneOne = () => {
  return (
    <div className='SectionOne mb-5'>
      <Container>
        <Row>
          <ComponentCard img={img2} title="Free Shipping" desc="For orders over $50" />
          <ComponentCard img={img3} title="Official Discounts" desc="Save Big on next product" />
          <ComponentCard img={img1} title="24/7 Helpline" desc="Care till the end" />
        </Row>
      </Container>
    </div>
  )
}

export default SectioneOne