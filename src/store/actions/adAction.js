import axios from 'axios';

const URL = "http://71.65.239.221:5000";

// ------------------------------------ Get All Ads ------------------------------------

// "GET /api/ads" gets all ads

// ------------------------------------ Get Ad by ID ------------------------------------

export const GET_AD_START = "GET_AD_START";
export const GET_AD_SUCCESS = "GET_AD_SUCCESS";
export const GET_AD_FAILURE = "GET_AD_FAILURE";

export const getAd = adId => dispatch => {
    dispatch({ type: GET_AD_START });
    axios.get(`${URL}/api/ads/${adId}`)
        .then(res => {
            dispatch({ type: GET_AD_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: GET_AD_FAILURE, payload: err.response.data })
        });
}

// ------------------------------------ Create Ad ------------------------------------

export const CREATE_AD_START = "CREATE_AD_START";
export const CREATE_AD_SUCCESS = "CREATE_AD_SUCCESS";
export const CREATE_AD_FAILURE = "CREATE_AD_FAILURE";

export const createAd = ad => dispatch => {
    dispatch({ type: CREATE_AD_START });
    axios.post(`${URL}/api/ads`, ad)
        .then(res => {
            dispatch({ type: CREATE_AD_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: CREATE_AD_FAILURE, payload: err.response.data })
        });
}

// ------------------------------------ Get User Ads ------------------------------------

// "GET /api/ads/myads" gets personal users ads (provide token)