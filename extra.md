  componentDidMount() {
    fetch("https://api.fda.gov/drug/event.json?")
      .then(res => res.json())
      // .then(data =>
      //   console.log(
      //     "result=",
      //     data.results[0].patient.reaction.map(data => data.reactionmeddrapt)
      //   )
      // )
      .then(data =>
        this.setState({
          drugDescriptions: data.results[0].patient.reaction.map(
            data => data.reactionmeddrapt
          )
        })
      )
      .catch(err => console.log(err));
    this.dateFinder();
  }

  drugDescriptions: data.results.map(data => data.term).slice(0, 5);