"use client";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import CharacterCard from "@/components/CharacterCard";
import CharacterDetail from "@/components/CharacterDetail";
import SearchInput from "@/components/SearchInput";
import Favorites from "@/components/Favorites";
import { fetchCharacters } from "@/store/characters-slice";
import type { RootState, AppDispatch } from "@/store/store";
import styles from "./page.module.css";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const initialized = useRef(false);
  const { characters, loading, error } = useSelector(
    (state: RootState) => state.characters
  );
  const selectedCharacter = useSelector(
    (state: RootState) => state.selectedCharacter.character
  );

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      dispatch(fetchCharacters({ page: 1 }));
    }
  }, [dispatch]);

  const renderCharactersContent = () => {
    if (loading) {
      return <div className={styles.loading}>Loading...</div>;
    }

    if (error === "NO_RESULTS") {
      return (
        <div className={styles.error}>
          <p>No characters found</p>
          <p className={styles.errorSubtext}>Try a different search term</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className={styles.error}>
          <p>Failed to fetch characters</p>
          <p className={styles.errorSubtext}>Please try again later</p>
        </div>
      );
    }

    return (
      <div className={styles.grid}>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    );
  };

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
        {renderCharactersContent()}
        <Favorites />
      </main>
    </div>
  );
}
