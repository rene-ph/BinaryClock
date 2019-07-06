import React, {Component} from 'react';
import Hours from './Hours/Hours';
import Minutes from './Minutes/Minutes';
import Seconds from './Seconds/Seconds';
import './Clock.css';

class Clock extends Component  {

  constructor(props) {
    super(props);
    this.state = { hours: 0, minutes: 0, seconds: 0}
  }

  componentDidMount =() => {
    setInterval( ()=> {
      var today = new Date();
      this.setState({
        hours: today.getHours(),
        minutes: today.getMinutes(),
        seconds: today.getSeconds() 
      });
      
    }, 1000);
  } 


  render() {
    return (
        <div className="Clock">
          <Hours digit={this.state.hours}/>
          <Minutes digit={this.state.minutes}/>
          <Seconds digit={this.state.seconds}/>
        </div>
    );
  }
}

export default Clock;