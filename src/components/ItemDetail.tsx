import { albumsImagesPath, imagesExtension, AlbumData } from "../utils/utils";
import SongList from "./SongList";
import { useNavigate } from "react-router-dom";

interface ItemDetailProps {
  item: AlbumData;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ item }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <article className="flex flex-col items-center p-4">
      <div className="flex flex-row justify-around items-center">
        <div className="flex flex-col justify-around">
          <h2 className="font-bold">{item.name}</h2>
          <img
            className="w-80 p-4"
            src={albumsImagesPath + item.image + imagesExtension}
            alt={item.name}
          />
        </div>
        <div className="flex flex-col justify-between w-1/2">
          <p className="font-light p-4">{item.description}</p>
          <p className="p-4 font-extrabold">{item.price}</p>
        </div>
      </div>
      <button
        onClick={handleGoBack}
        className="bg-sky-900 text-sky-50 font-semibold px-2 py-1 rounded-md"
      >
        Volver
      </button>
      <p className="p-4">Lista de canciones:</p>
      <SongList songs={item.songs} />
    </article>
  );
};

export default ItemDetail;
