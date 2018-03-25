import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './DynamicPanel.css';

export default ({
    dynamicData: { name, details, source, references, images }
}) => (
    <Row className="DynamicPanel">
        <Col className="content" md={12}>
            <h1>
                <a href={source} target="_blank">
                    {name}
                </a>
            </h1>
            <Row>
                <Col md={9}>
                    <blockquote className="text-justify">
                        <p>{details}</p>
                    </blockquote>
                    <div className="images">
                        {images.map((image, index) => (
                            <div className="image-container" key={image}>
                                <Image
                                    width={100}
                                    height={89}
                                    src={image}
                                    alt={`${name} ${index}`}
                                />
                            </div>
                        ))}
                    </div>
                </Col>
                <Col md={3}>
                    <div className="references">
                        <p>References:</p>
                        <ul>
                            {references.map(({ title, url }) => (
                                <li key={title}>
                                    <a href={url} target="_blank">
                                        {title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Col>
            </Row>
        </Col>
    </Row>
);
