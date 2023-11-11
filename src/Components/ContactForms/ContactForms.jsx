import React from 'react'
import './ContactForms.css'
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';


const ContactForms = () => {
    return (
        <div>
            <Container>
                <h1 className='my-5'>Have a question or comment? Don't be shy: Reach out and say hi! Support hours: Monday-Friday, 7am-3pm</h1>
                <Form className='contact-forms mb-5'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" placeholder='commint' rows={3} />
                    </Form.Group>
                </Form>
            </Container>
        </div>
    )
}

export default ContactForms