import React from 'react'
import Search from './components/Search'
import SongItem from './components/SongItem/SongItem'

function App() {
  return (
    <div className="App">
      <Search visible text='Я видимый!' />
      <SongItem />
    </div>
  )
}


export default App;