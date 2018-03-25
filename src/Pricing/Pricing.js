import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

import './Pricing.css';

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
    <div className={'text-center Plan ' + (highlighted ? ' highlighted' : '')}>
        <div>
            <h6 className="name">{name}</h6>
            <p className="short-description">{shortDescription}</p>
            <hr />
            <p className="price">${price}</p>
            <p className="periodicity">{periodicity}</p>
            <p className="description">{description}</p>
            <hr />
        </div>

        <ul className="features">
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
            <Button block className="get-started-btn">
                Get started
            </Button>
        </div>
    </div>
);

export default () => (
    <div className="Pricing">
        <Grid>
            <Row>
                <Col
                    className="title-container text-center"
                    md={8}
                    mdOffset={2}
                >
                    <h2 className="title">Simple Pricing</h2>
                    <p className="subtitle">
                        It seems from the moment you begin to take your love of
                        astronomy seriously, the thing that is on your mind is
                        what kind.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className="Plans" md={10} mdOffset={1}>
                    <Row>
                        {plans.map((planData, index) => (
                            <Col
                                md={4}
                                key={planData.name}
                                className={
                                    'Plan-container' +
                                    (index === 0
                                        ? ' first'
                                        : index === plans.length - 1
                                            ? ' last'
                                            : '') +
                                    (planData.highlighted
                                        ? ' highlighted-col'
                                        : '')
                                }
                            >
                                <Plan {...planData} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Grid>
    </div>
);
