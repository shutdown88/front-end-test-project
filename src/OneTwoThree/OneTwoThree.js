import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { BeatLoader } from 'react-spinners';

import DynamicPanel from './DynamicPanel/DynamicPanel';

import './OneTwoThree.css';

import one from './img/one.png';
import two from './img/two.png';
import three from './img/three.png';

// TODO stato selezionato dei bottoni one, two, three per capire quello attivo

const buttonText = 'Button for show dynamic data';

const dynamicData = [
    { key: 'one', image: one, title: 'One', text: buttonText },
    { key: 'two', image: two, title: 'Two', text: buttonText },
    { key: 'three', image: three, title: 'Three', text: buttonText }
];

const DynamicDataButton = ({ file, image, title, text, onClick }) => (
    <div
        className="DynamicDataButton"
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

export default class OneTwoThree extends Component {
    constructor(props) {
        super(props);

        this.state = { loading: true };
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    componentDidMount() {
        this.onButtonClick(dynamicData[0].key);
    }

    onButtonClick(key) {
        this.setState({ loading: true, error: false });
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

    // Fluid grid?
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
                            // check item exists
                            <DynamicPanel dynamicData={this.state.data.item} />
                        )
                        // : JSON.stringify(this.state.data)
                        }
                    </Col>
                </Row>
                <Row className="DynamicDataButtons">
                    {dynamicData.map(({ key, ...data }) => (
                        <Col md={4} key={key}>
                            <DynamicDataButton
                                file={key}
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
