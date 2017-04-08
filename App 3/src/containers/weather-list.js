import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherChart from '../components/weather-chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const weatherData = cityData.list;
    const temp = weatherData.map(weather => weather.main.temp);
    const humidity = weatherData.map(weather => weather.main.humidity);
    const pressure = weatherData.map(weather => weather.main.pressure);

    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td><WeatherChart data={temp} color="#404040" units="K" /></td>
        <td><WeatherChart data={humidity} color="#404040" units="hPa" /></td>
        <td><WeatherChart data={pressure} color="#404040" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);