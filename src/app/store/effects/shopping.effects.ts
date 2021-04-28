import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ShoppingService } from 'src/app/services/shopping.service';
import {
  AddItemAction,
  AddItemFailureAction,
  AddItemSuccessAction,
  DeleteItemAction,
  DeleteItemSuccessAction,
  LoadShoppingAction,
  LoadShoppingFailureAction,
  LoadShoppingSuccessAction,
  ShoppingActionTypes,
} from '../actions/shopping.actions';

@Injectable({
  providedIn: 'root',
})
export class ShoppingEffects {
  constructor(
    private actions$: Actions,
    private shoppingService: ShoppingService
  ) {}

  loadShopping$ = createEffect(() =>
    this.actions$.pipe(
      ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
      mergeMap(() =>
        this.shoppingService.getShoppingItems().pipe(
          map((shoppingItems) => new LoadShoppingSuccessAction(shoppingItems)),
          catchError((error) => of(new LoadShoppingFailureAction(error)))
        )
      )
    )
  );

  addShoppingItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
      mergeMap(({ payload }) =>
        this.shoppingService.addShoppingItems(payload).pipe(
          map((shoppingItems) => new AddItemSuccessAction(shoppingItems)),
          catchError((error) => of(new AddItemFailureAction(error)))
        )
      )
    )
  );

  deleteShoppingItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType<DeleteItemAction>(ShoppingActionTypes.DELETE_ITEM),
      mergeMap(({ payload }) =>
        this.shoppingService.deleteShoppingItems(payload).pipe(
          map(() => new DeleteItemSuccessAction(payload)),
          catchError((error) => of(new AddItemFailureAction(error)))
        )
      )
    )
  );
}
