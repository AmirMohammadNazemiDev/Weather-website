import SearchBar from "./SearchBar"
import WeatherContent from "./WeatherContent"

function WeatherCard() {
  return (
    <div className="test-back flex flex-col justify-between items-center">
        <WeatherContent/>
        <SearchBar/>
    </div>
  )
}

export default WeatherCard