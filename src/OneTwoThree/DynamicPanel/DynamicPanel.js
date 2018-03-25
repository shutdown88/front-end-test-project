import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './DynamicPanel.css';

export default ({
    dynamicData: { name, details, source, references, images }
}) => (
    <Row className="DynamicPanel">
        <Col className="content" md={8}>
            <h1>{name}</h1>
            <p className="text-justify">{details}</p>
            <p className="text-right">
                <i>
                    <a href={source} target="_blank">
                        Source
                    </a>
                </i>
            </p>
            <p>References:</p>
            <ul>
                {references.map(({ title, url }) => (
                    <li>
                        <a href={url} target="_blank">
                            {title}
                        </a>
                    </li>
                ))}
            </ul>
        </Col>
        <Col className="images-container" md={4}>
            <div className="scroll-container">
                <div className="images">
                    {images.map((image, index) => (
                        <div className="image-container">
                            <Image
                                responsive
                                key={image}
                                src={image}
                                alt={`${name} ${index}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Col>
    </Row>
);
