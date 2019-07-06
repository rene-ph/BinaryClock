import React, {Component} from 'react';

import './Minutes.css';
import Dot from '../Dot/Dot';
import EmptyDot from '../EmptyDot/EmptyDot';
import Util from '../../../Utils/Util';

class Minutes extends Component  {

  static binaryNumbers = {};

  render() {
     this.binaryNumbers = Util.convertToBinaryColumns(this.props.digit);
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