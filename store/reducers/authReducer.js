import * as AuthActions from '../actionTypes/authActionTypes'

const initialState = {
  isLoggined: null,
  loading: false,
  name: null
}

const authenticatedState = {
  isLoggined: true,
  loading: false,
  name: 'test'
}

export default (
  state = authenticatedState,
  {type, payload}
  ) => {
    switch(type) {
      default:
        return state
    }
}