import Icon from "./Icon";
import { caseStudies, projectsIntro } from "../data/projects";
import type { Tone } from "../data/skills";

const chipTone: Record<Tone, string> = {
  secondary: "text-secondary border-secondary/30",
  primary: "text-primary border-primary/30",
  tertiary: "text-tertiary border-tertiary/30",
  muted: "text-on-surface-variant border-outline-variant/20",
};

export default function Projects() {
  return (
    <section className="space-y-12" id="projects">
      <div>
        <span className="font-label-code text-caption text-secondary uppercase tracking-widest block mb-1">
          {projectsIntro.label}
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          {projectsIntro.title}
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl">
          {projectsIntro.desc}
        </p>
      </div>

      <div className="space-y-10">
        {caseStudies.map((c) => (
          <article
            key={c.title}
            className="bg-surface-container-low border border-outline-variant/30 rounded-[4px] p-6 lg:p-8 hover:border-primary/40 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  {c.chips.map(([text, tone]) => (
                    <span
                      key={text}
                      className={`font-label-code text-caption px-2.5 py-0.5 rounded-[2px] bg-surface-container border ${chipTone[tone]}`}
                    >
                      {text}
                    </span>
                  ))}
                  <span
                    className={`font-label-code text-caption ml-auto font-medium ${c.statusTone}`}
                  >
                    {c.status}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  {c.title}
                </h3>
                <div className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
                  <div>
                    <span className="text-on-surface font-semibold">
                      Vấn đề kinh doanh:
                    </span>
                    <p className="mt-0.5">{c.problem}</p>
                  </div>
                  <div>
                    <span className="text-on-surface font-semibold">
                      Phương pháp phân tích:
                    </span>
                    <p className="mt-0.5">{c.method}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {c.metrics.map(([value, label, color]) => (
                    <div
                      key={label}
                      className="p-3 bg-surface-container rounded-[2px] border border-outline-variant/20"
                    >
                      <div className={`font-metric-val text-headline-sm ${color}`}>
                        {value}
                      </div>
                      <div className="font-caption text-caption text-on-surface-variant">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <a
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[2px] bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 text-on-surface font-label-code text-label-code transition-colors"
                    href={c.primaryAction.href}
                  >
                    <Icon
                      name={c.primaryAction.icon}
                      size={16}
                      className="text-secondary"
                    />
                    {c.primaryAction.label}
                  </a>
                  <a
                    className="inline-flex items-center gap-1.5 font-label-code text-label-code text-on-surface-variant hover:text-on-surface transition-colors"
                    href={c.secondaryAction.href}
                    {...(c.secondaryAction.external
                      ? { rel: "noreferrer", target: "_blank" }
                      : {})}
                  >
                    <Icon name={c.secondaryAction.icon} size={16} />
                    {c.secondaryAction.label}
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 bg-surface-container-lowest border border-outline-variant/30 rounded-[2px] p-4 font-label-code text-caption space-y-3">
                {c.preview}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
