import React from 'react';

import './SnippetButton.css';

const SnippetButton = ({ name, state, setstate }) => {
  let btnStyle;
  if (name === 'Add') {
    btnStyle = 'is-link';
  } else {
    btnStyle = 'is-warning';
  }

  return (
    <a className={`SnippetButton button ${btnStyle}`} onClick={() => setstate(!state)}>
      {state ? 'Cancel' : name}
    </a>
  );
};

export default SnippetButton;
