import { ActionType } from '../action-types'
// PERSON
interface GetPersonRequestAction {
  type: ActionType.GET_PERSON_REQUEST;
}

interface GetPersonSuccessAction {
  type: ActionType.GET_PERSON_SUCCESS;
  payload: {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
  } | undefined;
}

interface GetPersonErrorAction {
  type: ActionType.GET_PERSON_ERROR;
  payload: string;
}

interface UpdatePersonRequestAction {
  type: ActionType.UPDATE_PERSON_REQUEST;
}

interface UpdatePersonSuccessAction {
  type: ActionType.UPDATE_PERSON_SUCCESS;
  payload: {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    address?: {
      id?: number;
      street?: string;
      suite?: string;
      city?: string;
      zipcode?: string;
    };
    verification?: {
      id?: number;
      identity?: string;
      payment_method?: string;
      address?: string;
      phone?: string;
    };
  } | undefined;
}

interface UpdatePersonErrorAction {
  type: ActionType.UPDATE_PERSON_ERROR;
  payload: string;
}

// ADDRESS
interface GetAddressRequestAction {
  type: ActionType.GET_ADDRESS_REQUEST;
}

interface GetAddressSuccessAction {
  type: ActionType.GET_ADDRESS_SUCCESS;
  payload: {
    id?: number;
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
  } | undefined;
}

interface GetAddressErrorAction {
  type: ActionType.GET_ADDRESS_ERROR;
  payload: string;
}

// VERIFICATION
interface GetVerificationRequestAction {
  type: ActionType.GET_VERIFICATION_REQUEST;
}

interface GetVerificationSuccessAction {
  type: ActionType.GET_VERIFICATION_SUCCESS;
  payload: {
    id?: number;
    identity?: string;
    payment_method?: string;
    address?: string;
    phone?: string;
  } | undefined;
}

interface GetVerificationErrorAction {
  type: ActionType.GET_VERIFICATION_ERROR;
  payload: string;
}

export type Action = 
  GetPersonRequestAction | GetPersonSuccessAction | GetPersonErrorAction |
  UpdatePersonRequestAction | UpdatePersonSuccessAction | UpdatePersonErrorAction |
  GetAddressRequestAction | GetAddressSuccessAction | GetAddressErrorAction |
  GetVerificationRequestAction | GetVerificationSuccessAction | GetVerificationErrorAction
