import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import ContactForm from './ContactForm';

import './ContactUs.css';

export default () => (
    <div className="text-center ContactUs">
        <Grid>
            <Row>
                <Col>
                    <h1>Contact Us</h1>
                    <h2>
                        For more information about the services we offer, and
                        how we can work with you, please provide us with the
                        following information.
                    </h2>
                    <p className="requiredNote">
                        Fields marked by <span className="required">*</span> are
                        required
                    </p>
                    <ContactForm />
                </Col>
            </Row>
        </Grid>
    </div>
);
