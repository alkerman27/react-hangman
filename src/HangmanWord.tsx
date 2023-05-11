type HangmanProps = {
  guessedLetters: string[]
  wordToGuess: string
  reveal?: boolean
}



export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanProps) {


  return (
    <div className="flex gap-1 text-8xl font-bold uppercase font-mono">
      {wordToGuess.split("").map((letter, index) =>
        <span className="border-b-[0.1em] border-black" key={index}>
          <span className={`${guessedLetters.includes(letter) || reveal ? "visible" : "invisible"}    ${!guessedLetters.includes(letter) && reveal ? "text-red-500": "text-black"}`} 
          
        >
            {letter}
          </span>
        </span>
      )}
      
    </div>
  )
}