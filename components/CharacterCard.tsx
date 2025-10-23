import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Character } from "@/types/character";
import styles from "./CharacterCard.module.css";

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{character.name.toUpperCase()}</h3>
      <div className={styles.imageContainer}>
        <Image
          src={character.image}
          alt={character.name}
          width={145}
          height={145}
          className={styles.image}
        />
      </div>
      <button className={styles.likeButton}>
        <AiOutlineHeart size={20} />
        Like
      </button>
    </div>
  );
}
