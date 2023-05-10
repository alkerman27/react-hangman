import { HangmanDrawing } from "./HangmanDrawing copy 2"


const App = () => {
  return (
    <div className="max-w-4xl flex flex-col gap-8 my-0 mx-auto items-center">
      <div className="text-4xl text-center">
        Winner Loser
      </div>
      <HangmanDrawing />
    </div>
  )
}

export default App