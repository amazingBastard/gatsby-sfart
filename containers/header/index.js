import React, { Component, PropTypes } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import 'containers/header/index.css';

class Header extends Component {
  render() {
    const { location } = this.props;

    return (
      <header className="header">
        <Headroom disableInlineStyles>
          <Link className="link" to={prefixLink('/')}>
            A
          </Link>
        </Headroom>
      </header>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object,
  route: PropTypes.object
};

export default Header;
