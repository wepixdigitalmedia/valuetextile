import React from "react";
import {
  GitBranch,
  Cpu,
  FlaskConical,
  Sparkles,
  CheckCircle2,
  Scan,
  Scissors,
  Truck,
} from "lucide-react";
import { ProcessStepData } from "@/config/siteContent";

interface ProcessStepProps {
  step: ProcessStepData;
  index: number;
}

const stepIcons: Record<string, React.ElementType> = {
  "01": GitBranch,
  "02": Cpu,
  "03": FlaskConical,
  "04": Sparkles,
  "05": CheckCircle2,
  "06": Scan,
  "07": Scissors,
  "08": Truck,
};

export function ProcessStep({ step }: ProcessStepProps) {
  const IconComponent = stepIcons[step.step] || GitBranch;

  return (
    <div className="group flex flex-col border-t border-[var(--line)] pt-3.5 pb-2 transition-colors duration-200 hover:border-[var(--accent)]">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[12px] font-bold text-[var(--accent)] tracking-[0.1em]">
          {step.step}
        </span>
        <IconComponent className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors" strokeWidth={1.8} />
      </div>
      <h3 className="text-[15px] sm:text-[16px] font-bold text-[var(--black)] leading-snug tracking-[-0.02em] group-hover:text-[var(--accent)] transition-colors">
        {step.title}
      </h3>
    </div>
  );
}
