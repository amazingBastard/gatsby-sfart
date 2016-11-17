import React, { Component, PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers';
import $ from 'jquery';
import access from 'safe-access';
import sortBy from 'lodash/sortBy';
import include from 'underscore.string/include';
import Project from 'components/project';

import 'containers/work/index.css';

class Work extends Component {
  renderProjects() {
    const { route } = this.props;
    const api = 'https://www.reddit.com/r/sfart/search.json?restrict_sr=on&t=all';
    const arts = $.getJSON(api, function(data) {
      //data is the JSON string
      console.log(data);
    });

    console.log(arts);

		return (
      <ul className="projects flex list">
        <li>art goes here.</li>
      </ul>
    );
  }

	render() {
		return (
      <section className="work section">
        <figure className="figure container">
          {this.renderProjects()}
        </figure>
      </section>
    );
	}
}

Work.propTypes = {
	meta: PropTypes.object,
  route: PropTypes.object
};

export default Work;
