import {ReactNode} from "react";

type H1Props = {
  children: ReactNode
}

export default function H1({children}: H1Props) {
  return (
    <h1 className="font-oswald font-bold text-h1 uppercase text-landing-text-primary">
      {children}
    </h1>
  )
}