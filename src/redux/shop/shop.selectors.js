import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectColletions = createSelector(
    [selectShop],
    shop => shop.collections
)