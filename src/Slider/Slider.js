import React from 'react';
import { Carousel, Grid, Row, Col } from 'react-bootstrap';

import './Slider.css';

import prevImg from './img/prev.png';
import nextImg from './img/next.png';

import first from './img/First.png';
import second from './img/Second.png';
import third from './img/Third.png';
import fourth from './img/Fourth.png';
import fifth from './img/Fifth.png';

const ControlIcon = ({ icon, altText }) => (
    <span>
        <img src={icon} alt={altText} />
    </span>
);

const renderIndicators = (active, length) => (
    <ol className="carousel-indicators">
        {Array.apply(null, { length: length })
            .map(Number.call, Number)
            .map(index => (
                <li className={index === active ? 'active' : ''} key={index} />
            ))}
    </ol>
);

// TODO create programmatically
export default () => (
    <div className="Slider clearfix">
        <Carousel
            wrap={false}
            interval={null}
            prevIcon={<ControlIcon icon={prevImg} altText="previous" />}
            nextIcon={<ControlIcon icon={nextImg} altText="next" />}
            indicators={false}
        >
            <Carousel.Item>
                <Grid>
                    <Row>
                        <Col md={5}>
                            <img
                                height={460}
                                className="carousel-intro"
                                alt="First"
                                src={first}
                            />
                        </Col>
                        <Col md={6} mdOffset={1}>
                            <div className="caption">
                                <Row>
                                    <Col md={12}>
                                        <h3>Powerful Extensions</h3>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={8}>
                                        <p>
                                            This article is floated online with
                                            an aim to help you find the best dvd
                                            printing solution. Dvd printing is
                                            an important feature
                                        </p>
                                        <p>
                                            <a className="learn-more">
                                                Learn more
                                            </a>
                                        </p>
                                        {renderIndicators(0, 5)}
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </Carousel.Item>
            <Carousel.Item>
                <Grid>
                    <Row>
                        <Col md={5}>
                            <img height={460} alt="second" src={second} />
                        </Col>
                        <Col md={6} mdOffset={1}>
                            <div className="caption">
                                <Row>
                                    <Col md={11}>
                                        <h3>
                                            Modern, User Friendly &amp; Powerful
                                            Interface
                                        </h3>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={8}>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua.
                                        </p>
                                        <p>
                                            <a className="learn-more">
                                                Learn more
                                            </a>
                                        </p>
                                        {renderIndicators(1, 5)}
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </Carousel.Item>
            <Carousel.Item>
                <Grid>
                    <Row>
                        <Col md={5}>
                            <img height={460} alt="Third" src={third} />
                        </Col>
                        <Col md={4} mdOffset={1}>
                            <div className="caption">
                                <h3>Easy to costumize</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                                <p>
                                    <a className="learn-more">Learn more</a>
                                </p>
                                {renderIndicators(2, 5)}
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </Carousel.Item>
            <Carousel.Item>
                <Grid>
                    <Row>
                        <Col md={5}>
                            <img height={460} alt="Fourth" src={fourth} />
                        </Col>
                        <Col md={4} mdOffset={1}>
                            <div className="caption">
                                <h3>Elegant &amp; Perfect Design</h3>
                                <p>
                                    Te sea deleniti suscipiantur deterruisset,
                                    eu quis detracto sapientem mea. An purto
                                    dicunt deserunt vix, eam te iudico tritani.
                                    Dicunt irure.
                                </p>
                                <p>
                                    <a className="learn-more">Learn more</a>
                                </p>
                                {renderIndicators(3, 5)}
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </Carousel.Item>
            <Carousel.Item>
                <Grid>
                    <Row>
                        <Col md={5}>
                            <img height={460} alt="Fifth" src={fifth} />
                        </Col>
                        <Col md={4} mdOffset={1}>
                            <div className="caption">
                                <h3>Clean &amp; Powerful Theme</h3>
                                <p>
                                    Te sea deleniti suscipiantur deterruisset,
                                    eu quis detracto sapientem mea. An purto
                                    dicunt deserunt vix, eam te iudico tritani.
                                    Dicunt irure.
                                </p>
                                <p>
                                    <a className="learn-more">Learn more</a>
                                </p>
                                {renderIndicators(4, 5)}
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </Carousel.Item>
        </Carousel>
    </div>
);
