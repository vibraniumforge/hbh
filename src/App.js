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
      medicineName: "",
      email: "",
      daysSupply: 90,
      drugDescriptions: [],
      supplySendDate: ""
    };
  }

  componentDidMount() {
    if (this.state.medicineName) {
      this.endpointCall();
    }
  }

  endpointCall = () => {
    console.log("epC fires");
    fetch(
      "https://api.fda.gov/drug/event.json?search=patient.drug.medicinalproduct.exact:" +
        this.state.medicineName.toUpperCase()
    )
      .then(res => res.json())
      .then(data => {
        const drugDescriptions = data.results[0].patient.reaction
          .map(data => data.reactionmeddrapt)
          .slice(0, 5);
        this.setState({
          drugDescriptions
        });
      })
      .catch(err => console.log(err));
  };
  // fetch(
  //   "https://api.fda.gov/drug/event.json?search=patient.drug.openfda.pharm_class_epc:" +
  //     this.state.medicineName +
  //     "&count=patient.reaction.reactionmeddrapt.exact"
  // .then(res => res.json())
  // .then(data => {
  //   const drugDescriptions = data.results
  //     .map(data => data.term)
  //     .slice(0, 5);
  //   this.setState({
  //     drugDescriptions
  //   });
  // })
  // .catch(err => console.log(err));

  dateFinder() {
    const today = new Date();
    const priorDate = new Date().setDate(
      today.getDate() + (parseInt(this.state.daysSupply, 10) - 5)
    );
    const x = new Date(priorDate).toLocaleDateString();

    this.setState({ supplySendDate: x });
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
            endpointCall={this.endpointCall}
          />
        </div>
        <div />
      </React.Fragment>
    );
  }
}

export default App;
