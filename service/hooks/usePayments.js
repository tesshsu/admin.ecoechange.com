import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import * as PAYMENT_ACTIONS from '../actions/payments';

export default function usePayments() {
  const dispatch = useDispatch();


  const listPayments = useCallback(() => {
    dispatch(PAYMENT_ACTIONS.fetchPayments(page = 1, perPage = 18))
  }, [dispatch]);

  const createPayment = useCallback(async (payload) => {
    try {
      return await dispatch(PAYMENT_ACTIONS.createPayment(payload));
    } catch (err) {
      console.log("create_payment_error", err);
    }
  }, [dispatch]);


  return {
    createPayment,
    listPayments
  };
}
