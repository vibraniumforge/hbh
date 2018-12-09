import React, { Component } from "react";
import Welcome from "./Components/Welcome";
import OrderForm from "./Components/OrderForm";
import Message from "./Components/Message";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      medicineName: "nonsteroidal+anti-inflammatory+drug",
      email: "",
      daysSupply: "",
      drugDescriptions: [],
      supplySendDate: ""
    };
  }

  componentDidMount() {
    fetch(
      "https://api.fda.gov/drug/event.json?search=patient.drug.openfda.pharm_class_epc:" +
        this.state.medicineName +
        "&count=patient.reaction.reactionmeddrapt.exact"
    )
      .then(res => res.json())
      .then(data => {
        const drugDescriptions = data.results
          .map(data => data.term)
          .slice(0, 5);
        this.setState({
          drugDescriptions
        });
      })
      .catch(err => console.log(err));
    this.dateFinder();
  }

  dateFinder() {
    const today = new Date();
    const priorDate = new Date().setDate(
      today.getDate() + (parseInt(this.state.daysSupply, 10) - 5)
    );
    const x = new Date(priorDate);
    const y = x.toLocaleDateString();
    this.setState({ supplySendDate: y });
  }

  handleFullNameChange = e => {
    this.setState({ fullName: e.target.value });
  };

  handleMedicineNameChange = e => {
    this.setState({ medicineName: e.target.value });
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handleDaysSupplyChange = e => {
    this.setState({ daysSupply: e.target.value }, this.dateFinder);
  };

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Welcome />
          <img src={require("./Images/rx_reminder.png")} alt="HoneyBee Logo" />
          <OrderForm
            fullName={this.state.fullName}
            medicineName={this.state.medicineName}
            email={this.state.email}
            daysSupply={this.state.daysSupply}
            handleFullNameChange={this.handleFullNameChange}
            handleMedicineNameChange={this.handleMedicineNameChange}
            handleEmailChange={this.handleEmailChange}
            handleDaysSupplyChange={this.handleDaysSupplyChange}
          />
          <Message
            fullName={this.state.fullName}
            medicineName={this.state.medicineName}
            email={this.state.email}
            daysSupply={this.state.daysSupply}
            drugDescriptions={this.state.drugDescriptions}
            supplySendDate={this.state.supplySendDate}
          />
        </div>
        <div />
      </React.Fragment>
    );
  }
}

export default App;
