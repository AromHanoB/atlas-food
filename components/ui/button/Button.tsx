import { cn } from "@/utils/cn";
import { Spinner } from "../spinner";
import styles from "./Button.module.css";
import type { ButtonProps } from "./Button.types";

export function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const classes = cn(
    styles.button,
    styles[variant],
    styles[size],
    loading && styles.loading,
    fullWidth && styles.fullWidth,
    className,
  );

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {loading ? (
        <Spinner size="sm" />
      ) : (
        leftIcon && <span className={styles.icon}>{leftIcon}</span>
      )}

      <span>{children}</span>

      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </button>
  );
}
