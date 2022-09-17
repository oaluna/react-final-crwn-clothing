import OrderActionTypes from './order.types/';

export const fetchOrdersStart = () => ({
    type: OrderActionTypes.FETCH_ORDERS_START
});

export const fetchOrdersSuccess = () => ({
    type: OrderActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: orders
});

export const fetchOrdersFailure = () => ({
    type: OrderActionTypes.FETaqCCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});