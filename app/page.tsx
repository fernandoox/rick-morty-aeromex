"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CharacterCard from "@/components/CharacterCard";
import SearchInput from "@/components/SearchInput";
import { fetchCharacters } from "@/store/characters-slice";
import type { RootState, AppDispatch } from "@/store/store";
import styles from "./page.module.css";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { characters, loading, error } = useSelector(
    (state: RootState) => state.characters
  );

  useEffect(() => {
    dispatch(fetchCharacters({ page: 1 }));
  }, [dispatch]);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <aside className={styles.detail}>
        <p>datelle del personaje</p>
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
