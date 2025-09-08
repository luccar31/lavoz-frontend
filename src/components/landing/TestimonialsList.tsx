"use client";

import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import TestimonialCard from "@/components/landing/TestimonialCard";

export type Testimonial = {
  quote: string
  name: string,
  role: string,
  avatarPath: string
}

type TestimonialsListProps = {
  items: Testimonial[]
}

export default function TestimonialsList({ items }: TestimonialsListProps) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [AutoScroll({ speed: 1, stopOnInteraction: false })]
  );

  return (
    <div className="overflow-hidden mt-8" ref={emblaRef}>
      <div className="flex">
        {items.map((testimonial, index) => (
          <div className="flex-grow-0 flex-shrink-0 basis-full md:basis-1/2 lg:basis-1/3" key={index}>
            <div className="h-full p-2">
              <TestimonialCard testimonial={testimonial} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}