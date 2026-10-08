import Icon from "./Icon";
import { skillGroups, skillsIntro, type Tone } from "../data/skills";

const chipTone: Record<Tone, string> = {
  secondary: "text-secondary border-secondary/20",
  primary: "text-primary border-primary/20",
  tertiary: "text-tertiary border-tertiary/20",
  muted: "text-on-surface-variant border-outline-variant/20",
};

export default function Skills() {
  return (
    <section className="space-y-8" id="skills">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-label-code text-caption text-secondary uppercase tracking-widest block mb-1">
            {skillsIntro.label}
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            {skillsIntro.title}
          </h2>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
          {skillsIntro.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((g) => (
          <div
            key={g.title}
            className="bg-surface-container-low border border-outline-variant/30 hover:border-secondary/40 rounded-[2px] p-6 transition-all duration-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <Icon name={g.icon} size={24} className="text-secondary" />
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                {g.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.chips.map(([text, tone]) => (
                <span
                  key={text}
                  className={`font-label-code text-caption px-2 py-0.5 rounded-[2px] bg-surface-container border ${chipTone[tone]}`}
                >
                  {text}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
