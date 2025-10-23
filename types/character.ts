export interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  gender: string;
  episode: string[];
  image: string;
}
