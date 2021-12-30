import { AgGridReact } from "ag-grid-react/lib/agGridReact";
import "./crud.css";
import React, { useEffect, useState } from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Button, Grid } from "@material-ui/core";
import FormDialog from "./dialog";
import { useSelector, useDispatch } from "react-redux";
import {
  getUsers,
  addUser,
  deleteUser,
  saveColumnState,
  saveGridFilterModel,
  updateUser,
} from "../redux/actionCreators/user.actionCreator";

const initialValue = {
  name: "",
  email: "",
  phone: "",
  dob: "",
};

function Crud() {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState(initialValue);
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  console.log(state.userReducer.users);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue);
  };

  const columnDefs = [
    { headerName: "ID", field: "id" },
    { headerName: "Name", field: "name" },
    { headerName: "Email", field: "email" },
    { headerName: "Number", field: "phone" },
    { headerName: "DOB", field: "dob" },
    {
      headerName: "",
      field: "id",
      cellRendererFramework: (params) => (
        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleUpdate(params.data)}
          >
            Update
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleDelete(params.value)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const defaultColDef = {
    sortable: true,
    flex: 1,
    filter: true,
    floatingFilter: true,
  };

  const AgGridOptions = {
    columnDefs: columnDefs,
    defaultColDef: defaultColDef,
    onFirstDataRendered: (params) => {
      let columnState = state.userReducer.columnState;
      let filterModel = state.userReducer.filterModel;
      if (columnState) {
        params.columnApi.applyColumnState({
          state: columnState,
        });
      }
      if (filterModel) {
        params.api.setFilterModel(filterModel);
      }
    },

    onSortChanged: (params) => {
      dispatch(saveColumnState(params.columnApi.getColumnState()));
      // dispatch({
      //   type: SAVE_GRID_COLUMN_STATE,
      //   payload: { columnState: params.columnApi.getColumnState() },
      // });
    },
    onFilterChanged: (params) => {
      dispatch(saveGridFilterModel(params.api.getFilterModel()));
    },
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleFormSubmit = () => {
    if (formData.id) {
      dispatch(updateUser(JSON.stringify(formData)));
    } else {
      dispatch(addUser(JSON.stringify(formData)));
    }
    handleClose();
    setFormData(initialValue);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleUpdate = (oldData) => {
    console.log(oldData);
    setFormData(oldData);
    handleClickOpen();
  };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  const onChange = (e) => {
    const { value, id } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div className="App">
      <h1 align="center">React App</h1>
      {state.userReducer.loading ? "Loading" : null}
      <h3>CRUD Operations</h3>
      <Grid align="right">
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Add User
        </Button>
      </Grid>
      <div className="ag-theme-alpine" style={{ height: "300px" }}>
        <AgGridReact
          rowData={state.userReducer.users}
          gridOptions={{ ...AgGridOptions }}
        />
      </div>
      <FormDialog
        open={open}
        handleClose={handleClose}
        data={formData}
        onChange={onChange}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default Crud;
