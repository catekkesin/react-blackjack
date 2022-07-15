const initialState = {
  count: 0,
  theme: "dark",
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
  }
};

export { initialState, reducer };
