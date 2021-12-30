import {
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  ADD_USERS_LOADING,
  ADD_USERS_SUCCESS,
  ADD_USERS_FAILURE,
  DELETE_USER_LOADING,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  UPDATE_USER_LOADING,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  SAVE_GRID_COLUMN_STATE,
  SAVE_GRID_FILTER_MODEL,
} from "../actions/actions";

const initialState = {
  loading: false,
  users: [],
  error: "",
  columnState: null,
  filterModel: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        // users: state.users,
        users: [...action.payload.users],
        error: "",
      };

    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case ADD_USERS_LOADING:
      return {
        ...state,
        loading: true,
        error: "",
      };

    case ADD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users, action.payload.user],
        error: "",
      };

    case ADD_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case DELETE_USER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users.filter((user) => user.id != action.payload.id)],
        // users: state.users.filter((user) => user.id != action.payload.id),
        error: "",
      };

    case DELETE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case UPDATE_USER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users].map((user) =>
          user.id === action.payload.user.id ? action.payload.user : user
        ),
        error: "",
      };

    case UPDATE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case SAVE_GRID_COLUMN_STATE:
      return {
        ...state,
        columnState: action.payload.columnState,
      };

    case SAVE_GRID_FILTER_MODEL:
      return {
        ...state,
        filterModel: action.payload.filterModel,
      };
    default:
      return state;
  }
};

export default userReducer;
