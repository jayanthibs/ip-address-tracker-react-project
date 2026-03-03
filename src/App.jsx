import MyMap from './components/MyMap'
import './App.css'
import "leaflet/dist/leaflet.css";
import SearchIpAddress from './components/SearchIpAddress';
import DisplayIpAddress from './components/DisplayIpAddress';

function App() {
  

  return (
    <div >
      <SearchIpAddress/>
      <DisplayIpAddress/>
      <MyMap/>
    </div>
  )
}

export default App
