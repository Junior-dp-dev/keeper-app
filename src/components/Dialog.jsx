import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Axios from "axios";

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    title: props.title,
    content: props.content,
  });

  const handleEdit = () => {
    Axios.put("http://localhost:3000/edit", {
      id: editValues.id,
      title: editValues.title,
      content: editValues.content,
    }).then(() => {
      props.onRefresh();
    });
    handleClose();
  };

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChangeValues = (value) => {
    setEditValues((prevValues) => ({ ...prevValues, [value.target.id]: value.target.value }));
  };

  return (
    <Dialog open={props.open} onClose={handleClose}>
      <DialogTitle>Editar</DialogTitle>
      <DialogContent>
        <TextField autoFocus margin="dense" id="title" defaultValue={props.title} onChange={handleChangeValues} label="Title" type="text" fullWidth variant="standard" />
        <TextField autoFocus margin="dense" id="content" defaultValue={props.content} onChange={handleChangeValues} label="Content" type="text" fullWidth variant="standard" />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleEdit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
