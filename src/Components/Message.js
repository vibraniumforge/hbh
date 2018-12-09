import React from "react";

class Message extends React.PureComponent {
  render() {
    const reactions = this.props.drugDescriptions.map((reaction, index) => (
      <ol className="ol" key={index}>
        <li key={index}>*{reaction}</li>
      </ol>
    ));

    return (
      <React.Fragment>
        <div className="message">
          <p>Hi {this.props.fullName.split(" ")[0]}!</p>
          <p>
            Thanks for signing up for{this.props.medicineName}. We'll send it to{" "}
            {this.props.email} on {this.props.supplySendDate}, to give you a
            little notice.
          </p>
        </div>
        <div>
          <button type="button" id="reminder-btn">
            Set Reminder
          </button>
        </div>
        <div className="message">
          <p>
            As a service, here are the possible drug reactions you should
            contact your doctor if you're experiencing:
          </p>
          <span>{reactions}</span>
        </div>
      </React.Fragment>
    );
  }
}

export default Message;
