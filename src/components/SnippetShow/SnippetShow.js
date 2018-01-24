import React, { Component, Fragment } from 'react';

import './SnippetShow.css';

// const SnippetShow = ({ data }) => (
//   <Fragment>
//     <h1 className="title">{data.lang}</h1>
//     <h2 className="subtitle">{data.title}</h2>
//     <div className="content">{data.code}</div>
//   </Fragment>
// );

class SnippetShow extends Component {
  render() {
    const { data } = this.props;

    // console.log(this.props.data);

    return (
      <Fragment>
        <h1 className="title">{data.lang}</h1>
        <h2 className="subtitle">{data.title}</h2>
        <div className="content">{data.code}</div>
      </Fragment>
    );
  }
}

SnippetShow.defaultProps = {
  data: {
    lang: 'JavaScript',
    title: 'Array Concat',
    code: '[1, 2, 3, 4]',
  },
};

export default SnippetShow;
