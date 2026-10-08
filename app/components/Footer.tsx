import { footerLinks } from "../data/nav";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1280px] mx-auto px-6 lg:px-12 py-10 gap-6 w-full">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <span className="font-label-code text-body-md font-bold text-on-surface">
            {profile.brand}
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant hidden sm:inline">
            •
          </span>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            © {profile.year} {profile.fullName}. Kiến trúc hệ thống & phân tích.
            Xây dựng với sự chính xác.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {footerLinks.map((l) => (
            <a
              key={l.label}
              className="text-on-surface-variant font-label-code text-caption hover:text-secondary transition-colors duration-150 hover:underline"
              href={l.href}
              {...(l.external ? { rel: "noreferrer", target: "_blank" } : {})}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
