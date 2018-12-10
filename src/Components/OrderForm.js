import React, { Component } from "react";

class OrderForm extends Component {
  render() {
    return (
      <React.Fragment>
        <form method="POST" action="/something">
          <section className="container grid-3 center">
            <div>
              <i className="fas fa-address-card icon" />
              <input
                type="text"
                name="full_name"
                id="full_name"
                placeholder="Full Name"
                className="form-input"
                value={this.props.fullName}
                onChange={this.props.handleFullNameChange}
              />
            </div>
            <div>
              <i className="fas fa-pills icon" />
              <input
                type="text"
                name="medicine_name"
                id="medicine_name"
                placeholder="Medicine Name"
                className="form-input"
                value={this.props.medicineName.split("+").join(" ")}
                onChange={this.props.handleMedicineNameChange}
              />
            </div>
            <div>
              <img
                src={require("../Images/rx_reminder.png")}
                alt="HoneyBee Logo"
              />
            </div>
          </section>
          <section className="container grid-3 center">
            <div>
              <i className="fas fa-at icon" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="form-input"
                value={this.props.email}
                onChange={this.props.handleEmailChange}
              />
            </div>
            <div>
              <i className="fas fa-calendar-check icon" />
              <select
                name="days_select"
                id="days_select"
                className="form-input"
                label="Days supply of RX"
                value={this.props.daysSupply ? this.props.daysSupply : 90}
                onChange={this.props.handleDaysSupplyChange}
              >
                <option value="" disabled>
                  Days supply of RX
                </option>
                <option value="30">30</option>
                <option value="60">60</option>
                <option value="90">90</option>
                <option value="100">100</option>
                <option value="120">120</option>
              </select>
            </div>
          </section>
        </form>
      </React.Fragment>
    );
  }
}

export default OrderForm;
