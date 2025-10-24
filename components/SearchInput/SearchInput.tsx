import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { fetchCharacters } from "@/store/characters-slice";
import type { AppDispatch } from "@/store/store";
import styles from "./SearchInput.module.css";

export default function SearchInput() {
  const dispatch = useDispatch<AppDispatch>();
  const [searchTerm, setSearchTerm] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleSearch = (value: string) => {
    setSearchTerm(value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      dispatch(fetchCharacters({ page: 1, name: value || undefined }));
    }, 500);
  };

  return (
    <div className={styles.searchContainer}>
      <AiOutlineSearch className={styles.icon} size={20} />
      <input
        type="text"
        placeholder="Find your character..."
        className={styles.input}
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
