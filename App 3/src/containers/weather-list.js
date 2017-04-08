import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherChart from '../components/weather-chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const weatherData = cityData.list;
    const temp = weatherData.map(weather => weather.main.temp);
    const humidity = weatherData.map(weather => weather.main.humidity);
    const pressure = weatherData.map(weather => weather.main.pressure);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={cityData.city.id}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><WeatherChart data={temp} color="#406060" units="K" /></td>
        <td><WeatherChart data={humidity} color="#406060" units="hPa" /></td>
        <td><WeatherChart data={pressure} color="#406060" units="%" /></td>
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