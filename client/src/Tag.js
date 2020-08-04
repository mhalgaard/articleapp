import React, { Component } from "react";
import { Link } from "@reach/router";

class Tag extends Component {
	API_URL = process.env.REACT_APP_API_URL;
	
	constructor(props) {
		super(props);
		this.state = {
			tag: this.props.tag
		}
	}

	render() {
        const articlesByTag = this.props.getArticlesByTag(this.props.tag);
		// let articlesByTag = this.props.data;
		const list = articlesByTag.map(a => (
			
			<li key={a.id}>
                <Link to={`/articles/${a.id}`}>{a.title}</Link>
			</li>
		));

		return (
			<div className="contentWrap">
				<h1>Articles tagged: {this.props.tag}</h1>
				<ul className="articles">{list.reverse()}</ul>
			</div>
		);
	}
}

export default Tag;
