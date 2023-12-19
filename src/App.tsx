import "./App.css";
import "./styles/styles.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
// import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import { urls } from "./utils/routes";
// import { loadData } from "./utils/utils";
// import { useEffect } from "react";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto flex flex-col min-h-screen items-center bg-sky-100">
        <Header />
        <Main>
          <Routes>
            {/* Home: games list */}
            <Route
              path={urls.home}
              element={<ItemListContainer item={"game"} />}
              // element={<ItemListContainer item={"game"} filter={false} />}
            />
            {/* Store: albums list */}
            <Route
              path={urls.category}
              element={<ItemListContainer item={"album"} />}
            />
            {/* Store: albums list for each game */}
            <Route
              path={urls.category + "/:gameId"}
              element={<ItemListContainer item={"album"} />}
            />

            {/* Album: detail */}
            <Route
              path={urls.item + "/:albumId"}
              element={<ItemDetailContainer />}
            />
            {/* Automatic redirection */}
            <Route path="*" element={<Navigate to={urls.home} />} />
          </Routes>
        </Main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
