import React, { Component } from 'react';

const Preview = ({markdown}) => {
  return(
    <div id="preview" dangerouslySetInnerHTML={markdown()}>
    </div>
  )
}

export default Preview;
