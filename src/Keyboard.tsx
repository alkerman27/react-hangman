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

export function Keyboard() {
  return (
    <div className="grid grid-cols-16 gap-1.5">
      {KEYS.map(key => {
        return (
          <button className="w-full border-4 border-solid border-black bg-transparent aspect-square text-4xl uppercase p-2 font-bold text-black cursor-pointer">
            {key}
          </button>
        )
      })}
    </div>
  )
}