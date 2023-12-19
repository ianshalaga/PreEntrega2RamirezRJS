import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { useState } from "react";
// import { useParams } from "react-router-dom";

const CartWidget = () => {
  // const [counter, setCounter] = useState(0);
  const counter = 0;

  // const { album } = useParams();

  return (
    <div className="flex justify-center items-center">
      {/* <p>{album}</p> */}
      <a className="col-span-1 flex justify-center items-center" href="#">
        {/* // <a className="col-span-1" href="#"> */}
        <ShoppingCartIcon className="" />
        {counter > 0 ? (
          <p className="flex justify-center items-center bg-orange-400 rounded-full w-auto p-1">
            {counter}
          </p>
        ) : (
          <p className="flex justify-center items-center rounded-full w-6 h-6">
            {counter}
          </p>
        )}
      </a>
    </div>
  );
};

export default CartWidget;
