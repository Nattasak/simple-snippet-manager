import React, { Component } from 'react';

import './SnippetList.css';

class SnippetList extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(lang, title) {
    // console.log(lang, title);
  }

  render() {
    const { lang, items } = this.props;

    const listItem = items.filter(item => item.lang === lang).map((item, index) => (
      <li key={index}>
        <a onClick={() => this.handleClick(item.lang, item.title)}>{item.title}</a>
      </li>
    ));

    return (
      <aside className="SnippetList menu">
        <ul className="menu-list">{listItem}</ul>
      </aside>
    );
  }
}

export default SnippetList;
