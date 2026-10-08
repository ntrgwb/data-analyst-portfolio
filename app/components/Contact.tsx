import Icon from "./Icon";
import { contact } from "../data/contact";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0f172a] rounded-[4px] p-6 lg:p-8"
    >
      <div className="border border-white/10 rounded-[20px] px-8 py-10 lg:px-12 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Nội dung bên trái */}
          <div className="lg:col-span-8">
            <span className="font-label-code text-caption text-[#67e8f9] uppercase tracking-widest">
              {contact.label}
            </span>

            <h2 className="mt-2 text-2xl lg:text-3xl font-bold text-white max-w-2xl">
              {contact.title}
            </h2>

            <p className="mt-3 text-sm lg:text-base text-slate-400 leading-relaxed max-w-2xl">
              {contact.desc}
            </p>
          </div>

          {/* Nút bên phải */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-center gap-3">

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[8px] bg-[#6366f1] text-white text-sm font-semibold hover:bg-[#5558e8] transition-colors"
            >
              <Icon name="mail" size={17} />
              {profile.email}
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[8px] bg-[#1e293b] border border-white/10 text-white text-sm font-medium hover:bg-[#273449] transition-colors"
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