import React, { Component } from "react";
import { Link } from "@reach/router";

class Articles extends Component {
	render() {
		let articles = this.props.data;
		const list = articles.map(a => (
			
			<li key={a.id}>
                <Link to={`/articles/${a.id}`}>{a.title}</Link>
			</li>
        ));
		return (
			<div className="contentWrap">
				<h1>Articles</h1>
				<ul className="articles">{list.reverse()}</ul>
			</div>
		);
	}
}

export default Articles;
