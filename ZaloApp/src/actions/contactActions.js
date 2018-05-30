import { contactConstants } from '../constants';
import { contactService } from '../service';

export const contactActions = {
  getContact
}

function getContact() {
  return (dispatch) => {
    dispatch(getData())

    //dispatch(getDataSuccess(username));
    contactService.getContact()
      .then(
        result => {
          if (result.success) {
            dispatch(getDataSuccess(result.data));
          }
          else {
            dispatch(getDataFailure(result.data))
          }
        },
        err => {
          dispatch(getDataFailure(err))
        }
      );
  };

  function getData() { return { type: contactConstants.GET_CONTACT_REQUEST } }
  function getDataSuccess(contacts) { return { type: contactConstants.GET_CONTACT_SUCCESS, contacts } }
  function getDataFailure(error) { return { type: contactConstants.GET_CONTACT_FAILED, error } }
}

