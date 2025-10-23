import Image from "next/image";
import { Character } from "@/types/character";
import styles from "./CharacterDetail.module.css";

interface CharacterDetailProps {
  character: Character;
}

export default function CharacterDetail({ character }: CharacterDetailProps) {
  const statusColors: Record<string, string> = {
    alive: "#76dd00",
    dead: "#d63d2e",
    unknown: "#9e9e9e",
  };

  const getStatusColor = (status: string): string => {
    return statusColors[status.toLowerCase()] || statusColors.unknown;
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <div className={styles.statusIndicator}>
          <span
            className={styles.statusDot}
            style={{ background: getStatusColor(character.status) }}
          ></span>
          <span className={styles.statusText}>
            {character.status.toUpperCase()}
          </span>
        </div>

        <Image
          src={character.image}
          alt={character.name}
          fill
          className={styles.image}
        />

        <div className={styles.infoOverlay}>
          <h2 className={styles.name}>{character.name}</h2>
          <p className={styles.species}>{character.species}</p>
          <p className={styles.type}>{character.type}</p>

          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
              <span className={styles.label}>Origin</span>
              <span className={styles.value}>{character.origin.name}</span>
            </div>

            <div className={styles.detailItem}>
              <span className={styles.label}>Location</span>
              <span className={styles.value}>{character.location.name}</span>
            </div>

            <div className={styles.detailItem}>
              <span className={styles.label}>Gender</span>
              <span className={styles.value}>{character.gender}</span>
            </div>

            <div className={styles.detailItem}>
              <span className={styles.label}>Episodes</span>
              <span className={styles.value}>{character.episode.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
