import React from 'react'
import './ContactCompany.css'
import { Container, Row } from 'react-bootstrap'
import ComponentCard from '../ComponentCard/ComponentCard'

const ContactCompany = () => {
  return (
    <div>
        <Container className='ContactCompany my-5'>
            <Row>
                <ComponentCard title='Phone' desc='0803 - 080 - 3081' />
                <ComponentCard title='Email' desc='mail@example.com' />
                <ComponentCard title='Address' desc='No: 58 A, East Madison Street,Baltimore, MD, USA 4508' />
            </Row>
        </Container>
    </div>
  )
}

export default ContactCompany