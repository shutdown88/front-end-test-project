import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Title.css';

export default () => (
    <Grid className="Title">
        <Row>
            <Col md={8} sm={12} mdOffset={2}>
                <div className="text-center">
                    <h1>The Best Way to Work Together</h1>
                    <p className="lead">
                        We design and develop software for schools.
                    </p>
                </div>
            </Col>
        </Row>
    </Grid>
);
