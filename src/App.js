import React from 'react'
import Search from './components/Search'

function App() {
  return (
    <div className="App">
      <Search visible text='Я видимый!' />
      <Search visible={false} text='Я невидимый' />
      <Search />
    </div>
  )
}


export default App;