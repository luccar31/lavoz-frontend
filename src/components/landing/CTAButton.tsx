import Button from "@/components/landing/Button";
import {ReactNode} from "react";

type CTAButtonProps = {
  children: ReactNode;
  href: string;
}

export default function CTAButton({children, href}: CTAButtonProps) {
  return (
    <Button href={href} size="lg" className="w-1/2">
      {children}
    </Button>
  )
}