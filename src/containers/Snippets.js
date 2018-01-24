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
          title: 'PHP Title55555',
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
        }
      ],
    };
  }

  render() {
    return (
      <Layout>
        <Sidebar snippet={this.state.items} />
        <Main snippet={this.state.items} />
      </Layout>
    );
  }
}

export default Snippets;
