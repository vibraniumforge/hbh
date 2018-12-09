import React from "react";

class Welcome extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div>
          <a href="https://honeybeehealth.com/">
            <h1 id="intro-h1" className="h1">
              Welcome to Honeybee Health
            </h1>
          </a>
          <h3>Sign up for reminder emails!</h3>
        </div>
      </React.Fragment>
    );
  }
}

export default Welcome;
