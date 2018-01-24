import React, { Component } from 'react';

import SnippetButton from '../SnippetButton/SnippetButton';
import SnippetForm from '../SnippetForm/SnippetForm';
import SnippetShow from '../SnippetShow/SnippetShow';

import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addSnippet: false,
      editSnippet: false,
      items: props.snippet,
    };
  }

  render() {
    let addEditForm = null;

    if (this.state.addSnippet) {
      addEditForm = <SnippetForm name="Add Snippet" items={this.state.items} />;
    } else {
      addEditForm = <SnippetForm name="Edit Snippet" items={this.state.items} />;
    }

    return (
      <div className="Main column">
        <SnippetButton
          name="Add"
          state={this.state.addSnippet}
          setstate={addSnippet => this.setState({ addSnippet })}
        />
        <SnippetButton
          name="Edit"
          state={this.state.editSnippet}
          setstate={editSnippet => this.setState({ editSnippet })}
        />
        {this.state.addSnippet || this.state.editSnippet ? addEditForm : <SnippetShow />}
      </div>
    );
  }
}

export default Main;
