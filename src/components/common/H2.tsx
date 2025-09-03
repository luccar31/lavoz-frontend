import {ReactNode} from "react";

type H2Props = {
  children: ReactNode
}

export default function H2({children}: H2Props) {
  return (
    <h2 className="font-oswald font-bold text-h2 uppercase text-landing-text-primary">
      {children}
    </h2>
  )
}