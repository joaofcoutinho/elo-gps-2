import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";

type Props = {
  icon: LucideIcon;
  children: string;
};

export function CredentialBadge({ icon, children }: Props) {
  return (
    <Card interactive className="flex items-start gap-4 p-5 md:p-6">
      <IconBadge icon={icon} size="md" />
      <span className="pt-1.5 text-sm font-bold leading-snug text-ink-primary md:text-base">
        {children}
      </span>
    </Card>
  );
}
