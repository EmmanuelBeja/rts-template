import { ActionType } from '../action-types'
import { Action } from '../actions/'

interface SettingsState {
  loading: boolean;
  error: string | null;
  person: {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    address?: Address;
    verification?: Verification;
  } | undefined;
}
interface Address {
  id?: number;
  street?: string;
  suite?: string;
  city?: string;
  zipcode?: string;
}
interface Verification {
  id?: number;
  identity?: string;
  payment_method?: string;
  address?: string;
  phone?: string;
}

const initialState = {
  loading: false,
  error: null,
  person: {

  },
}

const reducer = (state: SettingsState = initialState, action: Action): SettingsState => {
  switch (action.type) {
    case ActionType.GET_PERSON_REQUEST:
      return { loading: true, error: null, person: state.person }
    case ActionType.GET_PERSON_SUCCESS:
      return {
        loading: false,
        error: null,
        person: {
          ...state.person,
          ...action.payload,
        }
      }
    case ActionType.GET_PERSON_ERROR:
      return { loading: false, error: action.payload, person: {} }

    case ActionType.UPDATE_PERSON_REQUEST:
      return { loading: true, error: null, person: state.person }
    case ActionType.UPDATE_PERSON_SUCCESS:
      return {
        loading: false,
        error: null,
        person: action.payload,
      }
    case ActionType.UPDATE_PERSON_ERROR:
      return { loading: false, error: action.payload, person: {} }

    case ActionType.GET_ADDRESS_REQUEST:
      return { loading: true, error: null, person: state.person }
    case ActionType.GET_ADDRESS_SUCCESS:
      return {
        loading: false,
        error: null,
        person: {
          ...state.person,
          address: action.payload
        }
      }
    case ActionType.GET_ADDRESS_ERROR:
      return { loading: false, error: action.payload, person: {} }

    case ActionType.GET_VERIFICATION_REQUEST:
      return { loading: true, error: null, person: state.person }
    case ActionType.GET_VERIFICATION_SUCCESS:
      return {
        loading: false,
        error: null,
        person: {
          ...state.person,
          verification: action.payload
        }
      }
    case ActionType.GET_VERIFICATION_ERROR:
      return { loading: false, error: action.payload, person: {} }
    default:
      return state
  }
}

export default reducer