import { toast } from 'react-toastify';

import{
  GET_USER_OFFERS_START,
  GET_USER_OFFERS_SUCCESS,
  GET_USER_OFFERS_FAILURE,
  CREATE_OFFER_START,
  CREATE_OFFER_SUCCESS,
  CREATE_OFFER_FAILURE
} from '../actions/offersAction';

const initialState = {
  userOffers: [],
  isFetchingOffers: false,
  isCreatingOffer: false
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_OFFERS_START:
      return{
        ...state,
        isFetchingOffers: true
      }
    case GET_USER_OFFERS_SUCCESS:
      return{
        ...state,
        userOffers: action.payload,
        isFetchingOffers: false,
      }
    case GET_USER_OFFERS_FAILURE:
      return{
        ...state,
        isFetchingOffers: false,
      }
    case CREATE_OFFER_START:
      return{
        ...state,
        isCreatingOffer: true,
      }
    case CREATE_OFFER_SUCCESS:
      toast.success('Offer was created successfully');
      return{
        ...state,
        isCreatingOffer: false
      }
    case CREATE_OFFER_FAILURE:
      toast.error(action.payload.message);
      return{
        ...state,
        isCreatingOffer: false
      }
    default:
      return state  
  }
}