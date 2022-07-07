import { FETCH_DATA_PRODUK, FETCH_USER_DETAIL} from "../Action/Types";

const initialState = {
  user_data: [],
};

const ReducerHome = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DETAIL:
      return {
        ...state,
        user_data: action.userData.data,
      };

    default:
      return state;
  }
};

export default ReducerHome;
