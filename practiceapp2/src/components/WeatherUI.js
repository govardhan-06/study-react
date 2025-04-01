
const WeatherUI = ({temp}) => {
    return(
        <div className="weatherUI">
            <h2>Current Weather Information</h2>
            <p>Temperature: {temp}°C</p>
        </div>
    )
}

export default WeatherUI;