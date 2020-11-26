import React from 'react';

import './App.css';

import Footer from './Footer';


// The app component ensures that the footer is rendered properly
const App = ({ children, fluid = true }) => (
    <>
        <div id="content-main">{children}</div>
        <Footer fluid={fluid} />
    </>
);

export default App;
