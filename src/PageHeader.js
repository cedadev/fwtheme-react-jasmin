import React from 'react';

import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


const PageHeader = props => (
    <Row>
        <Col>
            <h1 className="border-bottom mt-4 mb-3">{props.children}</h1>
        </Col>
    </Row>
);

export default PageHeader;
