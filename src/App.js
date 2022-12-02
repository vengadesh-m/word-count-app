import { useState } from "react"
import "./index.css"

function App(){
  const [text, setText] = useState('')
  let textArray = text.match(/(\w+)/g)
  let longestWord = textArray && textArray.sort((first, second) => second.length - first.length)
  return(
    <div>
      <h1>Word Count app</h1>
      <textarea spellCheck="true" onChange={(event) => setText(event.target.value)}></textarea>
      <p className="para">Character count: {text.length}</p>
      <p className="para">Word count: {text && text.match(/(\w+)/g).length}</p>
      <p className="para">Longest Word: {longestWord  && longestWord[0]}</p>
    </div>
  )
}

export default App