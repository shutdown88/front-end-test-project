import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './Footer.css';

import madisoftLogo from './img/logo-madisoft-quadrato.png';

export default () => (
    <footer className="Footer">
        <Grid>
            <Row>
                <Col md={1} sm={12}>
                    <img
                        className="footer-logo"
                        src={madisoftLogo}
                        alt="Madisoft"
                    />
                </Col>
            </Row>
        </Grid>
    </footer>
);
