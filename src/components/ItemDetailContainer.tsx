import { useEffect, useState } from "react";
import { dataPath, toUrlFormat, GameData, AlbumData } from "../utils/utils";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { albumId: gameUrl } = useParams();

  let gameName = "";
  let albumName = "";

  if (gameUrl) {
    const url = gameUrl.split("_");
    gameName = url[0];
    albumName = url[1];
  }

  useEffect(() => {
    fetch(dataPath)
      .then((response) => response.json())
      .then((data) => {
        const game = data.find(
          (game: GameData) => toUrlFormat(game.name) === gameName
        );
        const album = game.albums.find(
          (album: AlbumData) => toUrlFormat(album.name) === albumName
        );
        setItem(album);
      });
  }, [gameUrl]);

  return item && <ItemDetail item={item} />;
};

export default ItemDetailContainer;
