import React from 'react';
import { Carousel } from 'react-bootstrap';

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

export default () => (
    <div className="Slider">
        <Carousel
            interval={null}
            prevIcon={<ControlIcon icon={prevImg} altText="previous" />}
            nextIcon={<ControlIcon icon={nextImg} altText="next" />}
        >
            <Carousel.Item>
                <img alt="First" src={first} />
                <Carousel.Caption>
                    <h3>Powerful Extensions</h3>
                    <p>
                        This article is floated online with an aim to help you
                        find the best dvd printing solution. Dvd printing is an
                        important feature
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img alt="second" src={second} />
                <Carousel.Caption>
                    <h3>Modern, User Friendly &amp; Powerful Interface</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img alt="Third" src={third} />
                <Carousel.Caption>
                    <h3>Easy to costumize</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img alt="Fourth" src={fourth} />
                <Carousel.Caption>
                    <h3>Elegant &amp; Perfect Design</h3>
                    <p>
                        Te sea deleniti suscipiantur deterruisset, eu quis
                        detracto sapientem mea. An purto dicunt deserunt vix,
                        eam te iudico tritani. Dicunt irure.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img alt="Fifth" src={fifth} />
                <Carousel.Caption>
                    <h3>Clean &amp; Powerful Theme</h3>
                    <p>
                        Te sea deleniti suscipiantur deterruisset, eu quis
                        detracto sapientem mea. An purto dicunt deserunt vix,
                        eam te iudico tritani. Dicunt irure.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
);
