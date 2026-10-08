import Icon from "./Icon";
import { navLinks } from "../data/nav";
import { profile } from "../data/profile";

export default function Header() {
  return (
    <header className="bg-surface/80 backdrop-blur-md top-0 sticky z-50 border-b border-outline-variant/30">
      <div className="flex justify-between items-center max-w-[1280px] mx-auto px-6 lg:px-12 h-16 w-full">
        <div className="flex items-center gap-3">
          <a
            className="font-label-code text-body-md font-semibold text-on-surface tracking-wider flex items-center gap-2"
            href="#hero"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-secondary inline-block animate-pulse"></span>
            {profile.brand}
          </a>
        </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                className="text-on-surface-variant hover:text-secondary transition-colors font-body-sm text-body-sm"
                href={l.href}
              >
                {l.label}
              </a>
            ))}
          </nav>
      </div>
    </header>
  );
}
