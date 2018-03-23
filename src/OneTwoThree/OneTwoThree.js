import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './OneTwoThree.css';

import one from './img/one.png';
import two from './img/two.png';
import three from './img/three.png';

const buttonText = 'Button for show dynamic data';

const dynamicData = [
    { key: 'one', image: one, title: 'One', text: buttonText },
    { key: 'two', image: two, title: 'Two', text: buttonText },
    { key: 'three', image: three, title: 'Three', text: buttonText }
];

const DynamicDataButton = ({ image, title, text }) => (
    // <Row className="DynamicDataButton">
    //     <Col md={4}>
    //         <img src={image} alt={title} />
    //     </Col>
    //     <Col md={8}>
    //         <h2>{title}</h2>
    //         <p>{text}</p>
    //     </Col>
    // </Row>
    <div className="DynamicDataButton">
        <img src={image} alt={title} />
        <div className="text-content">
            <p className="title">{title}</p>
            <p className="text">{text}</p>
        </div>
    </div>
);

export default ({ data }) => (
    // Fluid grid?
    <Grid className="OneTwoThree">
        {/* <Row className="DynamicContent">
            <div
                style={{
                    width: '1140px',
                    height: '455px',
                    backgroundColor: '#f1f6f7'
                }}
            >
                {data}
            </div>
        </Row> */}
        <Row className="DynamicDataButtons">
            {dynamicData.map(({ key, ...data }) => (
                <Col md={4} key={key}>
                    <DynamicDataButton {...data} />
                </Col>
            ))}
        </Row>
    </Grid>
);
