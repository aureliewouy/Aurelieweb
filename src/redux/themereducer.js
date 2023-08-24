const initialState = {
    isNightMode: true,
  };
  
  const themeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_THEME':
        return {
          ...state,
          isNightMode: !state.isNightMode,
        };
      default:
        return state;
    }
  };
  
  export default themeReducer;
  