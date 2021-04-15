// Create Redux action types
import * as API from "../../api";
import * as LOADING_OVERLAY_ACTIONS from './loadingOverlay';

export const GET_PAYMENT = 'GET_PAYMENT'
export const GET_PAYMENT_SUCCESS = 'GET_PAYMENT_SUCCESS'
export const GET_PAYMENT_FAILURE = 'GET_PAYMENT_FAILURE'

export const GET_PAYMENTS = 'GET_PAYMENTS'
export const GET_PAYMENTS_SUCCESS = 'GET_PAYMENTS_SUCCESS'
export const GET_PAYMENTS_FAILURE = 'GET_PAYMENTS_FAILURE'


export const CREATE_PAYMENT = 'CREATE_PAYMENT';
export const CREATE_PAYMENT_SUCCESS = 'CREATE_PAYMENT_SUCCESS';
export const CREATE_PAYMENT_FAILURE = 'CREATE_PAYMENT_FAILURE';


// Create Redux action creators that return an action
export const getPayment = () => ({
    type: GET_PAYMENT,
});

export const getPaymentSuccess = (response) => ({
    type: GET_PAYMENT_SUCCESS,
    payload: response,
});

export const getPaymentFailure = () => ({
    type: GET_PAYMENT_FAILURE,
});


export const getPayments = () => ({
    type: GET_PAYMENTS,
})

export const getPaymentsSuccess = (response) => ({
    type: GET_PAYMENTS_SUCCESS,
    payload: response,
})

export const getPaymentsFailure = () => ({
    type: GET_PAYMENTS_FAILURE,
})

export const createPaymentAction = () => ({
    type: CREATE_PAYMENT,
})

export const createPaymentSuccess = (response) => ({
    type: CREATE_PAYMENT_SUCCESS,
    payload: response,
})

export const createPaymentFailure = () => ({
    type: CREATE_PAYMENT_FAILURE,
})

// Combine them all in an asynchronous thunk
export function fetchPayments(page = 1, perPage = 20, owner = undefined) {
    return async (dispatch) => {
        dispatch(getPayments())

        try {
            const response = await API.Payments.list(perPage, page, owner);

            if(response.data){
                dispatch(getPaymentsSuccess(response));
            }else{
                dispatch(getPaymentsFailure())
            }

        } catch (error) {
            dispatch(getPaymentsFailure())
        }
    }
}

export function fetchPayment(id) {
    return async (dispatch) => {
        dispatch(getPayment())

        try {
            const response = await API.Payments.get(id);
            dispatch(getPaymentSuccess(response));

        } catch (error) {
            dispatch(getPaymentFailure())
        }
    }
}

export function createPayment(payload) {
    return async (dispatch) => {
        dispatch(createPaymentAction())
        try {
            const response = await API.Payments.create(
                payload
            );
            dispatch(createPaymentSuccess(response));
            return response;
        } catch (err) {
            await dispatch(createPaymentFailure());
            throw err;
        } finally {
            dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
        }
    };
}



