import roomIdGenerator from 'services/roomIdGenerator';

import {
  CREATE_ROOM,
  REFRESH_ROOM_ID,
  CREATE_ROOM_ERROR,
  CREATE_ROOM_SUCCESS,
  JOIN_ROOM_SUCCESS,
  JOIN_ROOM_ERROR,
  JOIN_ROOM,
} from 'redux/actions/room';

const initialState = {
  id: roomIdGenerator(),
  creating: false,
  errorCreating: null,
  active: null,
  joinRoomId: '',
  joining: false,
  errorJoining: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REFRESH_ROOM_ID:
      return { ...state, id: roomIdGenerator() };
    case CREATE_ROOM:
      return { ...state, creating: true, errorCreating: null, active: false };
    case CREATE_ROOM_ERROR:
      return {
        ...state,
        creating: false,
        errorCreating: action.payload,
        active: false,
      };
    case CREATE_ROOM_SUCCESS:
      return { ...state, creating: false, errorCreating: null, active: true };
    case JOIN_ROOM:
      return {
        ...state,
        joinRoomId: action.payload.roomId,
        joining: true,
        errorJoining: null,
        active: false,
      };
    case JOIN_ROOM_SUCCESS:
      return { ...state, joining: false, errorJoining: null, active: true };
    case JOIN_ROOM_ERROR:
      return {
        ...state,
        joining: false,
        errorJoining: action.payload,
        active: false,
      };
    default:
      return state;
  }
};
