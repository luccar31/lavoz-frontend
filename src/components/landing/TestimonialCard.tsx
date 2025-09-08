"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { Testimonial } from "@/components/landing/TestimonialsList";
import Body from "@/components/common/Body";
import Modal from "@/components/common/Modal";

const TRUNCATE_LENGTH = 250;

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { quote, avatarPath, name, role } = testimonial;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isLongText = quote.length > TRUNCATE_LENGTH;
  const truncatedText = isLongText ? `${quote.substring(0, TRUNCATE_LENGTH)}...` : quote;

  return (
    <>
      <div className="bg-landing-background p-8 flex flex-col h-full">
        <Body className="flex-grow">
          &#34;{truncatedText}&#34;
          {isLongText && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-brand-red font-bold ml-2 hover:underline"
            >
              Leer más
            </button>
          )}
        </Body>
        <div className="flex items-center mt-4">
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
            {role && <p className="text-sm text-landing-text-secondary text-left">{role}</p>}
          </div>
        </div>
      </div>

      {isLongText && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="text-landing-text-primary">
            <Body className="text-landing-text-secondary">&#34;{quote}&#34;</Body>
            <div className="mt-4 text-right">
              <p className="font-oswald font-medium uppercase">{name}</p>
              {role && <p className="text-sm text-landing-text-secondary">{role}</p>}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}