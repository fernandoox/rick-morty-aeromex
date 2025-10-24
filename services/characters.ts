import { ApiResponse } from "@/types/api-response";

const API_BASE_URL = "https://rickandmortyapi.com/api";

export const getCharacters = async (
  page: number = 1,
  name?: string
): Promise<ApiResponse> => {
  const params = new URLSearchParams();
  params.append("page", page.toString());

  if (name && name.trim()) {
    params.append("name", name.trim());
  }

  const response = await fetch(`${API_BASE_URL}/character?${params.toString()}`);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("NO_RESULTS");
    }
    throw new Error("FETCH_ERROR");
  }
  return response.json();
};
