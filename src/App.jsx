import MyMap from './components/MyMap'
import './App.css'
import "leaflet/dist/leaflet.css";
import SearchIpAddress from './components/SearchIpAddress';

function App() {
  

  return (
    <div >
      <SearchIpAddress/>
      <MyMap/>
    </div>
  )
}

export default App
