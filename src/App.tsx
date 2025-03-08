import './App.css'

function App() {
  return (
    <div className="background-image">
      <video className="video-background" autoPlay loop muted>
        <source src="./assets/lemans.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <header className="header">
        <h2>Titouan</h2>
        <h1>BEAUREPAIRE</h1>
      </header>
    </div>
  )
}

export default App
