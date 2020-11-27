import React from 'react';


const Logo = ({ alt = "JASMIN Logo", ...props }) => (
    <img
        src="https://artefacts.ceda.ac.uk/themes/orgtheme_jasmin/0.4c01/_assets/img/jasmin_logo_white_greendots_h50.png"
        alt={alt}
        {...props}
    />
);

export default Logo;
