import axios from "axios";
import { useContext, useReducer } from "react";
import MainContext from "./context/MainContext";

function App() {
  const { state, dispatch } = useContext(MainContext);

  return (
    <div
      className="h-screen place-items-center
      grid overflow-hidden grid-cols-1"
    >
      <div className="card">
        <img
          className="card-img"
          src="https://www.deckofcardsapi.com/static/img/KH.png"
          alt=""
          srcSet=""
        />{" "}
        <img
          className="card-img"
          src="https://www.deckofcardsapi.com/static/img/KH.png"
          alt=""
          srcSet=""
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <button
          onClick={() => {
            dispatch({ type: "increment" });
          }}
          className="btn"
        >
          New Game {state.count}
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "TOGGLE_THEME",
            });
          }}
          className="btn"
        >
          Hit {state.theme}
        </button>
        <button className="btn">Stand</button>
      </div>
      <div className="card">
        <img
          className="card-img"
          src="https://www.deckofcardsapi.com/static/img/KH.png"
          alt=""
          srcSet=""
        />{" "}
        <img
          className="card-img"
          src="https://www.deckofcardsapi.com/static/img/KH.png"
          alt=""
          srcSet=""
        />
      </div>
    </div>
  );
}

export default App;
