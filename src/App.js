import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const key = 'f6c0a3bef4112a87f526c8319a6182e7'
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${key}`
        )
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    }
    getApi()
  })
  return <div className="App">hello</div>
}

export default App
