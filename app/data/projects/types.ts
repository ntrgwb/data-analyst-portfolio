import type { ReactNode } from "react";
import type { Tone } from "../skills";

export type CaseStudy = {
  chips: [string, Tone][];
  status: string;
  statusTone: string;
  title: string;
  problem: string;
  method: string;
  metrics: [string, string, string][];
  primaryAction: {
    icon: string;
    label: string;
    href: string;
  };
  secondaryAction: {
    icon: string;
    label: string;
    href: string;
    external?: boolean;
  };
  preview: ReactNode;
};