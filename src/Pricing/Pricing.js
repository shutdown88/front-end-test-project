import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

// TODO move data in another file
const plans = [
    {
        name: 'Basic',
        highlighted: false,
        shortDescription: 'For a taste our product',
        price: 0,
        periodicity: 'always free',
        description:
            'How to boost the design and developing process with help of four paws.',
        gbOfSpace: 2,
        recoveryDays: 30,
        integrations: false,
        remoteWipe: false
    },
    {
        name: 'Professional',
        highlighted: false,
        shortDescription: 'Make individual product',
        price: 8.99,
        periodicity: 'per month',
        description:
            'Computer War Games How To Estimate Decisions Made By C C Trainees',
        gbOfSpace: 8,
        recoveryDays: 60,
        integrations: true,
        remoteWipe: false
    },
    {
        name: 'Business',
        highlighted: true,
        shortDescription: 'For big companies',
        price: 18.99,
        periodicity: 'per month',
        description:
            'Direct Mail Advertising How I Made 47 325 In 30 Days By Mailing',
        gbOfSpace: 30,
        recoveryDays: 90,
        integrations: true,
        remoteWipe: true
    }
];

const Plan = ({
    name,
    highlighted,
    shortDescription,
    price,
    periodicity,
    description,
    gbOfSpace,
    recoveryDays,
    integrations,
    remoteWipe
}) => (
    <div className={'text-center' + (highlighted ? ' highlighted' : '')}>
        <div>
            <h6>{name}</h6>
            <p>{shortDescription}</p>
            <hr />
            <p>${price}</p>
            <small>{periodicity}</small>
            <p>{description}</p>
            <hr />
        </div>

        <ul>
            <li>{gbOfSpace} Gb of space</li>
            <li>{recoveryDays} days of file recovery</li>
            <li>MS Office 365 integration</li>
            <li className={integrations ? '' : 'unmarked'}>
                <span>Unlimited third-party integrations</span>
            </li>
            <li className={remoteWipe ? '' : 'unmarked'}>
                <span>Remote wipe</span>
            </li>
        </ul>
        <div className="text-center">
            {/* TODO use button component from bootstrap */}
            <button className="btn btn-default">Get started</button>
        </div>
    </div>
);

export default () => (
    // Grid, Row, Col
    <Grid>
        <Row>
            <Col className="text-center">
                <h2>Simple pricing</h2>
                <p>
                    It seems from the moment you begin to take your love of
                    astronomy seriously, the thing that is on your mind is what
                    kind.
                </p>
            </Col>
        </Row>
        <Row>
            <Col>
                <Row>
                    {plans.map(planData => (
                        <Col md={4} key={planData.name}>
                            <Plan {...planData} />
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    </Grid>
);
