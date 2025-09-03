import Button from "@/components/common/Button";
import {ReactNode} from "react";

type CTAButtonProps = {
  children: ReactNode;
  href: string;
  className?: string;
}

export default function CTAButton({children, href, className}: CTAButtonProps) {
  return (
    <Button href={href} size="lg" className={`w-1/2 ${className}`}>
      {children}
    </Button>
  )
}