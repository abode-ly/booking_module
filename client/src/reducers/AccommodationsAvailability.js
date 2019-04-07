import {
  FETCH_ACCOMMODATIONS_BEGIN,
  FETCH_ACCOMMODATIONS_SUCCESS,
  FETCH_ACCOMMODATIONS_FAILURE,
} from '../actions/AccommodationAvailabilityActions';

const initialState = {
  availability: [],
  loading: false,
  error: null,
  appState: {
    checkInDate: null,
    checkOutDate: null,
    currentDay: new Date().getDay(),
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getYear(),
    checkInSelected: false,
    checkOutSelected: false,
    priceListDisplay: false,
  },
};

export default function accommodationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ACCOMMODATIONS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_ACCOMMODATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload.accommodation[0],
        availability: action.payload.availability,
      };

    case FETCH_ACCOMMODATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        availability: [],
      };

    default:
      return state;
  }
}
