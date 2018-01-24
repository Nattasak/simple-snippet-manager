import React, { Component } from 'react';

import './ListSnippet.css';

class ListSnippet extends Component {
  render() {
    const { lang } = this.props;

    const items = [
      {
        lang: 'php',
        title: 'PHP Title',
        code: 'PHP Code',
      },
      {
        lang: 'js',
        title: 'JavaScript Title',
        code: 'JavaScript Code',
      },
      {
        lang: 'react',
        title: 'React Title',
        code: 'React Code',
      },
    ];

    const listItem = items
      .filter(item => item.lang === lang)
      .map((item, index) => <li key={index}><a>{item.title}</a></li>);

    return (
      <aside className="ListSnippet menu">
        <ul className="menu-list">{listItem}</ul>
      </aside>
    );
  }
}

export default ListSnippet;
