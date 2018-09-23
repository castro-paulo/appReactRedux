import * as api from '../api'

export const ADD_PACKAGE = 'ADD_PACKAGE'

export const getPackages = () => {
  return dispatch => {
    api.getPackages()
      .then(payload => dispatch({ type: ADD_PACKAGE, payload }))
      .catch(() => console.error('error colecting data'))
  }
}

export const getPackageById = (id) => {
  return dispatch => {
    api.getPackageById(id)
      .then(payload => dispatch({ type: ADD_PACKAGE, payload: [ payload ] }))
      .catch(() => console.error('error colecting data'))
  }
}
