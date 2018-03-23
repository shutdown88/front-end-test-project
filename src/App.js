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
    render() {
        return (
            // TODO make sections
            <div className="App">
                <Header />
                <Title />
                <OneTwoThree />
                <Slider />
                <Pricing />
                <ContactUs />
                <Footer />
            </div>
        );
    }
}

export default App;
