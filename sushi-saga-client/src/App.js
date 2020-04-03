import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

state = {
  sushis: []
}

componentDidMount() {
  fetch(API)
    .then(response => {
      return response.json()
    })
    .then((data) => {
      this.setState({sushis: data, customerMoney: 100})
    })
  }

  moreSushi = () => {
    this.setState(previousState => {
      let sushi = previousState.sushis.shift();
      previousState.sushis.push(sushi)
      return {sushis: previousState.sushis};
    })
  }

  eatSushi = (sushiId) => {
      this.setState(previousState => {
        const newSushis = previousState.sushis.map(element => {
          if (element.id == sushiId) {
            if (element.img_url) {
              if (previousState.customerMoney >= element.price) {
                element.img_url = null;
                previousState.customerMoney -= element.price
              } else {alert ("TAKE YOUR HANDS OFF THAT YOU POOR MOFO")}
            } else {alert ("YOU CANNOT EAT NON-EXISTENT SUSHI")}
        } else {return element}
      })
      return {sushi: newSushis, customerMoney: previousState.customerMoney}
      // return true
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} onMoreSushi={this.moreSushi} onEatSushi = {this.eatSushi}/>
        <Table sushis = {this.state.sushis} customerMoney = {this.state.customerMoney} />
      </div>
    );
  }

}

export default App;