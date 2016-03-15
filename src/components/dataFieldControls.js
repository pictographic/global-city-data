import React from 'react';
import _ from 'lodash';



var LinkItem = React.createClass({
  onClick(evt){
    evt.preventDefault();
    this.props.onSelectChanged(this.props.id);
  },


  render(){
      return (
          <a href={'#' + this.props.id } ref="clickItem" onClick={this.onClick} className={ (this.props.id === this.props.selected)? 'selected': '' }> {this.props.id.replace(/_/g,' ')} </a>
      );
  }
});

var uiControls = React.createClass({
  onChange(evt){
    this.props.onSelectChanged(this.refs.selectStatInput.value, this.refs.selectStatInput.id);
  },

  render(){
    return <div className="stat-selector">
      <div ref="selectStatInput" id={this.props.id}>
      {
      _.map(this.props.dataFields, (i)=>{
        return <LinkItem id={i} key={i} onSelectChanged={this.props.onSelectChanged}  selected={this.props.selected}/>
      })
    }
    </div>
    </div>
  }

});

export default uiControls;
