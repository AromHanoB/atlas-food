import { cn } from "@/utils/cn";

import styles from "./Card.module.css";
import type { CardProps, CardSectionProps } from "./Card.types";

function Root({
  children,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(styles.card, className)}
      {...props}
    >
      {children}
    </div>
  );
}

function Header({
  children,
}: CardSectionProps) {
  return (
    <div className={styles.header}>
      {children}
    </div>
  );
}

function Body({
  children,
}: CardSectionProps) {
  return (
    <div className={styles.body}>
      {children}
    </div>
  );
}

function Footer({
  children,
}: CardSectionProps) {
  return (
    <div className={styles.footer}>
      {children}
    </div>
  );
}

export const Card = Object.assign(Root, {
  Header,
  Body,
  Footer,
});