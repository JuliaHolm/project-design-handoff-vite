import { SectionTitle } from "../../../../components/reusable/SectionTitle";
import { TestimonialCard } from "./TestimonialCard";
import "./Testimonials.css";

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="page-wrapper">
        <SectionTitle className="testimonial-title" title="Love" />
        <TestimonialCard />
      </div>
    </section>
  );
};