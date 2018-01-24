import React, { Component } from 'react';
import Select from 'react-select';

import SnippetList from '../SnippetList/SnippetList';

import 'react-select/dist/react-select.css';
import './Sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleData = this.handleData.bind(this);
  }

  handleChange(selectedOption) {
    this.setState({ selectedOption });
  }

  handleData(dataFromChild) {
    // console.log(dataFromChild, '22222222');
    this.props.data(dataFromChild);
  }

  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <div className="Sidebar column is-one-fifth">
        <Select
          name="form-field-name"
          value={value}
          onChange={this.handleChange}
          options={[
            { value: 'js', label: 'JavaScript' },
            { value: 'react', label: 'React' },
            { value: 'node', label: 'Node.js' },
            { value: 'php', label: 'PHP' },
          ]}
        />
        {this.state.selectedOption && (
          <SnippetList lang={this.state.selectedOption.value} items={this.props.snippet} data={this.handleData} />
        )}
      </div>
    );
  }
}

export default Sidebar;
