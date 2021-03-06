import React from 'react';
import PropTypes from 'prop-types';

const Header = ( { } ) => {
    return (
      <div>
        <img width="100px" height="40px" src="https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Reddit_logo_and_wordmark.svg/1280px-Reddit_logo_and_wordmark.svg.png"/>
        <h1>TITLE</h1>
      </div>
    );
};

Header.propTypes = {
    name: PropTypes.string,
};


export default Header;
