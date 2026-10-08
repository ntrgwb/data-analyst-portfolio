import { navLinks } from "../data/nav";
import { profile } from "../data/profile";

export default function Header() {
  return (
    <header className="bg-surface/95 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/40">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 h-[82px] flex items-center justify-between">

        {/* BRAND */}
        <a
          href="#hero"
          className="flex items-center gap-3 group"
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-secondary opacity-30 group-hover:animate-ping" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-secondary" />
          </span>

          <span className="font-label-code text-[17px] font-bold tracking-[0.12em] text-on-surface">
            {profile.brand}
          </span>
        </a>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((l) =>
            l.href === "#contact" ? (
              <a
                key={l.href}
                href={l.href}
                className="
                  px-5 py-2.5
                  rounded-[4px]
                  bg-secondary
                  text-white
                  text-[15px]
                  font-semibold
                  hover:opacity-90
                  transition-all
                  shadow-[0_4px_14px_rgba(8,145,178,0.18)]
                "
              >
                {l.label}
              </a>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="
                  relative
                  text-[15px]
                  font-medium
                  text-on-surface-variant
                  hover:text-secondary
                  transition-colors
                  group
                "
              >
                {l.label}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-2
                    h-[2px]
                    w-0
                    bg-secondary
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
}