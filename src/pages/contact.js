import React from "react";
import { Form, Button } from 'react-bootstrap';
import PrimaryLayout from '../components/Layouts/PrimaryLayout';
import SEO from '../components/SEO'

export default () => {
    return <PrimaryLayout>
        <SEO title="Contáctanos" keywords={(['uno', 'dos', 'tres']).join(', ')}></SEO>
        <div className="col-12 col-md-6">
            <h1>Contact US</h1>
            <p>si necesitas contactarnos aqui estamos.</p>
            <Form>
                <Form.Group controlId="contactForm.Email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email..." />
                </Form.Group>
                <Form.Group controlId="contactForm.Subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject..." />
                </Form.Group>
                <Form.Group controlId="contactForm.Message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Button>Submit</Button>
            </Form>
        </div>

    </PrimaryLayout>
}
