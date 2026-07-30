import styles from "./Spinner.module.css";
import type { SpinnerProps } from "./Spinner.types";

import { cn } from "@/utils/cn";

export function Spinner({
  size = "md",
}: SpinnerProps) {
  return (
    <span
      className={cn(
        styles.spinner,
        styles[size]
      )}
      aria-hidden="true"
    />
  );
}