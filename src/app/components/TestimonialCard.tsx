import { FC } from "react";
import { Testimonial } from "../types/interfaces";
import { Quote } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps extends Testimonial {}

const TestimonialCard: FC<TestimonialCardProps> = ({
  imageUrl,
  name,
  review,
  role,
}) => {
  return (
    <article
      className="flex flex-col items-center 
    md:items-start gap4 py-6 px-4 rounded-lg hover:bg-slate-800 capitalize"
    >
      <Quote className="w-12 h-12 text-sky-600" />
      <p className="text-lg text-center md:text-start">{review}</p>
      <div className="flex items-start gap-2">
        <Image
          src={imageUrl}
          width={40}
          height={40}
          alt={name}
          className="rounded-full object-contain py-2"
        />
        <div>
          <h4 className="text-slate-100 font-semibold tracking-wide py-2">
            {name}
          </h4>
          <small className="text-sky-600 font-semibold ">{role}</small>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
