import './ComponentCardStyle.css'
import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const ComponentCard = ({ title , desc , img}) => {
    return (
        <Card className='card col-lg col-md-6 d-flex justify-content-center align-items-center border-0 flex-row'>
            <img src={img} />
            <Card.Body className='the-body'>
                <Card.Title><Link className='LinkCard text-decoration-none text-black'>{title}</Link></Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ComponentCard