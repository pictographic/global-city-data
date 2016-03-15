
import React from "react";

let City = React.createClass({
  render() {
    var v = this.props.val;
    if(!this.props.city[this.props.dataKey]){
      v = 0;
    }
    return <div className="city-item" >
      <div className="headings">
      <h3>{this.props.city.City}</h3>
      <h4 className="data1">{this.props.city[this.props.dataKey]}</h4>
      </div>
      <div className="circleContainer">
      <div className="circle data1" style={{top:(100-v)/2+'%',left:(100-v)/2+'%',  width:v+'%', height:v+'%'}}></div>
      </div>
    </div>
  }
});



export default City;
