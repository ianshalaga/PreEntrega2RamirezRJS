export const dataPath = "/src/data/data.json";

export const gamesImagesPath = "/images/games/";
export const albumsImagesPath = "/images/albums/";
export const imagesExtension = ".webp";

interface CharacterData {
  name: string;
}

interface StageData {
  name: string;
  characters: CharacterData[];
}

export interface SongData {
  id: number;
  name: string;
  duration: string;
  notes: string;
  stages: StageData[];
}

export interface AlbumData {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  songs: SongData[];
}

export interface GameData {
  id: number;
  game: string;
  name: string;
  image: string;
  description: string;
  albums: AlbumData[];
}

/**
 * @param {string} input - Input string. Can contain special characters.
 * @returns {string} - URL format string. No special characters. Words join with "-".
 */
export function toUrlFormat(input: string): string {
  const OnlyAlphanumericCharacters = input
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .toLowerCase();
  const urlFormat = OnlyAlphanumericCharacters.replace(/\s+/g, "-");
  return urlFormat;
}
