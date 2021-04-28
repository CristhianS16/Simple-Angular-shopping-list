import {
  ShoppingAction,
  ShoppingActionTypes,
} from '../actions/shopping.actions';
import { ShoppingState } from '../models/shopping-state.model';

const initialState: ShoppingState = {
  list: [],
  loading: false,
  error: undefined,
};

export function ShoppingReducer(
  state: ShoppingState = initialState,
  action: ShoppingAction
) {
  switch (action.type) {
    case ShoppingActionTypes.LOAD_SHOPPING:
      return {
        ...state,
        loading: true,
      };
    case ShoppingActionTypes.LOAD_SHOPPING_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case ShoppingActionTypes.LOAD_SHOPPING_fAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ShoppingActionTypes.ADD_ITEM:
      return {
        ...state,
        loading: true,
      };
    case ShoppingActionTypes.ADD_ITEM_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false,
      };
    case ShoppingActionTypes.ADD_ITEM_fAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ShoppingActionTypes.DELETE_ITEM:
      return {
        ...state,
        loading: true,
      };
    case ShoppingActionTypes.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        list: state.list.filter(({ id }) => id !== action.payload),
        loading: false,
      };
    case ShoppingActionTypes.DELETE_ITEM_fAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
