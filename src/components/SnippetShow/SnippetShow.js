import React, { Component, Fragment } from 'react';

import './SnippetShow.css';

const SnippetShow = ({ data }) => (
  <Fragment>
    <h1 className="title">{data.lang}</h1>
    <h2 className="subtitle">{data.title}</h2>
    <div className="content">{data.code}</div>
  </Fragment>
);

export default SnippetShow;
