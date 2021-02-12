import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer = ({ fluid }) => (
    <footer className="site-footer border-top pt-3 px-3 mt-3">
        <Container fluid={fluid}>
            <Row>
                <Col>
                    <h2 className="footer-heading">Useful links</h2>
                    <ul className="footer-list">
                        <li><a href="https://www.jasmin.ac.uk" target="_blank">JASMIN</a></li>
                        <li><a href="https://www.ceda.ac.uk" target="_blank">CEDA</a></li>
                        <li><a href="https://accounts.jasmin.ac.uk" target="_blank">Accounts Portal</a></li>
                        <li><a href="https://cloud.jasmin.ac.uk" target="_blank">Cloud Portal</a></li>
                        <li><a href="https://notebooks.jasmin.ac.uk" target="_blank">Notebook Service</a></li>
                    </ul>
                </Col>
                <Col>
                    <h2 className="footer-heading">Contact us</h2>
                    <ul className="footer-list">
                        <li>
                            <a href="https://help.jasmin.ac.uk" target="_blank">
                                <i className="mr-2 fas fa-fw fa-bookmark"></i>
                                Documentation
                            </a>
                        </li>
                        <li>
                            <a href="https://www.ceda.ac.uk/contact/" target="_blank">
                                <i className="mr-2 fas fa-fw fa-life-ring"></i>
                                Helpdesk
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/cedanews" target="_blank">
                                <i className="mr-2 fab fa-fw fa-twitter"></i>
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCYjSH2ET9nLMhDcXa5y2OMg" target="_blank">
                                <i className="mr-2 fab fa-fw fa-youtube"></i>
                                YouTube
                            </a>
                        </li>
                    </ul>
                </Col>
                <Col md={5} className="text-center">
                    <p className="mb-0">
                        <strong>
                            JASMIN is operated by the Science and Technology Facilities Council on behalf of the
                            Natural Environment Research Council.
                        </strong>
                    </p>
                    <a href="https://stfc.ukri.org" title="STFC" target="_blank">
                        <img
                            src="https://artefacts.ceda.ac.uk/themes/orgtheme_jasmin/0.4c01/_assets/img/UKRI_STF_Council-Logo_Horiz-RGB_h80.png"
                            title="STFC UKRI logo"
                            alt="STFC UKRI logo"
                            height="80"
                        />
                    </a>
                    <a href="https://nerc.ukri.org/" title="NERC" target="_blank">
                        <img
                            src="https://artefacts.ceda.ac.uk/themes/orgtheme_jasmin/0.4c01/_assets/img/UKRI_NER_Council-Logo_Horiz-RGB_h80.png"
                            title="NERC UKRI logo"
                            alt="NERC UKRI logo"
                            height="80"
                        />
                    </a>
                </Col>
            </Row>
            <Row>
                <Col className="py-3">
                    <ul className="d-inline-block list-inline mb-0">
                        <li className="list-inline-item mr-3">&copy; Copyright 2020 STFC</li>
                        <li className="list-inline-item mr-3">
                            <a href="https://accounts.jasmin.ac.uk/account/accessibility/" target="_blank">Accessibility</a>
                        </li>
                        <li className="list-inline-item mr-3">
                            <a href="https://accounts.jasmin.ac.uk/account/support/" target="_blank">Support</a>
                        </li>
                        <li className="list-inline-item mr-3">
                            <a href="https://accounts.jasmin.ac.uk/account/privacy/" target="_blank">Privacy</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://accounts.jasmin.ac.uk/account/conditions/" target="_blank">Terms and Conditions</a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;
