# fwtheme-react-jasmin

Package providing components for using the JASMIN theme in React applications.

## Installation

This package is currently only available for installation directly from GitHub:

```sh
yarn add fwtheme-react-jasmin@github:cedadev/fwtheme-react-jasmin
```

## Usage

To add the JASMIN theme styling to your application, just wrap your application in
the JASMIN `App` component:

```js
import React from 'react';
import ReactDOM from 'react-dom';

import JasminApp from 'fwtheme-react-jasmin';

import App from './App';


ReactDOM.render(
    <React.StrictMode>
        <JasminApp>
            <App />
        </JasminApp>
    </React.StrictMode>,
    document.getElementById('root')
);
```

This will import all the JASMIN theme CSS and also add the standard footer to
your application.

### JASMIN Logo

This package also provides a component that renders the JASMIN logo. This can be used
anywhere you would use a regular image element, for example as part of a a Bootstrap
Navbar for your site header, e.g.:

```javascript
import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { LinkContainer } from 'react-router-bootstrap';

import { Logo } from 'fwtheme-react-jasmin';


const AppNavbar = ({ authenticatedUser }) => (
    <Navbar expand="lg" variant="dark" bg="success">
        <LinkContainer to="/">
            <Navbar.Brand>
                <Logo height={30} />
            </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Nav className="mr-auto">
                <LinkContainer to="/section1">
                    <Nav.Link>Section 1</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/section2">
                    <Nav.Link>Section 2</Nav.Link>
                </LinkContainer>
            </Nav>
            <Navbar.Text>
                <i className="fas fa-fw fa-user mr-1" />
                {authenticatedUser.username}
            </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
);
```

### Updating the JASMIN theme version

When a new version of the JASMIN theme is deployed, the URLs in [App.css](./src/App.css)
and [Logo.js](./src/Logo.js) will need to be updated to the new version.

Applications that include this package as a dependency will then need to update to
point at the new version:

```sh
yarn up fwtheme-react-jasmin@github:cedadev/fwtheme-react-jasmin
```
