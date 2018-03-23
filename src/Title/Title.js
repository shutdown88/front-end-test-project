import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Title.css';

export default () => (
    <Grid className="Title">
        <Row>
            {/* col-md-push-2 col-md-8 col-sm-12 */}
            <Col /* mdPush={2}  */ md={8} sm={12} mdOffset={2}>
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
