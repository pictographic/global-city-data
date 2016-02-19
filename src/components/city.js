
import React from "react";

let City = React.createClass({
  render() {
    var v = this.props.val;
    if(!this.props.city[this.props.dataKey]){
      v = 0;
    }
    return <div className="city-item" >
      <h3>{this.props.city.City}</h3>
      <div className="circle data1" style={{top:(100-v)/2+'%',left:(100-v)/2+'%',  width:v+'%', height:v+'%'}}></div>
      <h4 className="data1">{this.props.city[this.props.dataKey]}</h4>
    </div>
  }
});



export default City;
