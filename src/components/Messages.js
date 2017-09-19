import React from 'react';
import Message from './Message.js';


class Messages extends React.Component {

  render() {
    return (
      <div className="messages">
        {this.props.emails.map((email, i) => <Message
          makeRead={this.props.makeRead}
          key={i}
          idx={i}
          email={email}
          markStar={this.props.markStar}
          checkItemFun={this.props.checkItemFun}/> )}
      </div>
    );
  }
}

export default Messages;
