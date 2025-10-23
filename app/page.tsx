"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getCharacters } from "@/services/characters";
import { Character } from "@/types/character";

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getCharacters(1);
        setCharacters(data.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Rick & Morty Characters</h1>
      <div>
        {characters.map((character) => (
          <div key={character.id}>
            <Image
              src={character.image}
              alt={character.name}
              width={100}
              height={100}
            />
            <h3>{character.name}</h3>
            <p>Status: {character.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
