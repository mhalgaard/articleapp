import React, { Component } from "react";
import { Link } from "@reach/router";

class Article extends Component {
	API_URL = process.env.REACT_APP_API_URL;
	
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.id
		}
	}

	render() {
        const article = this.props.getArticle(this.props.id);
		let content = <p>Loading...</p>;
		if (article) {
			content = (
				<div className="contentWrap">
					<h1>{article.title}</h1>
					<h3>Article by: {article.author}</h3>
					<time>Year Created: {article.year}</time>
					<div className="desc">
						<p className="desc_title">Description:</p>
						<p>{article.desc}</p>
					</div>
                    <p>Tag: {article.tag}</p>

					<Link to="/" className="back">Back</Link>
				</div>
			);
		}
		return content;
	}
}

export default Article;
