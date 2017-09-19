import React from 'react'

const Message = ({idx, email, checkItemFun, makeRead, markStar}) => {

    return (
      <div id={idx} onClick={(e) => makeRead(idx, e)} className= {email.selected ? 'row message selected' : email.read ? "row message read" : "row message"} >
        <div >
          <div className="col-xs-1">
            <div className="row">
              <div className="col-xs-2">
                <input type="checkbox" onChange={(e) => checkItemFun(idx, e) } />
              </div>
              <div className="col-xs-2">
                <i className={email.starred ? "star fa fa-star" : "star fa fa-star-o"} onClick={(e) => markStar(idx, e)}></i>
              </div>
            </div>
          </div>
          <div className="col-xs-11">
            {email.labels.map((label, i) =>
                <span key={i} className="label label-warning">{label}</span>)}
            <a href="#">
              {email.subject}
            </a>
          </div>
        </div>
      </div>

    )
  }


export default Message;
