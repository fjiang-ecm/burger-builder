import * as actionTypes from '../actions/actionTypes';


const initialState = {
    orders: [],
    loading: false,
    purchased: false
};

const purchaseInit = state => {
    return {
        ...state,
        purchased: false
    };
};

const purchaseBurgerStart = state => {
    return {
        ...state,
        loading: true
    };
};

const purchaseBurgerSuccess = (state, action) => {
    const newOrder = {
        ...action.orderData,
        id: action.orderId
    };

    return {
        ...state,
        loading: false,
        orders: state.orders.concat(newOrder),
        purchased: true
    };
};

const purchaseBurgerFail = state => {
    return {
        ...state,
        loading: false
    };
};

const fetchOrderStart = state => {
    return {
        ...state,
        loading: true
    };
};

const fetchOrderSuccess = (state, action) => {
    return {
        ...state,
        orders: action.orders,
        loading: false
    };
};

const fetchOrdersFail = state => {
    return {
        ...state,
        loading: false
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT: return purchaseInit(state);
        case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart(state);
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);
        case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFail(state);
        case actionTypes.FETCH_ORDERS_START: return fetchOrderStart(state);
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrderSuccess(state, action);
        case actionTypes.FETCH_ORDERS_FAIL: return fetchOrdersFail(state);
        default: return state;
    }
};

export default reducer;