import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface Person {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  address?: Address;
  verification?: Verification;
}
interface People {
  data?: Person[];
}
interface Address {
  id?: number;
  street?: string;
  suite?: string;
  city?: string;
  zipcode?: string;
}
interface Addresses {
  data?: Address[];
}
interface Verification {
  id?: number;
  identity?: string;
  payment_method?: string;
  address?: string;
  phone?: string;
}
interface Verifications {
  data?: Verification[];
}

const getPerson = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_PERSON_REQUEST
    });

    try {
      const people: People  = await new Promise((res) => {
        setTimeout(() => res({
          "data": [
            {
              "id": 1,
              "name": "Leanne Graham",
              "username": "Bret",
              "email": "bret@bret.com"
            },
            {
              "id": 2,
              "name": "Ervin Howell",
              "username": "Antonette",
              "email": "antonette@google.com"
            },
          ]
        }), 2000)
      });

      const person = people && people?.data && people?.data.find((person: Person) => person.id === Number(id))

      dispatch({
        type: ActionType.GET_PERSON_SUCCESS,
        payload: person
      });
    } catch (err: unknown) {
      dispatch({
        type: ActionType.GET_PERSON_ERROR,
        payload: "Error fetching person"
      });
    }
  }
}

const updatePerson = (person: Person) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.UPDATE_PERSON_REQUEST
    });

    try {
      dispatch({
        type: ActionType.UPDATE_PERSON_SUCCESS,
        payload: person
      });
    } catch (err: unknown) {
      dispatch({
        type: ActionType.UPDATE_PERSON_ERROR,
        payload: "Error updating person"
      });
    }
  }
}

const getAddress = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_ADDRESS_REQUEST
    });

    try {
      const addresses: Addresses = await new Promise((res) => {
        setTimeout(() => res({
          "data": [
            {
              "id": 1,
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874",
            },{
              "id": 2,
              "street": "Victor Plains",
              "suite": "Suite 879",
              "city": "Wisokyburgh",
              "zipcode": "90566-7771",
            },
          ]
        }), 2000)
      });

      const address = addresses && addresses?.data && addresses?.data.find((address: Address) => address.id === Number(id))

      dispatch({
        type: ActionType.GET_ADDRESS_SUCCESS,
        payload: address
      });
    } catch (err: unknown) {
      dispatch({
        type: ActionType.GET_ADDRESS_ERROR,
        payload: "Error fetching address"
      });
    }
  }
}

const getVerification = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_VERIFICATION_REQUEST
    });

    try {
      const verifications: Verifications = await new Promise((res) => {
        setTimeout(() => res({
          "data": [
            {
              "id": 1,
              "identity": "verified",
              "payment_method": "verified",
              "address": "verified",
              "phone": "verified"
            },
            {
              "id": 2,
              "identity": "verified",
              "payment_method": "verified",
              "address": "verified",
              "phone": "pending",
            },
          ]
        }), 2000)
      });

      const verification = verifications && verifications?.data && verifications?.data.find((verification: Verification) => verification.id === Number(id))

      dispatch({
        type: ActionType.GET_VERIFICATION_SUCCESS,
        payload: verification
      });
    } catch (err: unknown) {
      dispatch({
        type: ActionType.GET_VERIFICATION_ERROR,
        payload: "Error fetching verification"
      });
    }
  }
}

export const settingActionCreators = {
  getPerson,
  getAddress,
  getVerification,
  updatePerson
};