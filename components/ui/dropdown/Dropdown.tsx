"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./Dropdown.module.css";
import type { DropdownProps } from "./Dropdown.types";

export function Dropdown({
  trigger,
  items,
}: DropdownProps) {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <div
      ref={ref}
      className={styles.container}
    >
      <div onClick={() => setOpen(!open)}>
        {trigger}
      </div>

      {open && (
        <div className={styles.menu}>
          {items.map((item) => (
            <button
              key={item.label}
              className={styles.item}
              disabled={item.disabled}
              onClick={() => {
                item.onClick();
                setOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}