import React, { Component } from 'react';
import Editor from './Editor';
import Preview from './Preview';
import marked from 'marked';
import './Markdown.css'

class Markdown extends Component{
  constructor(props){
    super(props);
    let mark ="# You can make headers\n"+
    "## You can make sub headers as well!\n"+
    "\n"+
    "Want to see more stuff made by me? Check out my [website](https://jonnyvtran.herokuapp.com)\n"+
    "\n"+
    "```\n"+
    "\n"+
    "Want to see a code block?\n" +
    "cool huh?\n"+
    "\n"+
    "```\n"+
    "\n"+
    "- there's lots of reasons\n"+
    "  - on why this is so fun!\n"+
    "\n"+
    "> Don't forget images!\n"+
    "![squidward](https://mbtskoudsalg.com/images/squidward-dab-png-8.png)\n"+
    "\n"+
    "**Give it a try!**\n"
    this.state={
      text:mark
    }

    this.onChange = this.onChange.bind(this);
    this.getMarkDownText = this.getMarkDownText.bind(this);
  }

  onChange(e){
    this.setState({
      text:e.target.value
    })
  }

  getMarkDownText(){
    let rawMarkup = marked(this.state.text, {sanitize:true});
    return { __html: rawMarkup };
  }

  render(){
    return(
      <div>
        <h1 className="title">Markdown Previewer</h1>
        <Editor text={this.state.text} onChange={this.onChange} />
        <Preview markdown={this.getMarkDownText} />
      </div>
    )
  }
}

export default Markdown;
