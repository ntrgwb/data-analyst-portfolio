import Icon from "./Icon";
import { contact } from "../data/contact";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section
      className="bg-surface-container border border-outline-variant/40 rounded-[4px] p-8 lg:p-12 text-center space-y-6"
      id="contact"
    >
      <div className="space-y-2 max-w-xl mx-auto">
        <span className="font-label-code text-caption text-secondary uppercase tracking-widest">
          {contact.label}
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          {contact.title}
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          {contact.desc}
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
        <a
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[2px] bg-primary-container text-on-primary font-body-sm text-body-sm font-semibold hover:bg-primary transition-colors"
          href={`mailto:${profile.email}`}
        >
          <Icon name="mail" size={18} />
          {profile.email}
        </a>
        <a
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[2px] border border-secondary/50 text-secondary hover:bg-secondary/10 font-body-sm text-body-sm transition-colors"
          href={profile.scheduleUrl}
        >
          <Icon name="calendar_today" size={18} />
          {contact.scheduleLabel}
        </a>
      </div>
      <div className="flex justify-center items-center gap-6 pt-4 text-on-surface-variant">
        <a
          className="hover:text-secondary flex items-center gap-1 font-label-code text-caption transition-colors"
          href={profile.linkedin}
          rel="noreferrer"
          target="_blank"
        >
          <Icon name="link" size={16} /> LinkedIn
        </a>
        <a
          className="hover:text-secondary flex items-center gap-1 font-label-code text-caption transition-colors"
          href={profile.github}
          rel="noreferrer"
          target="_blank"
        >
          <Icon name="terminal" size={16} /> GitHub
        </a>
      </div>
    </section>
  );
}
