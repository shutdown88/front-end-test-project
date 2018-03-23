import React from 'react';
import { FormGroup, FormControl, HelpBlock } from 'react-bootstrap';

export default () => (
    <form>
        <FormGroup controlId="name">
            <FormControl type="text" placeholder="Your name" />
            {/* help block or label? */}
            <HelpBlock className="text-left">
                <span className="required">*</span> First name and last name
            </HelpBlock>
        </FormGroup>
        <FormGroup controlId="email">
            <FormControl type="text" placeholder="Email address" />
            {/* help block or label? */}
            <HelpBlock className="text-left">
                <span className="required">*</span> Response will be sent to
                this email
            </HelpBlock>
        </FormGroup>
        <FormGroup controlId="phone">
            <FormControl type="text" placeholder="Phone number" />
            {/* help block or label? */}
            <HelpBlock className="text-left">
                We’ll call you if you prefer
            </HelpBlock>
        </FormGroup>
    </form>
);
