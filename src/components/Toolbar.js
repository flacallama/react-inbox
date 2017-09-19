import React from 'react'

class Toolbar extends React.Component {
  render() {
    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{this.props.unread()}</span>
            unread messages
          </p>

          <button disabled={this.props.disabled()} className="btn btn-default" >
            <i className={this.props.statefulCheckedCount == 0 ? "fa fa-square-o" : (this.props.statefulCheckedCount == this.props.emails.length) ? "fa fa-check-square-o" : "fa fa-minus-square-o"}
           onClick={this.props.assignCheckSymbol}></i>
          </button>

          <button disabled={this.props.disabled()} className="btn btn-default" onClick={this.props.markRead}>
            Mark As Read
          </button>

          <button disabled={this.props.disabled()} className="btn btn-default" onClick={this.props.markUnread}>
            Mark As Unread

          </button>

          <select className="form-control label-select">
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select">
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button onClick={this.props.delete}  className="btn btn-default">
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Toolbar;
