import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField } from "@material-ui/core";

export default function FormDialog({
  open,
  handleClose,
  data,
  onChange,
  handleFormSubmit,
}) {
  const { id, name, dob, phone, email } = data;
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {id ? "Update User" : "Create New User"}
        </DialogTitle>
        <DialogContent>
          <form>
            <TextField
              id="name"
              placeholder="Enter User Name"
              label="Name"
              variant="outlined"
              margin="dense"
              value={name}
              onChange={(e) => onChange(e)}
              fullWidth
            ></TextField>
            <TextField
              id="email"
              placeholder="Enter Email"
              label="Email"
              variant="outlined"
              margin="dense"
              value={email}
              onChange={(e) => onChange(e)}
              fullWidth
            ></TextField>
            <TextField
              id="phone"
              placeholder="Enter Phone Number"
              label="Phone Number"
              variant="outlined"
              margin="dense"
              value={phone}
              onChange={(e) => onChange(e)}
              fullWidth
            ></TextField>
            <TextField
              id="dob"
              placeholder="Enter Date of birth"
              label="Date of birth"
              variant="outlined"
              margin="dense"
              value={dob}
              onChange={(e) => onChange(e)}
              fullWidth
            ></TextField>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button
            onClick={() => handleFormSubmit()}
            variant="contained"
            color="primary"
          >
            {id ? "Update" : "Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
