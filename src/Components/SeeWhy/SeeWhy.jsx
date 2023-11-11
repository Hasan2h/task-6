import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './SeeWhy.css';
import img from './../../assets/img/bg-6.webp';
import { Container, Row } from 'react-bootstrap';

const AccordionItem = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleAccordion = () => {
        setIsActive(!isActive);
    };

    return (
        <Accordion.Item eventKey={title}>
            <Accordion.Header onClick={toggleAccordion}>
                {title}
                <span className={`accordion-icon ${isActive ? 'active' : ''}`}>{isActive ? '-' : '+'}</span>
            </Accordion.Header>
            <Accordion.Body className={`${isActive ? 'show' : ''}`}>
                {content}
            </Accordion.Body>
        </Accordion.Item>
    );
};
const SeeWhy = () => {
    return (
        <section className='SeeWhy'>
            <div className='content'>
                <h1>SEE WHY CUSTOMERS LOVE THE OUR MOBILES</h1>
                <h6 className='mb-5'>DESIGNED TO PERFECTION</h6>
                <Container>
                    <Row>
                        <div className='img-acc col-lg col-md-6'>
                            <img src={img} alt="" />
                        </div>
                        <div className='col-lg col-md-6'>
                            <Accordion>
                                <AccordionItem
                                    title="NEW GRADIENT COLOR FINISHEs"
                                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                />
                                <AccordionItem
                                    title="FOUR-SIDED CURVED CERAMIC BODY"
                                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                />
                                <AccordionItem
                                    title="4000MAH HIGH-CAPACITY BATTERY"
                                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                />
                                <AccordionItem
                                    title="FULLY HIDDEN CAMERA LENS"
                                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                />
                            </Accordion>
                        </div>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default SeeWhy;