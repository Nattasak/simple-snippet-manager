import React, { Component, Fragment } from 'react';

import './SnippetForm.css';

class SnippetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snippet: props.snippet,
      items: props.items,
    };

    this.handleLang = this.handleLang.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleCode = this.handleCode.bind(this);
    this.clearCode = this.clearCode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLang(e) {
    const lang = e.target.value;
    this.setState(prevState => ({ snippet: { ...prevState.snippet, lang } }));
  }

  handleTitle(e) {
    const title = e.target.value;
    this.setState(prevState => ({ snippet: { ...prevState.snippet, title } }));
  }

  handleCode(e) {
    const code = e.target.value;
    this.setState(prevState => ({ snippet: { ...prevState.snippet, code } }));
  }

  clearCode() {
    const code = '';
    this.setState(prevState => ({ snippet: { ...prevState.snippet, code } }));
  }

  handleSubmit(e) {
    const snippet = this.state.snippet;
    this.setState(prevState => ({ items: [...prevState.items, snippet] }));
    e.preventDefault();
  }

  render() {
    console.log(this.state.snippet);
    console.log(this.state.items);

    return (
      <Fragment>
        <h1 className="title">{this.props.name}</h1>
        <form className="SnippetForm" onSubmit={this.handleSubmit}>
          <div className="field">
            <div className="control">
              <div className="select">
                <select value={this.state.snippet.lang} onChange={this.handleLang}>
                  <option value="js">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="python">Python</option>
                  <option value="node">Node.js</option>
                  <option value="react">React</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Title"
                value={this.state.snippet.title}
                onChange={this.handleTitle}
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Type your snippet..."
                value={this.state.snippet.code}
                onChange={this.handleCode}
              />
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
            <div className="control">
              <button className="button is-text" onClick={this.clearCode}>
                Clear
              </button>
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}

SnippetForm.defaultProps = {
  snippet: {
    lang: 'js',
    title: '',
    code: '',
  },
};

export default SnippetForm;
