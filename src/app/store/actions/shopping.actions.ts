import { Action } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export enum ShoppingActionTypes {
  LOAD_SHOPPING = '{SHOPPING} Load Shopping',
  LOAD_SHOPPING_SUCCESS = '{SHOPPING} Load Shopping Success',
  LOAD_SHOPPING_fAILURE = '{SHOPPING} Load Shopping Failure',
  ADD_ITEM = '[SHOPPING] Add Item',
  ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
  ADD_ITEM_fAILURE = '[SHOPPING] Add Item Failure',
  DELETE_ITEM = '[SHOPPING] Delete item',
  DELETE_ITEM_SUCCESS = '[SHOPPING] Delete item Success',
  DELETE_ITEM_fAILURE = '[SHOPPING] Delete item Failure',
}

export class LoadShoppingAction implements Action {
  readonly type: string = ShoppingActionTypes.LOAD_SHOPPING;

  constructor(public payload?: ShoppingItem) {}
}

export class LoadShoppingSuccessAction implements Action {
  readonly type: string = ShoppingActionTypes.LOAD_SHOPPING_SUCCESS;

  constructor(public payload: ShoppingItem[]) {}
}

export class LoadShoppingFailureAction implements Action {
  readonly type: string = ShoppingActionTypes.LOAD_SHOPPING_fAILURE;

  constructor(public payload: Error) {}
}

export class AddItemAction implements Action {
  readonly type: string = ShoppingActionTypes.ADD_ITEM;

  constructor(public payload: ShoppingItem) {}
}

export class AddItemSuccessAction implements Action {
  readonly type: string = ShoppingActionTypes.ADD_ITEM_SUCCESS;

  constructor(public payload: ShoppingItem) {}
}

export class AddItemFailureAction implements Action {
  readonly type: string = ShoppingActionTypes.ADD_ITEM_fAILURE;

  constructor(public payload: Error) {}
}

export class DeleteItemAction implements Action {
  readonly type: string = ShoppingActionTypes.DELETE_ITEM;

  constructor(public payload: string) {}
}

export class DeleteItemSuccessAction implements Action {
  readonly type: string = ShoppingActionTypes.DELETE_ITEM_SUCCESS;

  constructor(public payload: string) {}
}

export class DeleteItemFailureAction implements Action {
  readonly type: string = ShoppingActionTypes.DELETE_ITEM_fAILURE;

  constructor(public payload: Error) {}
}

export type ShoppingAction =
  | LoadShoppingAction
  | LoadShoppingSuccessAction
  | LoadShoppingFailureAction
  | AddItemAction
  | AddItemSuccessAction
  | AddItemFailureAction
  | DeleteItemAction
  | DeleteItemSuccessAction
  | DeleteItemFailureAction;
