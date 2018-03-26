import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { BeatLoader } from 'react-spinners';

import DynamicPanel from './DynamicPanel/DynamicPanel';

import './OneTwoThree.css';

import one from './img/one.png';
import two from './img/two.png';
import three from './img/three.png';

const buttonText = 'Button for show dynamic data';

// Data for dynamic buttons
const dynamicData = [
    { key: 'one', image: one, title: 'One', text: buttonText },
    { key: 'two', image: two, title: 'Two', text: buttonText },
    { key: 'three', image: three, title: 'Three', text: buttonText }
];

const DynamicDataButton = ({ file, image, title, text, onClick, selected }) => (
    <div
        className={'DynamicDataButton' + (selected ? ' selected' : '')}
        onClick={() => {
            onClick(file);
        }}
    >
        <img src={image} alt={title} />
        <div className="text-content">
            <p className="title">{title}</p>
            <p className="text">{text}</p>
        </div>
    </div>
);

// Main components that keeps track of the selected button,
// loading state and fetches the requested data

export default class OneTwoThree extends Component {
    constructor(props) {
        super(props);

        this.state = { loading: true };
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    componentDidMount() {
        // Select first button at start
        this.onButtonClick(dynamicData[0].key);
    }

    onButtonClick(key) {
        this.setState({ loading: true, error: false, selected: key });
        fetch(`./data/${key}.json`)
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    const error = { error: `Response status ${resp.status}` };
                    throw error;
                }
            })
            .then(data => {
                this.setState({ loading: false, data });
            })
            .catch(() => {
                this.setState({ loading: false, error: true });
            });
    }

    render() {
        return (
            <Grid className="OneTwoThree">
                <Row>
                    <Col className="dynamic-data-container" md={12}>
                        {this.state.loading ? (
                            <div className="loading">
                                <BeatLoader color={'#123abc'} />
                            </div>
                        ) : this.state.error ? (
                            'error'
                        ) : (
                            <DynamicPanel dynamicData={this.state.data.item} />
                        )}
                    </Col>
                </Row>
                <Row className="DynamicDataButtons">
                    {dynamicData.map(({ key, ...data }) => (
                        <Col md={4} key={key}>
                            <DynamicDataButton
                                file={key}
                                selected={this.state.selected === key}
                                {...data}
                                onClick={this.onButtonClick}
                            />
                        </Col>
                    ))}
                </Row>
            </Grid>
        );
    }
}
