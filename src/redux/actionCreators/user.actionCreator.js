import axios from "axios";
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

export const getUsers = () => {
  return (dispatch) => {
    dispatch({
      type: GET_USERS_LOADING,
    });
    axios
      .get("http://localhost:4500/users", {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const users = response.data;
        dispatch({
          type: GET_USERS_SUCCESS,
          payload: {
            users: users,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_USERS_FAILURE,
          payload: {
            error: error.message,
          },
        });
      });
  };
};

export const addUser = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_USERS_LOADING,
    });
    axios
      .post("http://localhost:4500/users", data, {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const user = response.data;
        dispatch({
          type: ADD_USERS_SUCCESS,
          payload: {
            user: user,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: ADD_USERS_FAILURE,
          payload: {
            error: error.message,
          },
        });
      });
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_USER_LOADING,
    });
    axios
      .delete("http://localhost:4500/users" + `/${id}`)
      .then((response) => {
        dispatch({
          type: DELETE_USER_SUCCESS,
          payload: {
            id: id,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_USER_FAILURE,
          payload: {
            error: error.message,
          },
        });
      });
  };
};

export const updateUser = (data) => {
  console.log(data);
  return (dispatch) => {
    console.log(data.id, "inside return");
    dispatch({
      type: UPDATE_USER_LOADING,
    });
    axios
      .put("http://localhost:4500/users" + `/${JSON.parse(data).id}`, data, {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response, "looking resp");
        const user = response.data;
        dispatch({
          type: UPDATE_USER_SUCCESS,
          payload: {
            user: user,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_USER_FAILURE,
          payload: {
            error: error.message,
          },
        });
      });
  };
};

export const saveColumnState = (columnState) => {
  return (dispatch) => {
    dispatch({
      type: SAVE_GRID_COLUMN_STATE,
      payload: { columnState },
    });
  };
};

export const saveGridFilterModel = (filterModel) => {
  return (dispatch) => {
    dispatch({
      type: SAVE_GRID_FILTER_MODEL,
      payload: { filterModel },
    });
  };
};
