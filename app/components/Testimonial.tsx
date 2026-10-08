import Icon from "./Icon";
import { testimonial } from "../data/testimonial";

export default function Testimonial() {
  return (
    <section className="bg-surface-container-low border border-outline-variant/30 rounded-[4px] p-8 lg:p-10 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <Icon
          name="format_quote"
          size={36}
          className="text-secondary opacity-60"
        />
        <blockquote className="font-body-lg text-body-lg text-on-surface italic leading-relaxed">
          “{testimonial.quote}”
        </blockquote>
        <div className="pt-2">
          <div className="font-headline-sm text-headline-sm text-on-surface">
            {testimonial.name}
          </div>
          <div className="font-label-code text-caption text-on-surface-variant">
            {testimonial.role}
          </div>
        </div>
      </div>
    </section>
  );
}
