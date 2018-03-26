import React, { Fragment } from 'react';
import { Carousel, Grid, Row, Col } from 'react-bootstrap';

import './Slider.css';

import prevImg from './img/prev.png';
import nextImg from './img/next.png';

import firstImg from './img/First.png';
import secondImg from './img/Second.png';
import thirdImg from './img/Third.png';
import fourthImg from './img/Fourth.png';
import fifthImg from './img/Fifth.png';

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

const firstSlide = (index, slidesLength) => (
    <Fragment>
        <Col md={5}>
            <div className="img-container intro-container">
                <img className="carousel-intro" alt="First" src={firstImg} />
            </div>
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
                            This article is floated online with an aim to help
                            you find the best dvd printing solution. Dvd
                            printing is an important feature
                        </p>
                        <p>
                            <a className="learn-more">Learn more</a>
                        </p>
                        {renderIndicators(index, slidesLength)}
                    </Col>
                </Row>
            </div>
        </Col>
    </Fragment>
);

const secondSlide = (index, slidesLength) => (
    <Fragment>
        <Col md={5}>
            <div className="img-container">
                <img alt="second" src={secondImg} />
            </div>
        </Col>
        <Col md={6} mdOffset={1}>
            <div className="caption">
                <Row>
                    <Col md={12}>
                        <h3>Modern, User Friendly &amp; Powerful Interface</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                        <p>
                            <a className="learn-more">Learn more</a>
                        </p>
                        {renderIndicators(index, slidesLength)}
                    </Col>
                </Row>
            </div>
        </Col>
    </Fragment>
);

const thirdSlide = (index, slidesLength) => (
    <Fragment>
        <Col md={5}>
            <div className="img-container">
                <img alt="Third" src={thirdImg} />
            </div>
        </Col>
        <Col md={4} mdOffset={1}>
            <div className="caption">
                <h3>Easy to costumize</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
                <p>
                    <a className="learn-more">Learn more</a>
                </p>
                {renderIndicators(index, slidesLength)}
            </div>
        </Col>
    </Fragment>
);

const fourthSlide = (index, slidesLength) => (
    <Fragment>
        <Col md={5}>
            <div className="img-container">
                <img alt="Fourth" src={fourthImg} />
            </div>
        </Col>
        <Col md={4} mdOffset={1}>
            <div className="caption">
                <h3>Elegant &amp; Perfect Design</h3>
                <p>
                    Te sea deleniti suscipiantur deterruisset, eu quis detracto
                    sapientem mea. An purto dicunt deserunt vix, eam te iudico
                    tritani. Dicunt irure.
                </p>
                <p>
                    <a className="learn-more">Learn more</a>
                </p>
                {renderIndicators(index, slidesLength)}
            </div>
        </Col>
    </Fragment>
);

const fifthSlide = (index, slidesLength) => (
    <Fragment>
        <Col md={5}>
            <div className="img-container">
                <img alt="Fifth" src={fifthImg} />
            </div>
        </Col>
        <Col md={4} mdOffset={1}>
            <div className="caption">
                <h3>Clean &amp; Powerful Theme</h3>
                <p>
                    Te sea deleniti suscipiantur deterruisset, eu quis detracto
                    sapientem mea. An purto dicunt deserunt vix, eam te iudico
                    tritani. Dicunt irure.
                </p>
                <p>
                    <a className="learn-more">Learn more</a>
                </p>
                {renderIndicators(index, slidesLength)}
            </div>
        </Col>
    </Fragment>
);

const slides = [firstSlide, secondSlide, thirdSlide, fourthSlide, fifthSlide];

export default () => (
    <div className="Slider clearfix">
        <Carousel
            wrap={false}
            interval={null}
            prevIcon={<ControlIcon icon={prevImg} altText="previous" />}
            nextIcon={<ControlIcon icon={nextImg} altText="next" />}
            indicators={false}
        >
            {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                    <Grid>
                        <Row>{slide(index, slides.length)}</Row>
                    </Grid>
                </Carousel.Item>
            ))}
        </Carousel>
    </div>
);
