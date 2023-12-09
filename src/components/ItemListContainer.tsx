import React from "react";

interface ItemListContainerProps {
  greeting: string;
}

const ItemListContainer: React.FC<ItemListContainerProps> = ({ greeting }) => {
  return <p>{greeting}</p>;
};

export default ItemListContainer;
