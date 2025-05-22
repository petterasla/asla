import Accordion from 'react-bootstrap/Accordion';
import React from "react";

interface DescriberItem {
    header: string;
    body: string;
}

interface DescriberProps {
    items: DescriberItem[]
}

const Describer: React.FC<DescriberProps> = ({ items }) => {
    return (
        <Accordion alwaysOpen>
            {items.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}

export default Describer;