import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import ContactForm from './ContactForm';

import './ContactUs.css';

export default () => (
    <div className="text-center ContactUs">
        <Grid>
            <Row>
                <Col md={8} mdOffset={2}>
                    <h1>Contact Us</h1>
                    <h2>
                        For more information about the services we offer, and
                        how we can work with you,<br /> please provide us with
                        the following items of informations.
                    </h2>
                    <p className="requiredNote">
                        Fields marked by <span className="required">*</span> are
                        required
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md={6} mdOffset={3}>
                    <ContactForm />
                </Col>
            </Row>
        </Grid>
    </div>
);
