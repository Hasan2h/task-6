import React from 'react'
import Card from 'react-bootstrap/Card';


const ComponentCardB = ({img , title , desc , prevtitle}) => {
    return (
        <Card className='CardB col-lg col-md-6 justify-content-center align-items-center gap-2 border-0 '>
            <img src={img} alt="" />
            <Card.Body>
                <h6>{prevtitle}</h6>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ComponentCardB