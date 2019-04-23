import React, {Component} from 'react';

export class Article extends Component {
  render() {
    return (
      <div>
        <b>{this.props.title}</b>
        <p>{this.props.body}</p>
        <i>Comments: {this.props.comments}</i>
        <i>Likes: {this.props.likes}</i>
      </div>
    )
  }
}
