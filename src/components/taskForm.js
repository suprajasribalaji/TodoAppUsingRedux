import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, editTask, deleteTask } from "../actions";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();
  const storedData = useSelector((state) => state.tasks);

  const handleChange1 = (e) => setTask(e.target.value);
  const handleChange2 = (e) => setDescription(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && description) {
      if (edit !== false) {
        dispatch(editTask(edit, task, description));
        setEdit(false);
      } else {
        dispatch(addTask(task, description));
      }
      setTask("");
      setDescription("");
    }
  };

  const handleDelete = (index) => {
    dispatch(deleteTask(index));
  };

  const handleEdit = (index) => {
    if (storedData && storedData.tasks && storedData.tasks[index]) {
      setEdit(index);
      const selectedItem = storedData.tasks[index];
      setTask(selectedItem.task);
      setDescription(selectedItem.description);
    }
  };
  

  return (
    <div className="add-show-task">
      <div className="task-form add-data">
        <div className="task-form-header">
          <h4>Note Here</h4>
        </div>
        <div className="task-form-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="title"
                name="title"
                value={task}
                onChange={handleChange1}
              />
              <br />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control form-control-sm"
                id="description"
                rows="3"
                name="description"
                value={description}
                onChange={handleChange2}
              ></textarea>
              <br />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-outline-success btn-sm">
                {edit !== false ? "Save Changes" : "Add Note"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="task-form display-form-data">
        <div>
          <h4>
            {storedData.tasks.map((data, index) => (
              <div className="fetched-data" key={index}>
                <div className="form-data">
                  <h3>{data.task}</h3>
                  <h5>{data.description}</h5>
                </div>
                <div className="edit-delete-button" key={index}>
                  <button
                    type="submit"
                    className="btn btn-outline-warning btn-sm btn-edit"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    type="submit"
                    className="btn btn-outline-danger btn-sm btn-delete"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
                <br />
              </div>
            ))}
          </h4>
        </div>
      </div>
    </div>
  );
  
};

export default TaskForm;
