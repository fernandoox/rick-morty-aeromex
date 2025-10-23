import { AiOutlineSearch } from "react-icons/ai";
import styles from "./SearchInput.module.css";

export default function SearchInput() {
  return (
    <div className={styles.searchContainer}>
      <AiOutlineSearch className={styles.icon} size={20} />
      <input
        type="text"
        placeholder="Find your character..."
        className={styles.input}
      />
    </div>
  );
}
