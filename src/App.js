import React, { Component } from 'react';

import Header from './Header/Header';
import Title from './Title/Title';
import OneTwoThree from './OneTwoThree/OneTwoThree';
import Slider from './Slider/Slider';
import Pricing from './Pricing/Pricing';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';

class App extends Component {
    sections = [
        { name: 'Features', key: 'Features' },
        { name: 'Pricing', key: 'Pricing' },
        { name: 'Contact us', key: 'Contact us' }
    ];

    render() {
        return (
            <div className="App">
                <Header navItems={this.sections} />
                <section id="Features">
                    <Title />
                    <OneTwoThree />
                </section>
                <section>
                    <Slider />
                </section>
                <section id="Pricing">
                    <Pricing />
                </section>
                <section id="Contact us">
                    <ContactUs />
                </section>
                <Footer />
            </div>
        );
    }
}

export default App;
