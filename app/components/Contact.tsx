import Icon from "./Icon";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#D8EEE3]/80 border border-[#C5E2D4] rounded-[12px] px-8 py-7 lg:px-10"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        {/* Bên trái */}
        <div>
          <span className="font-label-code text-caption text-[#087A5B] uppercase tracking-widest font-semibold">
            Kết nối
          </span>

          <h2 className="mt-2 text-xl lg:text-2xl font-bold text-on-surface">
            Liên hệ với tôi
          </h2>
        </div>

        {/* Bên phải */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[8px] bg-[#087A5B] text-white text-sm font-semibold hover:bg-[#066A4F] transition-all"
          >
            <Icon name="mail" size={17} />
            {profile.email}
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[8px] bg-white/70 border border-[#AFCFBE] text-[#075E4A] text-sm font-semibold hover:bg-white transition-all"
          >
            LinkedIn
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}