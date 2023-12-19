import {
  GameData,
  toUrlFormat,
  albumsImagesPath,
  imagesExtension,
} from "../utils/utils";
import Item from "./Item";
import { urls } from "../utils/routes";
// import { useParams } from "react-router-dom";

interface ItemListProps {
  data: GameData[];
  // filter: boolean;
}

const ItemList: React.FC<ItemListProps> = ({ data }) => {
  // const { game: gameUrl } = useParams();

  return (
    <>
      <section className="flex flex-row flex-wrap justify-around w-full">
        {data.map((game) =>
          game.albums.map((album) => (
            <Item
              key={game.id + game.name + album.id + album.name}
              name={album.name}
              image={albumsImagesPath + album.image + imagesExtension}
              url={
                urls.item +
                "/" +
                toUrlFormat(game.name) +
                "_" +
                toUrlFormat(album.name)
              }
            />
          ))
        )}

        {/* {filter
          ? data.map(
              (game) =>
                toUrlFormat(game.name) === gameUrl &&
                game.albums.map((album) => (
                  <Item
                    key={game.id + game.name + album.id + album.name}
                    name={album.name}
                    image={albumsImagesPath + album.image + imagesExtension}
                    url={
                      urls.item +
                      "/" +
                      toUrlFormat(game.name) +
                      "_" +
                      toUrlFormat(album.name)
                    }
                  />
                ))
            )
          : data.map((game) =>
              game.albums.map((album) => (
                <Item
                  key={game.id + game.name + album.id + album.name}
                  name={album.name}
                  image={albumsImagesPath + album.image + imagesExtension}
                  url={
                    urls.item +
                    "/" +
                    toUrlFormat(game.name) +
                    "_" +
                    toUrlFormat(album.name)
                  }
                />
              ))
            )} */}
      </section>
    </>
  );
};

export default ItemList;
