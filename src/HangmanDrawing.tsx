const HEAD = (
  <div className="w-12 h-12 rounded-full border-8 border-black absolute top-12 -right-5" />
)

const BODY = (
  <div className="w-2.5 h-24 bg-black absolute top-24 right-0 " />
)

const RIGHT_ARM = (
  <div className="w-24 h-2.5 bg-black absolute top-36 -right-24 -rotate-45 origin-bottom-left" />
)
const LEFT_ARM = (
  <div className="w-24 h-2.5 bg-black absolute top-36 right-2.5 rotate-45 origin-bottom-right" />
)

const RIGHT_LEG = (
  <div className="w-24 h-2.5 bg-black absolute top-[182px] -right-[86.5px] rotate-45 origin-bottom-left" />
)
const LEFT_LEG = (
  <div className="w-24 h-2.5 bg-black absolute top-[182px] right-0 -rotate-45 origin-bottom-right" />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
  numberOfGuesses: number
}

export function HangmanDrawing({numberOfGuesses}: HangmanDrawingProps) {
  return (
    <div className="relative">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="h-14 w-2.5 bg-black top-0 right-0 absolute" />
      <div className="h-2.5 w-52 bg-black ml-32" />
      <div className="h-96 w-2.5 bg-black ml-32"/>
      <div className="h-2.5 w-64 bg-black" />
    </div>
  )
}