import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FormDialog from "./Dialog";

function Note(props) {
  const [open, setOpen] = React.useState(false);

  function handleDelete() {
    props.onDelete(props.id);
  }

  return (
    <>
      <FormDialog open={open} setOpen={setOpen} id={props.id} title={props.title} content={props.content} notes={props.notes} setNotes={props.setNotes} onRefresh={props.onRefresh} />
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleDelete}>
          <DeleteIcon />
        </button>
        <button
          onClick={() => {
            setOpen(true);
          }}>
          <EditIcon />
        </button>
      </div>
    </>
  );
}

export default Note;
