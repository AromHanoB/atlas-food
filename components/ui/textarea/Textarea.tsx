import { cn } from "@/utils/cn";

import styles from "./Textarea.module.css";
import type { TextareaProps } from "./Textarea.types";

export function Textarea({
  label,
  error,
  fullWidth = false,
  className,
  ...props
}: TextareaProps) {
  return (
    <div
      className={cn(
        styles.container,
        fullWidth && styles.fullWidth
      )}
    >
      {label && (
        <label className={styles.label}>
          {label}
        </label>
      )}

      <textarea
        className={cn(
          styles.textarea,
          error && styles.error,
          className
        )}
        {...props}
      />

      {error && (
        <span className={styles.errorMessage}>
          {error}
        </span>
      )}
    </div>
  );
}