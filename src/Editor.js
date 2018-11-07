import React from 'react';

const Editor = ({onChange, text}) => {
  return(
    <div>
      <textarea id="editor" rows="20" cols="80" onChange={onChange} value={text}></textarea>
    </div>
  )
}

export default Editor;
