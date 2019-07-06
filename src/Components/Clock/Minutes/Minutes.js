import React, {Component} from 'react';
import './Minutes.css';
import Dot from '../Dot/Dot';
import EmptyDot from '../EmptyDot/EmptyDot';

class Minutes extends Component  {
  
  constructor(props) {
    super(props);
    this.binaryNumbers = {
      firstCol: 0,
      secondCol: 0
    }
  }

  convertToBinary(dec) {
    var bits = [];
    var dividend = dec;
    var remainder = 0;
    while (dividend >= 2) {
        remainder = dividend % 2;
        bits.push(remainder);
        dividend = (dividend - remainder) / 2;
    }
    bits.push(dividend);
    return bits.join("");
  }

  transformDigits = (digit) => {
    let digits = [...digit.toString()];
    let firstDigit; 
    let secondDigit;
    let binaryFirstColumn;
    let binarySecondColumn;
    if(digits[1] === undefined && digits[0] !== "0") {
      firstDigit = 0;
      secondDigit = digits[0];
    }else if(digits[0] === "0" ) {
      firstDigit = "6";
      secondDigit = "0";
    }
    else {
      firstDigit = digits[0];
      secondDigit = digits[1];
    }
    binaryFirstColumn = this.convertToBinary(parseInt(firstDigit));
    binarySecondColumn = this.convertToBinary(parseInt(secondDigit));
    this.binaryNumbers = { firstCol: [...binaryFirstColumn], secondCol: [...binarySecondColumn]};
  }

  render() {
    this.transformDigits(this.props.digit);
    return (
        <div className="Minutes">
            <div className="Column">
                <EmptyDot/>
                <Dot isActive={this.binaryNumbers.firstCol[2] === undefined ? "0" : this.binaryNumbers.firstCol[2]}/>
                <Dot isActive={this.binaryNumbers.firstCol[1] === undefined ? "0" : this.binaryNumbers.firstCol[1]}/>
                <Dot isActive={this.binaryNumbers.firstCol[0] === undefined ? "0" : this.binaryNumbers.firstCol[0]}/>
            </div>
            <div className="Column">
                <Dot isActive={this.binaryNumbers.secondCol[3] === undefined ? "0" : this.binaryNumbers.secondCol[3]}/>
                <Dot isActive={this.binaryNumbers.secondCol[2] === undefined ? "0" : this.binaryNumbers.secondCol[2]}/>
                <Dot isActive={this.binaryNumbers.secondCol[1] === undefined ? "0" : this.binaryNumbers.secondCol[1]}/>
                <Dot isActive={this.binaryNumbers.secondCol[0] === undefined ? "0" : this.binaryNumbers.secondCol[0]}/>
            </div>
        </div>
    );
  }
}

export default Minutes;