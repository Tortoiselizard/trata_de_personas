import { useState } from 'react'

import Instructions from './components/Instructions/Instructions'

import './App.css'

function App () {
  const [showInstructions, setShowInstructions] = useState(true)

  return (
    <>
      {
      showInstructions
        ? (
          <Instructions setShowInstructions={setShowInstructions} />)
        : null
    }
      <main>
        contenido principal
      </main>
    </>
  )
}

export default App
