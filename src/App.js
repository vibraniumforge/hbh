import React, { Component } from "react";
import Welcome from "./Components/Welcome";
import OrderForm from "./Components/OrderForm";
import Message from "./Components/Message";
import HBLogo from "./Images/rx_reminder.png";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Joe Jones",
      medicineName: "Penicilin",
      email: "joe@gmail.com",
      daysSupply: "",
      drugDescriptions: []
    };
  }

  componentDidMount() {
    fetch("https://api.fda.gov/drug/event.json?")
      .then(res => res.json())
      // .then(data => console.log("result=", data.results[0].patient.reaction.map(data=>data.reactionmeddrapt)))
      .then(
        data =>
          this.setState({
            drugDescriptions: data.results[0].patient.reaction.map(
              data => data.reacitonmeddrapt
            )
          }),
        console.log("t.s.dr=", this.state.drugDescriptions)
      )
      .catch(err => console.log(err));
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
    this.setState({ daysSupply: e.target.value });
  };


  render() {
    return (
      <div className="App">
        <Welcome />
        <OrderForm
          fullName={this.state.fullName}
          medicineName={this.state.medicineName}
          email={this.state.email}
          daysSupply={this.state.daysSupply}
        />
        <Message
          fullName={this.state.fullName}
          medicineName={this.state.medicineName}
          email={this.state.email}
          daysSupply={this.state.daysSupply}
          drugDescriptions={this.state.drugDescriptions}
        />
      </div>
    );
  }
}

export default App;
