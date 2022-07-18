import { FETCH_DATA_PRODUK, FETCH_USER_DETAIL, FETCH_DETAIL_PRODUK} from "../Action/Types";

const initialState = {
  user_data: [],
  data_produk: [],
  detail_produk: [],
};

const ReducerHome = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DETAIL:
      return {
        ...state,
        user_data: action.userData.data,
      };

    case FETCH_DATA_PRODUK:
      return{
        ...state,
        data_produk: action.dataProduk.data,
      }
    
    case FETCH_DETAIL_PRODUK:
        return{
          ...state,
          detail_produk: action.detailProduk.data,
        }
    
    default:
      return state;
  }
};



export default (ReducerHome);
