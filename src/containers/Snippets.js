import React, { Component } from 'react';

import Layout from '../components/Layout/Layout';
import Main from '../components/Main/Main';
import Sidebar from '../components/Sidebar/Sidebar';

class Snippets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          lang: 'php',
          title: 'PHP concat string',
          code: '<?php concat string php ?>',
        },
        {
          lang: 'js',
          title: 'JavaScript Array Unique',
          code: 'uniqe array js',
        },
        {
          lang: 'react',
          title: 'React Title',
          code: 'React Code',
        },
        {
          lang: 'react',
          title: 'State and Props',
          code: `
            this.state = { value: '' }
            {this.props.name}
          `,
        },
      ],
      data: {},
    };

    this.handleData = this.handleData.bind(this);
  }

  handleData(data) {
    // console.log(data, '333333333');
    this.setState({ data });
  }

  render() {
    // console.log(this.state.data, '4444444444');

    return (
      <Layout>
        <Sidebar snippet={this.state.items} data={this.handleData} />
        <Main snippet={this.state.items} data={this.state.data} />
      </Layout>
    );
  }
}

export default Snippets;
