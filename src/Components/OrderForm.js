import React, { Component } from "react";

class OrderForm extends Component {
  render() {
    return (
      <React.Fragment>
        <form method="POST" action="/something">
          <div>
            <i className="fas fa-address-card" />
            <input
              type="text"
              name="full_name"
              id="full_name"
              placeholder="Full Name"
              className="form-input"
              value={this.props.fullName}
              onChange={this.props.handleFullNameChange}
            />
            <i className="fas fa-pills" />
            <input
              type="text"
              name="medicine_name"
              id="medicine_name"
              placeholder="Medicine Name"
              className="form-input"
              value={this.props.medicineName}
              onChange={this.props.handleMedicineNameChange}
            />
          </div>
          <div>
            <i className="fas fa-at" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="form-input"
              value={this.props.email}
              onChange={this.props.handleEmailChange}
            />
            <i className="fas fa-calendar-check" />
            <select
              name="days_select"
              id="days_select"
              className="form-input"
              label="Days supply of RX"
              value={this.props.daysSupply}
              onChange={this.props.handleDaysSupplyChange}
            >
              <option value="" disabled defaultValue hidden>
                Days supply of RX
              </option>
              <option value="30">30</option>
              <option value="60">60</option>
              <option value="90">90</option>
              <option value="100">100</option>
              <option value="120">120</option>
            </select>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default OrderForm;
