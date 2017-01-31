import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;



        return(
            <tr key={ name }>
                <td>
                    <GoogleMap lon={ lon } lat={ lat } />
                </td>
                <td>
                    <Chart chartData={ temps } chartColour={ 'orange' } chartUnits={'℃'} />
                </td>
                <td>
                    <Chart chartData={ pressure } chartColour={ 'green' } chartUnits={'hPa'} />
                </td>
                <td>
                    <Chart chartData={ humidity } chartColour={ 'black' } chartUnits={'%'} />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                { this.props.weather.map(this.renderWeather) }
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather }; // ES6 { weather } is same as { weather: weather }
}

export default connect(mapStateToProps) (WeatherList);