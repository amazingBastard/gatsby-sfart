import React, { Component, PropTypes } from 'react';
import access from 'safe-access';
import include from 'underscore.string/include';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

import 'containers/hero/index.css';

class Hero extends Component {
  render() {
    const { meta, route } = this.props;
    const page = route.page;

    return (
      <section className="markdown hero section">
        <img className="image" src={meta.image} />
        <h2 className="title">
          {meta.title}
          <small className="sub meta date">
            {meta.date}
          </small>
        </h2>
      </section>
    );
  }
}

Hero.propTypes = {
  meta: PropTypes.object,
  route: PropTypes.object
};

export default Hero;
