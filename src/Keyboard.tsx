const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

type KeyboardProps = {
  disabled?: boolean
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
}


export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <div className="grid grid-cols-16 gap-1.5">
      {KEYS.map(key => {
          const isActive = activeLetters.includes(key)
          const isInactive = inactiveLetters.includes(key)
        return (
          <button className={`w-full border-4 border-solid border-black bg-transparent aspect-square text-4xl uppercase p-2 font-bold text-black cursor-pointer ${isActive ? "bg-teal-200 text-white": "" } ${isInactive ? "opacity-30": ""}`}

          onClick={() => addGuessedLetter(key)}
          disabled={isInactive || isActive || disabled}
            key={key}
          >
          {key}
          </button>
        )
      })}
    </div>
  )
}