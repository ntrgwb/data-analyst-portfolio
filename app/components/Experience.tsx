import Icon from "./Icon";
import { credentials, experiences } from "../data/experience";

export default function Experience() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="experience">
      <div className="lg:col-span-7 space-y-8">
        <div>
          <span className="font-label-code text-caption text-secondary uppercase tracking-widest block mb-1">
            Hành trình sự nghiệp
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Kinh nghiệm
          </h2>
        </div>
        <div className="border-l border-outline-variant/30 pl-6 space-y-8 relative">
          {experiences.map((e) => (
            <div key={e.title} className="relative space-y-2">
              <span
                className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full ring-4 ring-background ${e.dot}`}
              ></span>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {e.title}
                </h3>
                <span className={`font-label-code text-caption ${e.periodTone}`}>
                  {e.period}
                </span>
              </div>
              <div className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                {e.company}
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {e.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-5 space-y-8">
        <div>
          <span className="font-label-code text-caption text-secondary uppercase tracking-widest block mb-1">
            Xác thực
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Chứng chỉ
          </h2>
        </div>
        <div className="space-y-4">
          {credentials.map((c) => (
            <div
              key={c.title}
              className="bg-surface-container-low border border-outline-variant/30 rounded-[2px] p-4 flex items-start gap-4"
            >
              <Icon
                name={c.icon}
                size={24}
                className={`${c.iconColor} mt-0.5`}
              />
              <div>
                <h4 className="font-headline-sm text-body-md font-semibold text-on-surface">
                  {c.title}
                </h4>
                <p className="font-caption text-caption text-on-surface-variant mt-0.5">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
