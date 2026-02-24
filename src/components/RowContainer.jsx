import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();
  const [items, setItems] = useState([]);

  const [{ cartItems }, dispatch] = useStateValue();

  useEffect(() => {
    if (!flag || typeof scrollValue !== "number" || !rowContainer.current) {
      return;
    }

    rowContainer.current.scrollLeft = scrollValue;
  }, [flag, scrollValue]);

  useEffect(() => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  }, [dispatch, items]);
  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-3 my-12 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className="w-275 h-[210px] min-w-[275px] md:w-300 md:min-w-[300px] md:h-[225px] bg-cardOverlay rounded-lg p-3 px-4 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-between relative"
          >
            <div className="w-full flex items-start justify-between">
              <motion.div
                className="w-28 h-28 md:w-32 md:h-32 mt-1 drop-shadow-2xl"
                whileHover={{ scale: 1.2 }}
              >
                <img
                  src={item?.imageURL}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
                onClick={() => setItems([...cartItems, item])}
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>

            <div className="w-full flex flex-col items-end justify-end pr-1 md:pr-2">
              <p className="text-textColor font-semibold text-base md:text-lg pr-2 md:pr-3 text-right">
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500 pr-2 md:pr-3 text-right">
                {item?.calories}
              </p>
              <div className="flex items-center mt-1">
                <p className="text-lg text-headingColor font-semibold pr-2 md:pr-3 text-right">
                  <span className="text-sm text-red-500">$</span>
                  {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} className="h-340" alt="" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
