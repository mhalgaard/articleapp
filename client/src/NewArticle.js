import React, { Component } from "react";

class NewArticle extends Component {
	API_URL = process.env.REACT_APP_API_URL;
	
	constructor(props) {
		super(props);
		this.state = {
            title: "",
            author: "",
			desc: "",
            tag: "",
            isPublished: true
		};
	}

	onChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit() {
		console.log("newArticle", this.state.author, this.state.title, this.state.desc, this.state.tag);
		this.props.newArticle(this.state.author, this.state.title, this.state.desc, this.state.tag);
    }

	render() {
		return (
			<div className="contentWrap">
				<div id="newArticle">
					<h1>Create a new article</h1>
                    <label>Author:</label>
					<input
						name="author"
						onChange={event => this.onChange(event)}
						type="text"
					/>
					<label>Title:</label>
					<input
						placeholder="Make the world a better place"
						name="title"
						onChange={event => this.onChange(event)}
						type="text"
					/>
					<label>Description:</label>
					<input
						name="desc"
						onChange={event => this.onChange(event)}
						type="text"
					/>
                    <label>Tag:</label>
					<input
						name="tag"
						onChange={event => this.onChange(event)}
						type="text"
					/>
					
					<button onClick={_ => this.handleSubmit()}>Ask Question</button>
				</div>
			</div>
		);
	}
}

export default NewArticle;