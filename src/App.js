import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  AboutContainer,
  CreateContainer,
  Header,
  MainContainer,
} from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";

const App = () => {
  const [, dispatch] = useStateValue();
  const { hash, pathname } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      await getAllFoodItems().then((data) => {
        dispatch({
          type: actionType.SET_FOOD_ITEMS,
          foodItems: data,
        });
      });
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (!hash) {
      return;
    }

    const id = hash.replace("#", "");
    const section = document.getElementById(id);

    if (!section) {
      return;
    }

    const headerOffset = 96;
    const elementTop = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementTop - headerOffset,
      behavior: "smooth",
    });
  }, [hash, pathname]);

  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/about" element={<AboutContainer />} />
            <Route path="/*" element={<MainContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
