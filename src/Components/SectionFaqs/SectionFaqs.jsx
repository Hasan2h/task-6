import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './SectionFaqs.css'

const SectionFaqs = () => {
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
    return (
        <div>
            <Accordion className='my-5'>
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
    )
}

export default SectionFaqs