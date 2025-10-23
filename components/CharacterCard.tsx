"use client";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { Character } from "@/types/character";
import { setSelectedCharacter } from "@/store/selected-character-slice";
import type { RootState } from "@/store/store";
import styles from "./CharacterCard.module.css";

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const dispatch = useDispatch();
  const selectedCharacter = useSelector(
    (state: RootState) => state.selectedCharacter.character
  );

  const isActive = selectedCharacter?.id === character.id;

  const handleClick = () => {
    dispatch(setSelectedCharacter(character));
  };

  return (
    <div
      className={`${styles.card} ${isActive ? styles.active : ""}`}
      onClick={handleClick}
    >
      <h3 className={styles.name}>{character.name}</h3>
      <div className={styles.imageContainer}>
        <Image
          src={character.image}
          alt={character.name}
          width={145}
          height={145}
          className={styles.image}
        />
      </div>
      <div className={styles.likeSection}>
        <AiOutlineHeart size={24} />
        Like
      </div>
    </div>
  );
}
