import { HangmanDrawing } from "./HangmanDrawing"
import { HangmanWord } from "./HangmanWord"
import { Keyboard } from "./Keyboard"


const App = () => {
  return (
    <div className="max-w-4xl flex flex-col gap-8 my-0 mx-auto items-center">
      <div className="text-4xl text-center">
        Winner Loser
      </div>
      <HangmanDrawing />
      <HangmanWord />
      <div className="self-stretch">

      <Keyboard />
      </div>
    </div>
  )
}

export default App