import React, { Component } from 'react';

export class Home extends Component {
  displayName = Home.name

  constructor(props) {
    super(props);
    this.state = {luvut: []};
  }

  componentWillMount() {

  let that = this;
  console.log("Aloitetaan datan haku.");
  fetch('/api/customer/luvut')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
    // console.log("Lukumäärä: " + myJson.length);
    that.setState({ luvut: myJson});
    // console.log("Tila asetettu.");
  });

  }



  render() {

    console.log("Render-metodisssa.");

    return (
      <div>
        <h1>Jannen Oma Web-Demo!</h1>
        <p>Tervetuloa!</p>
        <div className="alert alert-success" role="alert">
          A simple success alert—check it out!
        </div>
        <p>{this.state.luvut}</p>
      </div>
    );
  }
}