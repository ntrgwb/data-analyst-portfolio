import Icon from "./Icon";
import { contact } from "../data/contact";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#D8EEE3]/80 backdrop-blur-sm border border-[#C5E2D4] rounded-[12px] p-6 lg:p-8"
    >
      <div className="border border-[#B8D9C8]/70 rounded-[20px] px-8 py-10 lg:px-12 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Nội dung bên trái */}
          <div className="lg:col-span-8">
            <span className="font-label-code text-caption text-[#087A5B] uppercase tracking-widest font-semibold">
              {contact.label}
            </span>

            <h2 className="mt-2 text-2xl lg:text-3xl font-bold text-on-surface max-w-2xl">
              {contact.title}
            </h2>

            <p className="mt-3 text-sm lg:text-base text-on-surface-variant leading-relaxed max-w-2xl">
              {contact.desc}
            </p>
          </div>

          {/* Liên hệ bên phải */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-center gap-3">

            {/* Email */}
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[8px] bg-[#087A5B] text-white text-sm font-semibold hover:bg-[#066A4F] transition-all shadow-[0_6px_18px_rgba(8,122,91,0.12)]"
            >
              <Icon name="mail" size={17} />
              {profile.email}
            </a>

            {/* LinkedIn */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[8px] bg-white/70 border border-[#AFCFBE] text-[#075E4A] text-sm font-semibold hover:bg-white hover:border-[#087A5B]/50 transition-all"
            >
              LinkedIn Profile
              <span>→</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}