import { systemConstants }  from '../constants';
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
          if(result.success)
          {
            dispatch(getDataSuccess(result.data));
          }
          else{
            dispatch(getDataFailure(result.data))
          }
        },
        err => {
          dispatch(getDataFailure(err))
        }
      );
  };

  function getData() { return { type: systemConstants.GET_INFO_REQUEST }}
  function getDataSuccess(contacts) { return { type: systemConstants.GET_INFO_SUCCESS, contacts }}
  function getDataFailure(error) { return { type: systemConstants.GET_INFO_FAILED, error }}
}