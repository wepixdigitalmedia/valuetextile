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
    <div className="group flex flex-col border-t border-[#E6E2DB] pt-3.5 pb-2 transition-all duration-200 hover:border-[#F29B52]">
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-heading text-[11px] font-bold text-[#C8741F] tracking-[0.1em]">
          {step.step}
        </span>
        <IconComponent className="w-3.5 h-3.5 text-[#5F5B55]/60 group-hover:text-[#F29B52] transition-colors" strokeWidth={1.8} />
      </div>
      <h3 className="font-heading text-[15px] sm:text-[16px] font-bold text-[#1F1F1F] leading-snug tracking-tight group-hover:text-[#C8741F] transition-colors">
        {step.title}
      </h3>
    </div>
  );
}
