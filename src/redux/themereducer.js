const initialState = {
  isNightMode: true,
  isFrenchMode:true,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        isNightMode: !state.isNightMode,
      };
    case "TOGGLE_LANGUAGE":
      return {
        ...state,
        isFrenchMode: !state.isFrenchMode,
      };

    default:
      return state;
  }
};

export default themeReducer;
