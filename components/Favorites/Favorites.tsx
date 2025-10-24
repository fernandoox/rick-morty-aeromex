"use client";

import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import styles from "./Favorites.module.css";

export default function Favorites() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const favorites = useSelector((state: RootState) => state.favorites.characters);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className={styles.container}>
      <button
        className={`${styles.toggleButton} ${isOpen ? styles.active : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        FAVS
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <ul className={styles.list}>
            {favorites.map((character) => (
              <li key={character.id} className={styles.listItem}>
                {character.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
