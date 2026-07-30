import { cn } from "@/utils/cn";

import styles from "./Input.module.css";
import type { InputProps } from "./Input.types";

export function Input({
  label,
  error,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  ...props
}: InputProps) {
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

      <div
        className={cn(
          styles.wrapper,
          error && styles.error
        )}
      >
        {leftIcon && (
          <span className={styles.icon}>
            {leftIcon}
          </span>
        )}

        <input
          className={cn(
            styles.input,
            className
          )}
          {...props}
        />

        {rightIcon && (
          <span className={styles.icon}>
            {rightIcon}
          </span>
        )}
      </div>

      {error && (
        <span className={styles.errorMessage}>
          {error}
        </span>
      )}
    </div>
  );
}