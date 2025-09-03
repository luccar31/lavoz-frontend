import TestimonialCard from "@/components/landing/TestimonialCard";

export type Testimonial = {
  quote: string
  name: string,
  role: string,
  avatarPath: string
}

type TestimonialsGridListProps = {
  items: Testimonial[]
}

export default function TestimonialsList({items}: TestimonialsGridListProps) {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      {items.map((testimonial, index) => (
        <TestimonialCard testimonial={testimonial} key={index}/>
      ))}
    </div>
  )
}