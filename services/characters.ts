import { ApiResponse } from "@/types/api-response";

const API_BASE_URL = "https://rickandmortyapi.com/api";

export const getCharacters = async (page: number = 1): Promise<ApiResponse> => {
  const response = await fetch(`${API_BASE_URL}/character?page=${page}`);
  if (!response.ok) {
    throw new Error("Failed to fetch characters");
  }
  return response.json();
};
