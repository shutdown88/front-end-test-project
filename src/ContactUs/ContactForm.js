import React, { Component } from 'react';
import { Button, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import {
    isValidName,
    isValidEmail,
    isValidPhone
} from './Validation/validation';

const toValidationState = b => (b ? 'success' : 'error');

// Components that keeps track of form inputs state and validation

export default class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    isValidName = () => this.state.name && isValidName(this.state.name);

    isValidEmail = () => isValidEmail(this.state.email);

    isValidPhone = () => !this.state.phone || isValidPhone(this.state.phone);

    isValidState = () =>
        this.isValidName() && this.isValidEmail() && this.isValidPhone();

    handleNameChange = e => {
        this.setState({ name: e.target.value });
    };

    handleEmailChange = e => {
        this.setState({ email: e.target.value });
    };

    handlePhoneChange = e => {
        this.setState({ phone: e.target.value });
    };

    render() {
        return (
            <form>
                <FormGroup
                    controlId="name"
                    validationState={
                        this.state.name && toValidationState(this.isValidName())
                    }
                >
                    <FormControl
                        type="text"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        placeholder="Your name"
                    />
                    <HelpBlock className="text-left">
                        <span className="required">*</span> First name and last
                        name
                    </HelpBlock>
                </FormGroup>
                <FormGroup
                    controlId="email"
                    validationState={
                        this.state.name &&
                        toValidationState(this.isValidEmail())
                    }
                >
                    <FormControl
                        type="text"
                        placeholder="Email address"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    />
                    <HelpBlock className="text-left">
                        <span className="required">*</span> Response will be
                        sent to this email
                    </HelpBlock>
                </FormGroup>
                <FormGroup
                    controlId="phone"
                    validationState={
                        this.state.phone &&
                        toValidationState(this.isValidPhone())
                    }
                >
                    <FormControl
                        type="text"
                        placeholder="Phone number"
                        value={this.state.phone}
                        onChange={this.handlePhoneChange}
                    />
                    <HelpBlock className="text-left">
                        We’ll call you if you prefer
                    </HelpBlock>
                </FormGroup>
                <Button
                    type="submit"
                    bsStyle="success"
                    bsSize="large"
                    disabled={!this.isValidState()}
                    onClick={e => {
                        e.preventDefault();
                        alert('Thank you!');
                    }}
                >
                    Send
                </Button>
            </form>
        );
    }
}
