import dataLoaded from './data/cities.json';
import React from 'react';
import reactDOM from 'react-dom';
import _ from 'lodash';
import d3Scale from 'd3-scale';


import City from './components/city';
import DataSelector from './components/dataFieldControls';

var d = document.getElementById('canvas');
var dataFiltered = [];
var keyIndex = 1;
var keyFields = Object.keys(dataLoaded[0]);
var dataFields = [
  'City_Area_km2',
  'Metro_Area_km2',
  'City_Population_millions',
  'Metro_Population_millions',
  'Foreign_Born',
  'Annual_Population_Growth',
  'GDP_Per_Capita_thousands_PPP_rates_per_resident',
  'Share_of_Global_500_Companies',
  'Unemployment_Rate',
  'Poverty_Rate',
  'Mass_Transit_Commuters',
  'Major_Airports',
  'Major_Ports',
  'Students_Enrolled_in_Higher_Education',
  'Percent_of_Population_with_Higher_Education',
  'Higher_Education_Institutions',
  'Total_Tourists_Annually_millions',
  'Foreign_Tourists_Annually_millions',
  'Domestic_Tourists_Annually_millions',
  'Hotel_Rooms_thousands',
  'Infant_Mortality_Deaths_per_1_000_Births',
  'Life_Expectancy_in_Years_Male',
  'Life_Expectancy_in_Years_Female',
  'Physicians_per_100_000_People',
  'Number_of_Hospitals',
  'Number_of_Museums',
  'Number_of_Cultural_and_Arts_Organizations',
  'Green_Spaces_km2',
  'Air_Quality'
];


function filterData(k) {
  var data = _.map(dataLoaded, (i)=>{
    return Math.sqrt(i[k]*2)/Math.PI;
  });

data = _.filter(data, (i)=>{
  return i;
})

  var x = d3Scale.scaleLinear()
    .domain([_.min(data), _.max(data)])
    .range([3, 100]);
  return x;
}

var App = React.createClass({

  onSelectChanged(s, dataset) {

    if (!dataset) {
      dataset = 'dataSelector1';
    }

    if (dataset === 'dataSelector1') {

      this.setState({
        currentDataSet1: s
      })
    }

    if (dataset === 'dataSelector2') {

      this.setState({
        currentDataSet2: s
      })
    }
  },

  getInitialState() {
    return {
      currentDataSet1: dataFields[0],
      currentDataSet2: dataFields[1]
    }
  },
  render() {
    var scale = filterData(this.state.currentDataSet1);

    return ( < div >

      < DataSelector dataFields = {
        dataFields
      }
      selected = {
        this.state.currentDataSet1
      }

      onSelectChanged = {
        this.onSelectChanged
      }
      id = "dataSelector1" / >

       {

      dataLoaded.map((c) => {
        var itemVal = scale(Math.sqrt(c[this.state.currentDataSet1]*2)/Math.PI);

        return <City key = {
          c.City
        }
        city = {
          c
        }
        val = {
          Math.ceil(itemVal)
        }

        dataKey = {
          this.state.currentDataSet1
        }

        />
      })
    } < /div>
  )
}
});

function init() {
  reactDOM.render( < App / > , d);
}


init();
