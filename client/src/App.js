import React, { Component } from "react";
import { Router, Link } from "@reach/router";

import Articles from "./Articles";
import Article from "./Article";
import NewArticle from "./NewArticle";
import Tag from "./Tag";


import './style.css';

class App extends Component {
	API_URL = process.env.REACT_APP_API_URL;

	constructor(props) {
		super(props);
		this.state = {
      articles: [],
      articlesByTag: [],
      search: "",
      searchedArticles: []
		};
	}

	componentDidMount() {
		// Get everything from the API
    this.getArticles().then(() => console.log("published articles gotten!"));
	}

	async getArticles() {
    // URL of the API.
		let url = `${this.API_URL}/Articles`;
    // Get the data
    const res = await fetch(url);
    // Turn it into json
    let json = await res.json();

		return this.setState({
			articles: json
		})
  }
  
  getArticlesByTag(tag) {
    // URL of the API.
    return this.state.articles.filter(t => t.tag === tag)
  }
	
	getArticle(id) {
    // Find the article by id
		return this.state.articles.find((a) => a.id == id);
  }

  onChange(event) {
    this.setState({
			[event.target.name]: event.target.value
		});
  }

  search() {
    window.location.replace("/search/" + this.state.search);
  }

	render() {
		return (
			<>
				<div id="wrapper">
					<h1>Article App</h1>
					<nav id="mainmenu">
						<ul>
              <Link id="home" to="/">
                <li>Overview</li>
              </Link>
							<Link className="link" to="/suggestions/new">
								<li>New Article</li>
							</Link>
						</ul>
					</nav>
				</div>
          <input name="search" type="text" placeholder="search"
            onChange={event => this.onChange(event)}
          />
          <button onClick={_ => this.search()}>Search</button>
				<Router>
					<NewArticle
						path="/articles/new"
						newSuggestion={(author, title, desc, tag) => this.newArticle(author, title, desc, tag)}
					/>
					<Article
						path="/articles/:id"
						getArticle={(id) => this.getArticle(id)}
					/>
          <Articles 
						path="/" 
            data={this.state.articles}
					/>
          <Tag 
            path="/search/:tag"
            getArticlesByTag={(tag) => this.getArticlesByTag(tag)}
          />
				</Router>
			</>
		);
	}
}

export default App;