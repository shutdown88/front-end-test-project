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

// TODO create programmatically
export default () => (
    <div className="Slider">
        <Carousel
            interval={null}
            prevIcon={<ControlIcon icon={prevImg} altText="previous" />}
            nextIcon={<ControlIcon icon={nextImg} altText="next" />}
        >
            <Carousel.Item>
                <Grid>
                    <Row>
                        <Col md={5}>
                            <img
                                className="carousel-intro"
                                alt="First"
                                src={first}
                            />
                        </Col>
                        <Col md={4} mdOffset={1}>
                            <div className="caption">
                                <h3>Powerful Extensions</h3>
                                <p>
                                    This article is floated online with an aim
                                    to help you find the best dvd printing
                                    solution. Dvd printing is an important
                                    feature
                                </p>
                                <p>
                                    <a className="learn-more">Learn more</a>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </Carousel.Item>
            <Carousel.Item>
                <Grid>
                    <Row>
                        <Col md={5}>
                            <img alt="second" src={second} />
                        </Col>
                        <Col md={4} mdOffset={1}>
                            <div className="caption">
                                <h3>
                                    Modern, User Friendly &amp; Powerful
                                    Interface
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                                <p>
                                    <a className="learn-more">Learn more</a>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </Carousel.Item>
            <Carousel.Item>
                <Grid>
                    <Row>
                        <Col md={5}>
                            <img alt="Third" src={third} />
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
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </Carousel.Item>
            <Carousel.Item>
                <Grid>
                    <Row>
                        <Col md={5}>
                            <img alt="Fourth" src={fourth} />
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
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </Carousel.Item>
            <Carousel.Item>
                <Grid>
                    <Row>
                        <Col md={5}>
                            <img alt="Fifth" src={fifth} />
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
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </Carousel.Item>
        </Carousel>
    </div>
);
