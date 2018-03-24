import React, { Component } from 'react';
import './App.css';

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

    scrollToSection(key) {
        console.log(key);
        this.sections[key] && this.sections[key].scrollIntoView();
    }

    render() {
        return (
            <div className="App">
                <Header navItems={this.sections} />
                {/* TODO can i loop throgh these? */}
                <section>
                    <Title />
                    <OneTwoThree />
                </section>
                <section>
                    <Slider />
                </section>
                <section>
                    <Pricing />
                </section>
                <section>
                    <ContactUs />
                </section>
                <Footer />
            </div>
        );
    }
}

export default App;
