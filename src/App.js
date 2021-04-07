import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import './App.css'
import Form from './components/Form'
import Title from './components/Title'
import Weather from './components/Weather'
require("dotenv").config();

const key = process.env.WEATHER_KEY;
/*console.log('API Key: ', key);*/
class App extends Component {
    state = {
        temperature: null,
        city: null,
        country: null,
        humidity: null,
        description: null,
        minTemp: null,
        maxTemp: null,
        error: null
    }

    getWeather = async event => {
        event.preventDefault()
        console.log(event.target.elements)
        const { city, country } = event.target.elements

        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&appid=${key}&units=metric`

        const api_call = await fetch(url)

        const data = await api_call.json()

        if (city && country && data.cod !== '404') {
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.sys.humidity,
                description: data.weather.description,
                minTemp: data.main.temp_min,
                maxTemp: data.main.temp_max,
                error: ''
            })
        } else if (city && country) {
            this.setState({
                temperature: null,
                city: null,
                country: null,
                humidity: null,
                description: null,
                minTemp: null,
                maxTemp: null,
                error: 'City not found'
            })
        } else {
            this.setState({
                temperature: null,
                city: null,
                country: null,
                humidity: null,
                description: null,
                minTemp: null,
                maxTemp: null,
                error: 'Please fill in form fields'
            })
        }
    }


    render() {
        return ( 
            <div className = 'wrapper'>
            <Grid container spacing = { 0 }>
            <Grid item xs = { 12 }>
            <Title/>
            <Form getWeather = { this.getWeather }/> 
            <Weather temperature = { this.state.temperature }
            city = { this.state.city }
            country = { this.state.country }
            humidity = { this.state.humidity }
            description = { this.state.description }
            minTemp = { this.state.minTemp }
            maxTemp = { this.state.maxTemp }/>
            </Grid> 
            </Grid>
            </div>
        )
    }
}

export default App
