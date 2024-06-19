import React from 'react';

import Row from 'react-bootstrap/Row.js';
import Col from 'react-bootstrap/Col.js';


const PageHeader = props => (
    <Row>
        <Col>
            <h1 className="border-bottom mt-4 mb-3">{props.children}</h1>
        </Col>
    </Row>
);

export default PageHeader;
