
function App() {
  const name = 'mike'
  const x = false

  return (
    <div className="App">
      <h1>React Task tracker</h1>
      <h2>Hello {name}</h2>
      <h2>Hello {x ? 'Yes' : 'No'}</h2>
    </div>
    
  )
}

export default App;
