const initialState = {
  expenses: [],
};

export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    default:
      return state;
  }
};
