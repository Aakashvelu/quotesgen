import React from 'react';
import axios from 'axios';
// import './index.css';
import "./App.css";
import image from "./images/ing.jpg"

class App extends React.Component {
  state = {
    advice: '',
  }

  componentAdvice() { 
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
      {/* <p style="background-image: url('ing.jpg');"></p> */}
     
      <div className="bod">
      <h1 className='quote'>Quote Generator</h1>
          <div className=''>
            <div className=''>
              <h1 className="h1">{this.state.advice}</h1>
            </div>
          </div>
          <div className='but'>
          <button className="button" onClick={this.fetchAdvice}>Next Quote
          </button>
      </div>
      
      </div>
      
      
      </>
    );
  }
}

export default App;