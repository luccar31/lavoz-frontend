import Image from "next/image";
import React from "react";
import {Testimonial} from "@/components/landing/TestimonialsList";
import Body from "@/components/landing/Body";

type TestimonialCardProps = {
  testimonial: Testimonial;
}

export default function TestimonialCard({testimonial: {quote, avatarPath, name, role}}: TestimonialCardProps) {
  return (
    <div className="bg-landing-background p-8 flex flex-col">
      {/* 2. flex-grow empuja el bloque del avatar hacia abajo */}
      <Body className="flex-grow">&#34;{quote}&#34;</Body>
      <div className="flex items-center mt-4">
        {/* 3. Usamos un tamaño FIJO para el avatar para garantizar consistencia */}
        <div className="relative w-[64px] h-[64px] rounded-full overflow-hidden aspect-square flex-shrink-0">
          <Image
            src={avatarPath}
            alt={`Foto de ${name}`}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
        <div className="ml-4">
          <p className="font-oswald font-medium uppercase text-landing-text-primary">
            {name}
          </p>
          <p className="text-sm text-landing-text-secondary">
            {role}
          </p>
        </div>
      </div>
    </div>
  )
}