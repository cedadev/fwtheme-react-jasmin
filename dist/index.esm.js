import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/* Import JASMIN theme CSS from artefacts server */\n@import url('https://artefacts.ceda.ac.uk/themes/orgtheme_jasmin/0.5/4/flatly/bootstrap.css');\n@import url('https://artefacts.ceda.ac.uk/themes/orgtheme_jasmin/0.5/_assets/css/MyFontsWebfontsKit.css');\n@import url('https://artefacts.ceda.ac.uk/themes/orgtheme_jasmin/0.5/_assets/css/webfonts.css');\n@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css');\n\n/* Code to force the footer to the bottom of the page */\nhtml { height: 100%; }\nbody {\n    height: 100% !important;\n}\n#root {\n    min-height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n#content-main {\n    flex: 1;\n}\n\n/* Styles for the footer itself */\n.site-footer {\n    background-color: #ecf0f1;\n}\n.footer-heading {\n    font-size: 1.6rem;\n}\n.footer-list {\n    list-style: none;\n    padding: 0;\n    font-size: 1rem;\n}\n.footer-list li {\n    padding: 0.25rem 0;\n    font-weight: bolder;\n}\n";
styleInject(css_248z);

const Footer = _ref => {
  let fluid = _ref.fluid;
  return /*#__PURE__*/React.createElement("footer", {
    className: "site-footer border-top pt-3 px-3 mt-3"
  }, /*#__PURE__*/React.createElement(Container, {
    fluid: fluid
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement("h2", {
    className: "footer-heading"
  }, "Useful links"), /*#__PURE__*/React.createElement("ul", {
    className: "footer-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.jasmin.ac.uk",
    target: "_blank"
  }, "JASMIN")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.ceda.ac.uk",
    target: "_blank"
  }, "CEDA")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://accounts.jasmin.ac.uk",
    target: "_blank"
  }, "Accounts Portal")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://cloud.jasmin.ac.uk",
    target: "_blank"
  }, "Cloud Portal")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://notebooks.jasmin.ac.uk",
    target: "_blank"
  }, "Notebook Service")))), /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement("h2", {
    className: "footer-heading"
  }, "Contact us"), /*#__PURE__*/React.createElement("ul", {
    className: "footer-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://help.jasmin.ac.uk",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("i", {
    className: "mr-2 fas fa-fw fa-bookmark"
  }), "Documentation")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://jasmin.ac.uk/help/contact/",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("i", {
    className: "mr-2 fas fa-fw fa-life-ring"
  }), "Helpdesk")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://twitter.com/cedanews",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("i", {
    className: "mr-2 fab fa-fw fa-twitter"
  }), "Twitter")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.youtube.com/channel/UCYjSH2ET9nLMhDcXa5y2OMg",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("i", {
    className: "mr-2 fab fa-fw fa-youtube"
  }), "YouTube")))), /*#__PURE__*/React.createElement(Col, {
    md: 5,
    className: "text-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mb-0"
  }, /*#__PURE__*/React.createElement("strong", null, "JASMIN is operated by the Science and Technology Facilities Council on behalf of the Natural Environment Research Council.")), /*#__PURE__*/React.createElement("a", {
    href: "https://stfc.ukri.org",
    title: "STFC",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://artefacts.ceda.ac.uk/themes/orgtheme_jasmin/0.4c01/_assets/img/UKRI_STF_Council-Logo_Horiz-RGB_h80.png",
    title: "STFC UKRI logo",
    alt: "STFC UKRI logo",
    height: "80"
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://nerc.ukri.org/",
    title: "NERC",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://artefacts.ceda.ac.uk/themes/orgtheme_jasmin/0.4c01/_assets/img/UKRI_NER_Council-Logo_Horiz-RGB_h80.png",
    title: "NERC UKRI logo",
    alt: "NERC UKRI logo",
    height: "80"
  })))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    className: "py-3"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "d-inline-block list-inline mb-0"
  }, /*#__PURE__*/React.createElement("li", {
    className: "list-inline-item mr-3"
  }, "\xA9 Copyright 2020 STFC"), /*#__PURE__*/React.createElement("li", {
    className: "list-inline-item mr-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://accounts.jasmin.ac.uk/account/accessibility/",
    target: "_blank"
  }, "Accessibility")), /*#__PURE__*/React.createElement("li", {
    className: "list-inline-item mr-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://accounts.jasmin.ac.uk/account/support/",
    target: "_blank"
  }, "Support")), /*#__PURE__*/React.createElement("li", {
    className: "list-inline-item mr-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://accounts.jasmin.ac.uk/account/privacy/",
    target: "_blank"
  }, "Privacy")), /*#__PURE__*/React.createElement("li", {
    className: "list-inline-item"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://accounts.jasmin.ac.uk/account/conditions/",
    target: "_blank"
  }, "Terms and Conditions")))))));
};

// The app component ensures that the footer is rendered properly
const App = _ref => {
  let children = _ref.children,
    _ref$fluid = _ref.fluid,
    fluid = _ref$fluid === void 0 ? true : _ref$fluid;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: "content-main"
  }, children), /*#__PURE__*/React.createElement(Footer, {
    fluid: fluid
  }));
};

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}

const _excluded = ["alt"];
const Logo = _ref => {
  let _ref$alt = _ref.alt,
    alt = _ref$alt === void 0 ? "JASMIN Logo" : _ref$alt,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "https://artefacts.ceda.ac.uk/themes/orgtheme_jasmin/0.5/_assets/img/jasmin_logo_white_greendots_h50.png",
    alt: alt
  }, props));
};

const PageHeader = props => /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement("h1", {
  className: "border-bottom mt-4 mb-3"
}, props.children)));

export { App, Footer, Logo, PageHeader, App as default };
//# sourceMappingURL=index.esm.js.map
