import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import { prefixLink } from 'gatsby-helpers';

class Project extends Component {
	render () {
		const { meta } = this.props;

		return (
			<li className="project item">
				<Link className="project link" to={prefixLink(meta.path)}>
					<img className="image" src={meta.data.image} />
					<p className="title">
						{meta.data.title}
						<small className="sub meta date">
							{moment(meta.data.date).calendar()}
						</small>
					</p>
				</Link>
			</li>
		);
	}
}

Project.propTypes = {
	meta: PropTypes.object
}

export default Project;
