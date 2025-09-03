import {ReactNode} from "react";

type BodyProps = {
  children: ReactNode;
  className?: string;
}

export default function Body({children, className = ''}: BodyProps) {
  return (
    <p className={`text-landing-text-secondary text-body ${className}`}>
      {children}
    </p>
  )
}