import { FETCH_DATA_PRODUK } from "../Action/Types";

const initialState = {
  user_data: [],
};

const ReducerHome = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_PRODUK:
      return {
        ...state,
        user_data: action.user_data.data,
      };

    default:
      return state;
  }
};

export default ReducerHome;
