"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CharacterCard from "@/components/CharacterCard";
import CharacterDetail from "@/components/CharacterDetail";
import SearchInput from "@/components/SearchInput";
import { fetchCharacters } from "@/store/characters-slice";
import type { RootState, AppDispatch } from "@/store/store";
import styles from "./page.module.css";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { characters, loading, error } = useSelector(
    (state: RootState) => state.characters
  );
  const selectedCharacter = useSelector(
    (state: RootState) => state.selectedCharacter.character
  );

  useEffect(() => {
    dispatch(fetchCharacters({ page: 1 }));
  }, [dispatch]);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <aside className={styles.detail}>
        {selectedCharacter ? (
          <CharacterDetail character={selectedCharacter} />
        ) : (
          <div className={styles.emptyState}>
            <p className={styles.emptyText}>🛸</p>
            <p className={styles.emptyMessage}>Select a character</p>
            <p className={styles.emptySubtext}>to view their details</p>
          </div>
        )}
      </aside>
      <main className={styles.gridContainer}>
        <SearchInput />
        <div className={styles.grid}>
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </main>
    </div>
  );
}
