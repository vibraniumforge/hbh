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
    this.dateFinder();
  }

  endpointCall = () => {
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

  dateFinder = () => {
    const today = new Date();
    const priorDate = new Date().setDate(
      today.getDate() +
        parseInt(this.state.daysSupply ? this.state.daysSupply : 90),
      10 - 5
    );
    const x = new Date(priorDate).toLocaleDateString();
    this.setState({ supplySendDate: x });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleDaysSupplyChange = e => {
    this.setState({ daysSupply: e.target.value }, this.dateFinder);
  };

  render() {
    const reactions = this.state.drugDescriptions.map((reaction, index) => (
      <ol className="drug-reactions ol">
        <span>
          <li key={index}>
            <i className="fas fa-allergies" /> {reaction}
          </li>
        </span>
      </ol>
    ));
    return (
      <React.Fragment>
        <div className="App">
          <Welcome />
          <OrderForm
            fullName={this.state.fullName}
            medicineName={this.state.medicineName}
            email={this.state.email}
            daysSupply={this.state.daysSupply}
            handleDaysSupplyChange={this.handleDaysSupplyChange}
            handleChange={this.handleChange}
          />
          <Message
            fullName={this.state.fullName}
            medicineName={this.state.medicineName}
            email={this.state.email}
            daysSupply={this.state.daysSupply}
            supplySendDate={this.state.supplySendDate}
            endpointCall={this.endpointCall}
          />
          {reactions}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
