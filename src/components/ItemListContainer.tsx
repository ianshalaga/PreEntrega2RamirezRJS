import React from "react";
import { useEffect, useState } from "react";
import { dataPath, toUrlFormat, GameData } from "../utils/utils";
import GameList from "./GameList";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

interface ItemListContainerProps {
  item: string;
}

const ItemListContainer: React.FC<ItemListContainerProps> = ({ item }) => {
  const [data, setData] = useState([]);
  const { gameId } = useParams();

  useEffect(() => {
    fetch(dataPath)
      .then((response) => response.json())
      .then((data) => {
        const items = gameId
          ? data.filter((game: GameData) => toUrlFormat(game.name) === gameId)
          : data;
        setData(items);
      });
  }, [gameId]);

  return (
    <>
      {data && item === "game" && <GameList data={data} />}
      {data && item === "album" && <ItemList data={data} />}
    </>
  );
};

export default ItemListContainer;
