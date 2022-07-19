import {
  FETCH_DATA_PRODUK,
  FETCH_USER_DETAIL,
  FETCH_DETAIL_PRODUK,
  FETCH_TRANSACTION_SELLER,
} from "../Action/Types";

const initialState = {
  user_data: [],
  data_produk: [],
  detail_produk: [],
  transaksi_seller: [],
};

const ReducerHome = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DETAIL:
      return {
        ...state,
        user_data: action.userData.data,
      };

    case FETCH_DATA_PRODUK:
      return {
        ...state,
        data_produk: action.dataProduk.data,
      };

    case FETCH_DETAIL_PRODUK:
      return {
        ...state,
        detail_produk: action.detailProduk.data,
      };

    case FETCH_TRANSACTION_SELLER:
      return {
        ...state,
        transaksi_seller: action.transaksiSeller.data,
      };

    default:
      return state;
  }
};

export default ReducerHome;
