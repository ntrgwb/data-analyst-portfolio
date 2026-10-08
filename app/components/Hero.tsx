import Icon from "./Icon";
import { hero, heroMetrics } from "../data/hero";

export default function Hero() {
  return (
    <section className="relative pt-6 pb-4" id="hero">
      <div className="space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[12px] bg-surface-container border border-outline-variant/30 text-on-surface">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
          </span>

          <span className="font-label-code text-caption text-tertiary font-medium">
            {hero.badge}
          </span>
        </div>

        <h1 className="font-display text-display text-on-surface tracking-tight">
          {hero.headlineStart}{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary via-primary to-secondary-fixed">
            {hero.headlineHighlight}
          </span>
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          {hero.intro}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[2px] bg-primary-container text-on-primary font-body-sm text-body-sm font-semibold hover:bg-primary transition-all shadow-[0_0_24px_-4px_rgba(99,102,241,0.25)]"
            href="#projects"
          >
            {hero.ctaPrimary}
            <Icon name="arrow_forward" size={18} />
          </a>

          <a
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[2px] border border-outline-variant/50 hover:border-secondary/60 text-on-surface font-body-sm text-body-sm hover:bg-surface-container-high transition-colors"
            href="#contact"
          >
            {hero.ctaSecondary}
          </a>
        </div>
      </div>

      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-8 border-t border-outline-variant/20"
        id="about"
      >
        {heroMetrics.map((m) => (
          <div
            key={m.label}
            className="bg-surface-container-low border border-outline-variant/30 rounded-[2px] p-5 relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-label-code text-caption text-on-surface-variant uppercase tracking-wider">
                {m.label}
              </span>

              <Icon name={m.icon} size={20} className={m.iconColor} />
            </div>

            <div className="font-metric-val text-metric-val text-on-surface mt-3">
              {m.value}
            </div>

            <p className="font-caption text-caption text-on-surface-variant mt-1">
              {m.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}