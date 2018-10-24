import React, { Component } from 'react';
 
export class Home extends Component {
    displayName = Home.name
 
    constructor(props) {
        super(props);
        this.state = { customers: [] };
    }
 
    componentWillMount() {
 
        let reactKomponentti = this;
 
        console.log("Aloitetaan fetch-kutsu");
        fetch('/api/Customer')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(JSON.stringify(myJson));
 
                reactKomponentti.setState({ customers: myJson });
            });
 
    }
 
    render() {
 
        console.log("Render()-metodissa.");
 
        const asiakkaat = this.state.customers.map((c) =>
            <tr>
                <td style={{color: "red"}}>{c.companyName}</td>
                <td>{c.city}</td>
            </tr>
        );
 
        return (
            <div>
                <h1>Jannen oma web-sovellus – åäÖ</h1>
                <p>Listaus asiakkaista:</p>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>City</th>
                        </tr>
                        </thead>
                    <tbody>
                        {asiakkaat}
                    </tbody>
                </table>
            </div>
        );
    }
}