import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { CtaSource } from "@/lib/constants";

type Variant = "primary" | "ghost";
type Size = "default" | "lg";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  cta?: CtaSource;
  ariaLabel?: string;
};

type AsLinkProps = CommonProps & {
  href: string;
  type?: never;
  onClick?: never;
};

type AsButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

export type ButtonProps = AsLinkProps | AsButtonProps;

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wide transition-all duration-200 ease-out rounded-full select-none whitespace-nowrap";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold text-ink-primary hover:bg-gold-soft hover:-translate-y-0.5 shadow-[0_8px_24px_-12px_rgba(153,79,36,0.85)]",
  ghost:
    "border border-gold text-gold hover:bg-gold hover:text-navy-deep",
};

const sizeClasses: Record<Size, string> = {
  default: "px-6 py-3 text-sm",
  lg: "px-10 py-4 text-base",
};

export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps
>(function Button(
  { children, variant = "primary", size = "default", className, cta, ariaLabel, ...rest },
  ref,
) {
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if ("href" in rest && rest.href !== undefined) {
    const { href } = rest as AsLinkProps;
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        data-cta={cta}
        className={classes}
        ref={ref as React.Ref<HTMLAnchorElement>}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = rest as AsButtonProps;
  return (
    <button
      {...buttonProps}
      aria-label={ariaLabel}
      data-cta={cta}
      className={classes}
      ref={ref as React.Ref<HTMLButtonElement>}
    >
      {children}
    </button>
  );
});
