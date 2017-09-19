import React, { Component } from 'react';
import Toolbar from './components/Toolbar.js'
import Messages from './components/Messages.js'
import './App.css';

class App extends Component {

  state = {
    emails: [
      {
        "id": 1,
        "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
        "selected": false,
        "read": false,
        "starred": true,
        "labels": ["dev", "personal"]
      },
      {
        "id": 2,
        "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
        "selected": false,
        "read": false,
        "starred": false,
        "labels": []
      },
      {
        "id": 3,
        "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
        "selected": false,
        "read": false,
        "starred": true,
        "labels": ["dev"]
      },
      {
        "id": 4,
        "subject": "We need to program the primary TCP hard drive!",
        "selected": false,
        "read": true,
        "starred": false,
        "labels": []
      },
      {
        "id": 5,
        "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
        "selected": false,
        "read": false,
        "starred": false,
        "labels": ["personal"]
      },
      {
        "id": 6,
        "subject": "We need to back up the wireless GB driver!",
        "selected": false,
        "read": true,
        "starred": true,
        "labels": []
      },
      {
        "id": 7,
        "subject": "We need to index the mobile PCI bus!",
        "selected": false,
        "read": true,
        "starred": false,
        "labels": ["dev", "personal"]
      },
      {
        "id": 8,
        "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
        "selected": false,
        "read": true,
        "starred": true,
        "labels": []
      }
    ],

    statefulCheckedCount: 0
  }


  assignCheckSymbol = () => {
    if(this.state.statefulCheckedCount === this.state.emails.length) {
      let emails = this.state.emails;
      for(let i = 0; i < emails.length; i++){
        emails[i].selected = false;
      }
      this.setState({emails: emails})
      let count = this.state.statefulCheckedCount
      count = 0;
      this.setState({statefulCheckedCount: count})
    }
    if(this.state.statefulCheckedCount < this.state.emails.length) {
      let emails = this.state.emails;
      for(let i = 0; i < emails.length; i++){
        emails[i].selected = true;
      }
      this.setState({emails: emails})
      let count = this.state.statefulCheckedCount;
      count = emails.length;
      this.setState({statefulCheckedCount: count})
    }
  }


// makes grey single
  makeRead = (idx, e) => {
    let emails = this.state.emails;
    emails[idx].read = true;
    this.setState({emails: emails})
  }

//toggles star
  markStar = (idx, e) => {
    let emails = this.state.emails;
    if (emails[idx].starred === true){
      emails[idx].starred = false;
      this.setState({emails: emails})
      e.stopPropagation();
    }else {
      emails[idx].starred = true;
      this.setState({emails: emails})
      e.stopPropagation();
    }
  }


  markUnread = () => {
    let emails = this.state.emails;
    for(let i=0; i < emails.length; i++){
      if (emails[i].selected == true){
        emails[i].read = false;
        emails[i].selected = false;
        }
      }
    this.setState({emails: emails})
  }





  markRead = () => {
    let emails = this.state.emails;
    for(let i=0; i < emails.length; i++){
      if (emails[i].selected == true){
        emails[i].read = true;
        emails[i].selected = false;
      }
    }
    this.setState({emails: emails})
  }

// counter for unread emails
  unread = () => {
    let emails = this.state.emails;
    let result = emails.reduce((acc, email) => {
      if (email.read === false){
        acc++;
      }
      return acc
    }, 0)
    return result

  }

// disables menu buttons when no emails selected
  disabled = () => {
    let emails = this.state.emails
    let result = emails.reduce((acc, email) =>{
      if(email.selected === true){
        acc ++;
      }
      return acc;
    }, 0)
    if(result > 0) {
      return true;
    } else {
      return false;
    }

  }

  delete = () => {
    console.log('entered delete handler')
    let emails = this.state.emails;
    let toSave = [];
    for(let i=0; i < emails.length; i++){
      if (emails[i].selected == false){
        toSave = toSave.concat(emails[i])
      }
    }
  this.setState({emails: toSave})
  }

  apply = () => {
    console.log('entered apply handler')
    let emails = this.state.emails;
    let toApply = [];
    for(let i=0; i < emails.length; i++){
      if (emails[i].selected == false){
        toApply = toApply.concat(emails[i])
      }
    }
  this.setState({emails: toApply})
  }


  checkItemFun = (idx, e) => {
    let emails = this.state.emails;
    emails[idx].selected = e.target.checked;
    if (emails[idx].selected === true) {
      this.state.statefulCheckedCount ++;
    } else {
      this.state.statefulCheckedCount --;
    }
    this.setState({emails: emails});
    e.stopPropagation();
  }



  render() {
    return (
      <div className="App">
        app
        <Toolbar
          markUnread={this.markUnread}
          markRead={this.markRead}
          assignCheckSymbol={this.assignCheckSymbol}
          statefulCheckedCount={this.state.statefulCheckedCount}
          emails={this.state.emails}
          delete={this.delete}
          unread={this.unread}
          disabled={this.disabled}/>

        <Messages
          markStar={this.markStar}
          makeRead={this.makeRead}
          checkItemFun= {this.checkItemFun}
          emails={this.state.emails}/>
      </div>
    );
  }
}

export default App;
