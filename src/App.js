import React, {  Component} from 'react'
import {Cards,Chart,CountryPicker} from './component'
import "./App.css"
import {fetchData} from './api'


export default class App extends Component {
  state={
    data:{},
    country: '',
  }
  async componentDidMount(){
    const data = await fetchData();
    this.setState({data})
    
  }
  
  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }
  render() {
    
    const {data,country} = this.state;
    return (
      <div className="App">
        <Cards data={data}></Cards>
        <CountryPicker data={data} handleCountryChange={this.handleCountryChange}></CountryPicker>
        <Chart data={data} country={country} ></Chart>
      </div>
    )
  }
}





