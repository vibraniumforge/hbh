import React, { Component } from "react";

class Message extends Component {
  render() {
    const reactions = this.props.drugDescriptions.map((reaction, index) => (
      //   <ol className="ol" key={index}>
      //     <li key={index}>*{reaction}</li>
      //   </ol>
      <option key={index}>{reaction}</option>
    ));

    return (
      <React.Fragment>
        <div id="bottom">
          <div className="message">
            <p>Hi {this.props.fullName.split(" ")[0]}!</p>
            <p>
              Thanks for signing up for {this.props.medicineName}. We'll send it
              to {this.props.email ? this.props.email : ""} on{" "}
              {this.props.supplySendDate ? this.props.supplySendDate : ""}, to
              give you a little notice.
            </p>
          </div>
          <div>
            <button
              type="button"
              id="reminder-btn"
              // href="window.open('http://honeybeehealth.com','_blank')"
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
            <div>
              {" "}
              <i className="fas fa-allergies" />
              {reactions}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Message;
