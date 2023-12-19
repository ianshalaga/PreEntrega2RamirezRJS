import { Link } from "react-router-dom";

interface ItemProps {
  name: string;
  image: string;
  url: string;
}

const Item: React.FC<ItemProps> = ({ name, image, url }) => {
  return (
    <Link to={url} className="flex flex-col items-center flex-wrap">
      <article className="flex flex-col items-center p-4">
        <h2 className="font-bold">{name}</h2>
        <img className="w-80 p-4" src={image} alt={name} />
      </article>
    </Link>
  );
};

export default Item;
