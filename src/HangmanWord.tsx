const word = "hello"

export function HangmanWord() {
  return (
    <div className="flex gap-1 text-8xl font-bold uppercase font-mono">
      {word.split("").map((letter, index) =>
        <span className="border-b-[0.1em] border-black">
          <span>
            {letter}
          </span>
        </span>
      )}
      
    </div>
  )
}