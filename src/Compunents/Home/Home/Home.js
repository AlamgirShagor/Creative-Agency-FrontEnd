import React from 'react';
import ClientFeedback from '../ClientFeedBack/ClientFeedback';
import ClientLogo from '../ClientLogo/ClientLogo';
import ContactForm from '../ContactForm/ContactForm';
import Display from '../Display/Display';
import OurWork from '../OurWork/OurWork';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Display></Display>
            <ClientLogo></ClientLogo>
            <Services></Services>
            <OurWork></OurWork>
            <ClientFeedback></ClientFeedback>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;