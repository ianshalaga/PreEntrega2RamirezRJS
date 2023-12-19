import { Link } from "react-router-dom";

interface GameItemProps {
  name: string;
  image: string;
  url: string;
  description: string;
}

const GameItem: React.FC<GameItemProps> = ({
  name,
  image,
  url,
  description,
}) => {
  return (
    <Link to={url} className="flex flex-col items-center w-1/3 p-4">
      <h2 className="font-bold">{name}</h2>
      <img className="w-80 p-4" src={image} alt={name} />
      <p className="font-serif">{description}</p>
    </Link>
  );
};

export default GameItem;
