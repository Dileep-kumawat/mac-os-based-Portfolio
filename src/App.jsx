import { useState } from 'react'
import "./app.scss"
import 'remixicon/fonts/remixicon.css'
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'
import ContextMenu from './components/ContextMenu'

function App() {
  const [topElem, setTopElem] = useState(null);
  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })

  return (
    <main>
      <ContextMenu setWindowsState={setWindowsState} />
      <Nav setWindowsState={setWindowsState} />
      <Dock setWindowsState={setWindowsState} />
      {windowsState.github && <Github topElem={topElem} setTopElem={setTopElem} windowName="github" setWindowsState={setWindowsState} />}
      {windowsState.note && <Note topElem={topElem} setTopElem={setTopElem} windowName="note" setWindowsState={setWindowsState} />}
      {windowsState.resume && <Resume topElem={topElem} setTopElem={setTopElem} windowName="resume" setWindowsState={setWindowsState} />}
      {windowsState.spotify && <Spotify topElem={topElem} setTopElem={setTopElem} windowName="spotify" setWindowsState={setWindowsState} />}
      {windowsState.cli && <Cli topElem={topElem} setTopElem={setTopElem} windowName="cli" setWindowsState={setWindowsState} />}
    </main>
  )
}

export default App
