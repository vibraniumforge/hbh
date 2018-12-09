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
        <div className="message">
          <p>Hi {this.props.fullName.split(" ")[0]}!</p>
          <p>
            Thanks for signing up for {this.props.medicineName}. We'll send it
            to {this.props.email} on {this.props.supplySendDate}, to give you a
            little notice.
          </p>
        </div>
        <div>
          <button disabled type="button" id="reminder-btn">
            Set Reminder
          </button>
        </div>
        <div className="message">
          <p>
            As a service, here are the possible drug reactions you should
            contact your doctor if you're experiencing:
          </p>
          <i className="fas fa-allergies" />
          <select
            name="drug_reactions"
            id="drug_reactions"
            className="form-input"
            label="Drug Reactions"

            // value={this.props.drugDescriptions}
            // onChange={this.props.handleDaysSupplyChange}
          >
            {reactions}
          </select>
        </div>
      </React.Fragment>
    );
  }
}

export default Message;
