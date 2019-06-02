import React, { Component } from "react";

class Message extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="bottom">
          <div className="message">
            <p>Hi {this.props.fullName.split(" ")[0]}!</p>
            <p>
              Thanks for signing up for {this.props.medicineName}. We'll send it
              to {this.props.email} on {this.props.supplySendDate}, to give you
              a little notice.
            </p>
          </div>
          <div>
            <button
              type="button"
              id="reminder-btn"
              onClick={this.props.endpointCall}
            >
              Set Reminder
            </button>
          </div>
          <div className="message">
            <p>
              As a service, here are the possible drug reactions you should
              contact your doctor if you're experiencing:
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Message;
