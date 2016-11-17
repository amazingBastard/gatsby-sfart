import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import access from 'safe-access';
import find from 'lodash/find';
import include from 'underscore.string/include';
import { prefixLink } from 'gatsby-helpers';

import 'containers/about/index.css';

class About extends Component {
  render() {
    const { meta, route } = this.props;
    const pages = route.pages;
    const page = route.page;
    const aboutPage = find(pages, {requirePath: "about/index.md"});

    return (
      <section className="about section">
        <article className="markdown article" ref="markdown" dangerouslySetInnerHTML={{__html: aboutPage.data.body}} />
      </section>
    );
  }
}

About.propTypes = {
  meta: PropTypes.object,
  route: PropTypes.object
};

export default About;
