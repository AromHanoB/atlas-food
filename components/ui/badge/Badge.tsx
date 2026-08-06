import { cn } from "@/utils/cn";

import styles from "./Badge.module.css";
import type { BadgeProps } from "./Badge.types";

export function Badge({
  children,
  variant = "primary",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        styles.badge,
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}