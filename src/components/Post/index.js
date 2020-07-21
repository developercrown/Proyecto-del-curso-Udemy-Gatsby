import React from "react";
import { Card, Button } from 'react-bootstrap';

export default (props) => {
    return <div className="p-3">
        <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.excerpt}
                </Card.Text>
                <Button variant="primary" href={props.readMore}>More Information...</Button>
            </Card.Body>
        </Card>
    </div>;
}

