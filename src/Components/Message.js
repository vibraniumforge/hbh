import React from "react";

class Message extends React.PureComponent {
  render() {
    const reactions = this.props.drugDescriptions.map((reaction, index) => (
      <ol className="ol" key={index}>
        <li key={index}>{reaction}</li>
      </ol>
    ));

    return (
      <React.Fragment>
        <div>
          <p>Hi {this.props.fullName}!</p>
          <p>
            Thanks for signing up for{this.props.medicineName}. We'll send it to
            {" "}{this.props.email}{" "}
            on
            {Date.now() + this.props.daysSupply - 5}, to give you a little
            notice.
          </p>
          <button type="button" id="reminder-btn">
            Set Reminder
          </button>
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
