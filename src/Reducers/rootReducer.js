import {
  FETCHING_PIC_START,
  FETCHING_PIC_SUCCESS,
  FETCHING_PIC_FAILURE,
} from "../Actions";

const initialState = {
  pictures: {
      large:'https://cdn.myanimelist.net/images/anime/1519/91488l.jpg'
    },
  isFetching: false,
  error: "",
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PIC_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_PIC_SUCCESS:
      return {
        ...state,
        pictures:{
            large:action.payload
        },
        isFetching:false        

      };
    case FETCHING_PIC_FAILURE:
      return {
        ...state,
        error: "ERROR eRROR ERRor errOR error",
        isFetching:false,
      };
    default:
      return state;
  }
};
